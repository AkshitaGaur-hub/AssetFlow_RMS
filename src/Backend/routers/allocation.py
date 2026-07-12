from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Allocation, Asset, User


router = APIRouter(
    prefix="/allocation",
    tags=["Allocation"]
)


# ASSIGN ASSET TO EMPLOYEE
@router.post("/")
def allocate_asset(
    asset_id: int,
    employee_id: int,
    db: Session = Depends(get_db)
):

    # check asset exists
    asset = db.query(Asset).filter(
        Asset.id == asset_id
    ).first()


    if not asset:
        raise HTTPException(
            status_code=404,
            detail="Asset not found"
        )


    # check employee exists
    employee = db.query(User).filter(
        User.id == employee_id
    ).first()


    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )


    # check asset availability
    if asset.status == "Assigned":
        raise HTTPException(
            status_code=400,
            detail="Asset already assigned"
        )


    allocation = Allocation(
        asset_id=asset_id,
        employee_id=employee_id,
        status="Active"
    )


    # update asset status
    asset.status = "Assigned"


    db.add(allocation)
    db.commit()
    db.refresh(allocation)


    return {
        "message": "Asset allocated successfully",
        "allocation_id": allocation.id
    }



# GET ALL ALLOCATIONS
@router.get("/")
def get_allocations(
    db: Session = Depends(get_db)
):

    allocations = db.query(Allocation).all()

    return allocations



# RETURN ASSET
@router.put("/{allocation_id}/return")
def return_asset(
    allocation_id: int,
    db: Session = Depends(get_db)
):

    allocation = db.query(Allocation).filter(
        Allocation.id == allocation_id
    ).first()


    if not allocation:
        raise HTTPException(
            status_code=404,
            detail="Allocation not found"
        )


    asset = db.query(Asset).filter(
        Asset.id == allocation.asset_id
    ).first()


    allocation.status = "Returned"
    asset.status = "Available"


    db.commit()


    return {
        "message": "Asset returned successfully"
    }