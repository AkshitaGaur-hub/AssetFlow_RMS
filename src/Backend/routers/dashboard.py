from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import User, Asset, Allocation
from dependencies import get_current_user


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def employee_dashboard(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    # Total assets in system
    total_assets = db.query(Asset).count()


    # Allocated assets to current employee
    assigned_assets = db.query(Allocation).filter(
        Allocation.employee_id == current_user.id,
        Allocation.status == "Active"
    ).count()


    # Available assets
    available_assets = db.query(Asset).filter(
        Asset.status == "Available"
    ).count()


    # Active allocations
    active_allocations = db.query(Allocation).filter(
        Allocation.status == "Active"
    ).count()



    return {

        "name": current_user.name,

        "total_assets": total_assets,

        "assigned_assets": assigned_assets,

        "available_assets": available_assets,

        "active_allocations": active_allocations

    }