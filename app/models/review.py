from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesses.id')),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    firstName = db.Column(db.String(40), nullable=False)
    lastInitial = db.Column(db.String(1), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    # imgUrl = db.Column(db.String(255), nullable=False)
    # reviewImages = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    business = db.relationship('Business', back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')
    images = db.relationship('Review_Image', back_populates='review', cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'business_id': self.business_id,
            'user_id': self.user_id,
            'firstName': self.firstName,
            'lastInitial': self.lastInitial,
            'content': self.content,
            'rating': self.rating,
            # 'imgUrl': self.imgUrl,
            'reviewImages': [image.to_dict() for image in self.images],
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': self.user.to_dict()
        }

class Review_Image(db.Model):
    __tablename__ = 'review_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")))
    url = db.Column(db.String(500), nullable=False)

    review = db.relationship('Review', back_populates='images')

    def to_dict(self):
        return {
            "id": self.id,
            "review_id": self.review_id,
            "url": self.url,
        }
