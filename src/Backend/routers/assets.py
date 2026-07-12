from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Asset
from schemas import AssetCreate, AssetResponse


router = APIRouter(
    prefix="/assets",
    tags=["Assets"]
)


# CREATE ASSET
@router.post("/", response_model=AssetResponse)
def create_asset(
    asset: AssetCreate,
    db: Session = Depends(get_db)
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
    db: Session = Depends(get_db)
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