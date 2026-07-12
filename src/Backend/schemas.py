from pydantic import BaseModel


class AssetCreate(BaseModel):
    tag: str
    name: str
    category: str
    condition: str


class AssetResponse(BaseModel):
    id: int
    tag: str
    name: str
    category: str
    condition: str
    status: str

    class Config:
        from_attributes = True