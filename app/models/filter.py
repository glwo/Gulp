from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Filter(db.Model):
    __tablename__ == "filters":

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    reviews = db.Column(db.String)
    ratings = db.Column(db.String)
    category1 = db.Column(db.String)
    category2 = db.Column(db.String)
    category3 = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)
