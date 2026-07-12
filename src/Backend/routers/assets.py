from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from dependencies import get_current_user
from models import User
from models import Asset
from schemas import AssetCreate, AssetResponse
from role_dependencies import role_required
from models import User

router = APIRouter(
    prefix="/assets",
    tags=["Assets"]
)

@router.get("/my-assets")
def my_assets(
    db:Session=Depends(get_db),
    user:User=Depends(get_current_user)
):

    assets = db.query(Asset).join(
        Allocation
    ).filter(
        Allocation.employee_id == user.id
    ).all()


    return assets

# CREATE ASSET
@router.post("/", response_model=AssetResponse)
def create_asset(
    asset: AssetCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        role_required(["Admin", "Asset Manager"])
    )
):

    # check duplicate tag
    existing = db.query(Asset).filter(
        Asset.tag == asset.tag
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Asset tag already exists"
        )


    new_asset = Asset(
        tag=asset.tag,
        name=asset.name,
        category=asset.category,
        condition=asset.condition,
        status="Available"
    )


    db.add(new_asset)
    db.commit()
    db.refresh(new_asset)

    return new_asset



# GET ALL ASSETS
@router.get("/", response_model=list[AssetResponse])
def get_assets(
    db: Session = Depends(get_db),
    current_user: User = Depends(
        role_required([
            "Admin",
            "Asset Manager",
            "Department Head"
        ])
    )
):

    assets = db.query(Asset).all()

    return assets



# UPDATE ASSET
@router.put("/{asset_id}", response_model=AssetResponse)
def update_asset(
    asset_id: int,
    asset: AssetCreate,
    db: Session = Depends(get_db)
):

    existing = db.query(Asset).filter(
        Asset.id == asset_id
    ).first()


    if not existing:
        raise HTTPException(
            status_code=404,
            detail="Asset not found"
        )


    existing.tag = asset.tag
    existing.name = asset.name
    existing.category = asset.category
    existing.condition = asset.condition


    db.commit()
    db.refresh(existing)

    return existing



# DELETE ASSET
@router.delete("/{asset_id}")
def delete_asset(
    asset_id: int,
    db: Session = Depends(get_db)
):

    asset = db.query(Asset).filter(
        Asset.id == asset_id
    ).first()


    if not asset:
        raise HTTPException(
            status_code=404,
            detail="Asset not found"
        )


    db.delete(asset)
    db.commit()


    return {
        "message": "Asset deleted successfully"
    }

@router.post("/allocate")
def allocate_asset(
    asset_id:int,
    employee_id:int,
    db:Session=Depends(get_db),
    admin:User=Depends(role_required(["Admin"]))
):

    allocation = Allocation(
        asset_id=asset_id,
        employee_id=employee_id,
        status="Active"
    )

    db.add(allocation)

    asset=db.query(Asset).filter(
        Asset.id==asset_id
    ).first()

    asset.status="Assigned"

    db.commit()
    db.refresh(allocation)


    return {
        "message":"Asset allocated successfully"
    }