from pydantic import BaseModel
from typing import Literal

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


class UserCreate(BaseModel):
    name:str
    email:str
    password:str

    role:Literal[
        "Asset Manager",
        "Department Head",
        "Employee"
    ] = "Employee"

class UserResponse(BaseModel):
    id:int
    name:str
    email:str
    role:str
    status:str

    class Config:
        from_attributes=True


class AllocationCreate(BaseModel):

    asset_id:int


class AllocationResponse(BaseModel):

    id:int
    asset_id:int
    employee_id:int
    status:str


    class Config:
        from_attributes=True