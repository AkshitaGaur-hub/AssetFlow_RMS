from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Asset, User, Allocation


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db)
):

    total_assets = db.query(Asset).count()

    available_assets = db.query(Asset).filter(
        Asset.status == "Available"
    ).count()


    assigned_assets = db.query(Asset).filter(
        Asset.status == "Assigned"
    ).count()


    total_employees = db.query(User).count()


    active_allocations = db.query(Allocation).filter(
        Allocation.status == "Active"
    ).count()


    return {
        "total_assets": total_assets,
        "available_assets": available_assets,
        "assigned_assets": assigned_assets,
        "total_employees": total_employees,
        "active_allocations": active_allocations
    }