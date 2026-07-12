from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from role_dependencies import role_required
from models import AssetRequest, Asset, User, Allocation
from database import get_db
from dependencies import get_current_user


router = APIRouter(
    prefix="/requests",
    tags=["Requests"]
)



# employee request asset

@router.post("/")
def create_request(
    asset_id:int,
    db:Session=Depends(get_db),
    user:User=Depends(get_current_user)
):

    asset = db.query(Asset).filter(
        Asset.id == asset_id
    ).first()


    if not asset:
        raise HTTPException(
            404,
            "Asset not found"
        )


    request = AssetRequest(
        employee_id=user.id,
        asset_id=asset_id,
        status="Pending"
    )


    db.add(request)
    db.commit()
    db.refresh(request)


    return {
        "message":"Request submitted"
    }



@router.get("/pending")
def pending_requests(
    db: Session = Depends(get_db),
    admin: User = Depends(role_required(["Admin"]))
):

    requests = db.query(AssetRequest).filter(
        AssetRequest.status == "Pending"
    ).all()

    return requests

@router.put("/approve/{request_id}")
def approve_request(
    request_id:int,
    db:Session=Depends(get_db),
    admin:User=Depends(role_required(["Admin"]))
):

    request = db.query(AssetRequest).filter(
        AssetRequest.id == request_id
    ).first()


    if not request:
        raise HTTPException(
            404,
            "Request not found"
        )


    allocation = Allocation(
        asset_id=request.asset_id,
        employee_id=request.employee_id,
        status="Active"
    )


    asset = db.query(Asset).filter(
        Asset.id == request.asset_id
    ).first()


    asset.status="Allocated"


    request.status="Approved"


    db.add(allocation)

    db.commit()


    return {
        "message":"Request approved"
    }