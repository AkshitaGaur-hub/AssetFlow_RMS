from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__="users"
    id=Column(Integer,primary_key=True,index=True)
    name=Column(String)
    email=Column(String,unique=True)
    password=Column(String)
    role=Column(
        String,
        default="Employee"
    )
    status=Column(
        String,
        default="Pending"
    )

class AssetRequest(Base):
    __tablename__ = "asset_requests"

    id = Column(Integer, primary_key=True)

    employee_id = Column(Integer, ForeignKey("users.id"))

    asset_id = Column(Integer, ForeignKey("assets.id"))

    status = Column(
        String,
        default="Pending"
    )


    employee = relationship("User")

    asset = relationship("Asset")
    
class Asset(Base):

    __tablename__="assets"

    id=Column(Integer,primary_key=True)

    tag=Column(String,unique=True)

    name=Column(String)

    category=Column(String)

    condition=Column(String)

    status=Column(
        String,
        default="Available"
    )



class Allocation(Base):

    __tablename__="allocations"

    id = Column(
        Integer,
        primary_key=True
    )

    asset_id = Column(
        Integer,
        ForeignKey("assets.id")
    )

    employee_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    requested_by = Column(
        Integer,
        ForeignKey("users.id")
    )

    status = Column(
        String,
        default="Pending"
    )