from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Filter(db.Model):
    __tablename__ = "filters"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    reviews = db.Column(db.String)
    ratings = db.Column(db.String)
    category1 = db.Column(db.String)
    category2 = db.Column(db.String)
    category3 = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    user = db.relationship("User", back_populates="filter")

    def to_dict(self):
        return {
            'id': self.id,
            'reviews': self.reviews,
            'ratings': self.ratings,
            'category1': self.category1,
            'category2': self.category2,
            'category3': self.category3,
            'user_id': self.user_id
        }

    # filter = db.relationship("Filter", uselist=False, back_populates="user") this is for user model
