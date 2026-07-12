from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas import UserCreate
from database import get_db
from models import User
from fastapi import HTTPException
from auth import create_access_token
from fastapi.security import OAuth2PasswordRequestForm
from role_dependencies import role_required

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post("/")
def create_user(
    name:str,
    email:str,
    db:Session=Depends(get_db)
):

    user = User(
        name=name,
        email=email,
        password="demo123",
        role="Employee",
        status="Pending"
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user



@router.get("/")
def get_users(
    db:Session=Depends(get_db)
):

    return db.query(User).all()

@router.post("/register")
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password,
        role=user.role,
        status="Pending"
    )


    db.add(new_user)
    db.commit()
    db.refresh(new_user)


    return {
        "message":"Registration submitted. Wait for admin approval."
    }

@router.get("/pending")
def pending_users(
    db:Session = Depends(get_db)
):

    users = db.query(User).filter(
        User.status=="Pending"
    ).all()

    return users


@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.email == form_data.username
    ).first()


    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )


    if user.password != form_data.password:
        raise HTTPException(
            status_code=400,
            detail="Wrong password"
        )


    if user.status != "Approved":
        raise HTTPException(
            status_code=403,
            detail="Waiting for approval"
        )


    token = create_access_token({
        "user_id": user.id,
        "role": user.role
    })


    return {
    "access_token": token,
    "token_type": "bearer",
    "user_id": user.id,
    "name": user.name,
    "role": user.role
}

@router.get("/admin/pending")
def get_pending_users(
    db:Session=Depends(get_db),
    admin: User = Depends(
        role_required(["Admin"])
    )
):

    users=db.query(User).filter(
        User.status=="Pending"
    ).all()


    return users


@router.put("/admin/approve/{user_id}")
def approve_user(
    user_id:int,
    db:Session=Depends(get_db),
    admin: User = Depends(
        role_required(["Admin"])
    )
):

    user=db.query(User).filter(
        User.id==user_id
    ).first()


    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )


    user.status="Approved"

    db.commit()


    return {
        "message":"User approved successfully"
    }


@router.put("/admin/reject/{user_id}")
def reject_user(
    user_id:int,
    db:Session=Depends(get_db),
    admin: User = Depends(
        role_required(["Admin"])
    )
):

    user=db.query(User).filter(
        User.id==user_id
    ).first()


    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )


    user.status="Rejected"

    db.commit()


    return {
        "message":"User rejected"
    }