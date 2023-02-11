from app.models import db, BusinessImage, environment, SCHEMA


#Add demo business images seed
def seed_business_images():
  brandons_donuts_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/A1e0V_mX0AzbCM8f_M8K9Q/o.jpg",
    preview=True,
    business_id=1
  )
  midas_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/businessregularlogo/UeQfzEYrof8Ig32RaZvMKA/348s.jpg",
    preview=True,
    business_id=2
  )

  db.session.add(brandons_donuts_image)
  db.session.add(midas_image)
  db.session.commit()

def undo_business_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM business_images")
        
    db.session.commit()
