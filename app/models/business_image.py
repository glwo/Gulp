from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class BusinessImage(db.Model):
  __tablename__ = 'business_images'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  image_url = db.Column(db.String, nullable=False)
  preview = db.Column(db.Boolean, nullable=False, default=True)
  created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
  updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

  business_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("businesses.id")))
  business = db.relationship("Business", back_populates="business_images")

  def to_dict(self):
    return {
      "id": self.id,
      "image_url": self.image_url,
      "preview": self.preview,
      "business_id": self.business_id
    }
