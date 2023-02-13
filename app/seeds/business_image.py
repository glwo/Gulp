from app.models import db, BusinessImage, environment, SCHEMA


#Add demo business images seed
def seed_business_images():
  brandons_donuts_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/A1e0V_mX0AzbCM8f_M8K9Q/o.jpg",
    preview=True,
    business_id=1
  )
  da_andrea_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/8rthnXdxpj_tlpGnGgrGxQ/o.jpg",
    preview=True,
    business_id=2
  )
  midas_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/businessregularlogo/UeQfzEYrof8Ig32RaZvMKA/348s.jpg",
    preview=True,
    business_id=3
  )
  poke_burrito_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/VbxE9WXisPau74418W4q1A/o.jpg",
    preview=True,
    business_id=4
  )
  dunkins_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/UeC1m8AdHHBVGFFM_szynw/l.jpg",
    preview=True,
    business_id=5
  )
  dicken_thomas_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/4lKZRHyuYNKDhkSu5yd5-Q/o.jpg",
    preview=True,
    business_id=6
  )
  ariari_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/x5UIZSKaoM09z4r_ASxp-A/o.jpg",
    preview=True,
    business_id=7
  )
  honeybliss_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/RTiLrVr5LjGGnPBGCQzxSQ/o.jpg",
    preview=True,
    business_id=8
  )

  db.session.add(brandons_donuts_image)
  db.session.add(da_andrea_image)
  db.session.add(midas_image)
  db.session.add(poke_burrito_image)
  db.session.add(dunkins_image)
  db.session.add(dicken_thomas_image)
  db.session.add(ariari_image)
  db.session.add(honeybliss_image)
  db.session.commit()

def undo_business_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM business_images")
        
    db.session.commit()
