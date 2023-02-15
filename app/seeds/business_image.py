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
  joe_shanghai_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/uvRuBT-uL1JZn0K-wSj4IA/o.jpg",
    preview=True,
    business_id=4
  )
  joe_shanghai_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/fnHr4B2YEnRKlrJ6I7ZF_Q/o.jpg",
    preview=True,
    business_id=4
  )
  joe_shanghai_image3 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/gkp9bzPqrcaWIvgOJbatQw/o.jpgg",
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
  ariari_image_1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/x5UIZSKaoM09z4r_ASxp-A/o.jpg",
    preview=True,
    business_id=7
  )
  ariari_image_2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/6cVV3JhgBHlnUoJLGJXW_Q/o.jpg",
    preview=True,
    business_id=7
  )
  honeybliss_image = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/RTiLrVr5LjGGnPBGCQzxSQ/o.jpg",
    preview=True,
    business_id=9
  )
  nytdr_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/projectphoto/o5T0J-LUe6blAJ3D_8-5iA/o.jpg",
    preview=True,
    business_id=9
  )
  nytdr_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/projectphoto/lzenTPwpjat7kmbXzfIUsQ/o.jpg",
    preview=True,
    business_id=9
  )
  nytdr_image3 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/projectphoto/BBZvwWX1sqTWnO7ktCyT6Q/o.jpg",
    preview=True,
    business_id=9
  )
  zy_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/lusQgqxS5pjZiBL2e50K7g/o.jpg",
    preview=True,
    business_id=10
  )
  zy_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/LIXy6QH1VLizICEZV6CIFw/o.jpg",
    preview=True,
    business_id=10
  )
  zy_image3 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/2a5Obb8qu_JRAXy8_kpPVA/o.jpg",
    preview=True,
    business_id=10
  )
  moe_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/projectphoto/bJrwPfB_BTb_sRjSArgMmA/o.jpg",
    preview=True,
    business_id=11
  )
  moe_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/projectphoto/L4ukfog-cSitIdb6exw-tw/o.jpg",
    preview=True,
    business_id=11
  )
  enzi_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/k5spWpACt5fL9Akxhe8tqQ/l.jpg",
    preview=True,
    business_id=12
  )
  enzi_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/EhsX3wbvO6wIVo1q1tjLUQ/o.jpg",
    preview=True,
    business_id=12
  )

  db.session.add(brandons_donuts_image)
  db.session.add(da_andrea_image)
  db.session.add(midas_image)
  db.session.add(joe_shanghai_image1)
  db.session.add(joe_shanghai_image2)
  db.session.add(joe_shanghai_image3)
  db.session.add(dunkins_image)
  db.session.add(dicken_thomas_image)
  db.session.add(ariari_image_1)
  db.session.add(ariari_image_2)
  db.session.add(honeybliss_image)
  db.session.add(nytdr_image1)
  db.session.add(nytdr_image2)
  db.session.add(nytdr_image3)
  db.session.add(zy_image1)
  db.session.add(zy_image2)
  db.session.add(zy_image3)
  db.session.add(moe_image1)
  db.session.add(moe_image2)
  db.session.add(enzi_image1)
  db.session.add(enzi_image2)
  db.session.commit()

def undo_business_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM business_images")
        
    db.session.commit()
