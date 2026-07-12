from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Allocation, User, Asset
from schemas import AllocationCreate
from dependencies import get_current_user
from role_dependencies import role_required


router = APIRouter(
    prefix="/allocation",
    tags=["Allocation"]
)
@router.post("/")
def allocate_asset(
    allocation_id:int,
    db:Session=Depends(get_db),
    manager:User=Depends(
        role_required([
            "Admin",
            "Asset Manager"
        ])
    )
):

    allocation = db.query(Allocation).filter(
        Allocation.id == allocation_id
    ).first()


    if not allocation:
        raise HTTPException(
            status_code=404,
            detail="Request not found"
        )


    asset = db.query(Asset).filter(
        Asset.id == allocation.asset_id
    ).first()


    if asset.status != "Available":
        raise HTTPException(
            status_code=400,
            detail="Asset already allocated"
        )


    allocation.status="Active"

    asset.status="Allocated"


    db.commit()


    return {
        "message":"Asset allocated successfully",
        "allocation_id":allocation.id
    }

@router.post("/request")
def request_asset(
    asset_id:int,
    db:Session=Depends(get_db),
    employee:User=Depends(
        role_required(["Employee"])
    )
):

    asset=db.query(Asset).filter(
        Asset.id==asset_id
    ).first()


    if not asset:
        raise HTTPException(
            status_code=404,
            detail="Asset not found"
        )


    if asset.status!="Available":
        raise HTTPException(
            status_code=400,
            detail="Asset not available"
        )


    allocation=Allocation(
        asset_id=asset_id,
        employee_id=employee.id,
        status="Pending"
    )


    db.add(allocation)
    db.commit()
    db.refresh(allocation)


    return {
        "message":"Asset request sent",
        "request_id":allocation.id
    }


@router.get("/")
def get_allocations(
    db:Session=Depends(get_db)
):

    return db.query(Allocation).all()