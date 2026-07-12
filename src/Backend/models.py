# from fastapi import HTTPException
from sqlalchemy import Column,Integer,String,Date,ForeignKey
from database import Base


class User(Base):

    __tablename__="users"

    id=Column(Integer,primary_key=True,index=True)
    name=Column(String)
    email=Column(String,unique=True)
    password=Column(String)
    role=Column(String,default="Employee")



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

    id=Column(Integer,primary_key=True)

    asset_id=Column(Integer,ForeignKey("assets.id"))

    employee_id=Column(Integer,ForeignKey("users.id"))

    status=Column(String,default="Active")