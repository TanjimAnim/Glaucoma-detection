from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    reg_year = db.Column(db.String(4), nullable=False)
    gender = db.Column(db.String(1), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.String(32), nullable=False)
    date = db.Column(db.String(32), nullable=False)
    eye = db.Column(db.String(1), nullable=False)
    path = db.Column(db.String(345), nullable=False)
    prediction = db.Column(db.String(1), nullable=False)
    
class ClinicalData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.String(32), nullable=False)
    date = db.Column(db.String(32), nullable=False)
    eye = db.Column(db.String(1), nullable=False)
    dioptre1 = db.Column(db.String(10), nullable=False)
    dioptre2 = db.Column(db.String(10), nullable=False)
    gender = db.Column(db.String(1), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    astigmatism = db.Column(db.String(10), nullable=False)
    phakic =   db.Column(db.String(1), nullable=False)
    pneumatic = db.Column(db.String(10), nullable=False)
    perkins = db.Column(db.String(10), nullable=False)
    pachymetry = db.Column(db.String(10), nullable=False)
    axiallength = db.Column(db.String(10), nullable=False)
    vfmd = db.Column(db.String(10), nullable=False)
    prediction = db.Column(db.String(1), nullable=False)