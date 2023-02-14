from app.models import db, Business, environment, SCHEMA

# Add demo businesses seed
def seed_businesses():
  brandons_donuts = Business(
    store_name="Brandon's Donuts",
    description="Donuts, Bakeries, Desserts",
    city="New York",
    state="NY",
    address="449 Court St",
    zipcode=11231,
    business_type="restaurant",
    opening_time="9:00",
    closing_time="18:00",
    phone_num='9293376354',
    avg_rating=0,
    num_reviews=0,
    owner_id=1
  )
  da_andrea = Business(
    store_name="Da Andrea",
    description="Italian, Mediterranean, Breakfast and Brunch",
    city="New York",
    state="NY",
    address="35 W 13th St",
    zipcode=10011,
    business_type="restaurant",
    opening_time="11:30",
    closing_time="22:00",
    phone_num='2123671979',
    avg_rating=0,
    num_reviews=0,
    owner_id=1
  )
  midas = Business(
    store_name="Midas",
    description="Auto Repair, Oil Change Station, Tires",
    city="Maspeth",
    state="NY",
    address="60 Eliot Ave",
    zipcode=11378,
    business_type="auto",
    opening_time="8:00",
    closing_time="15:00",
    phone_num='3479438504',
    avg_rating=0,
    num_reviews=0,
    owner_id=2
  )
  poke_burrito = Business(
    store_name="Poke Burrito",
    description="Hawaiian, Poke, Seafood",
    city="Astoria",
    state="NY",
    address="3707 30th Ave",
    zipcode=11103,
    business_type="restaurant",
    opening_time="11:00",
    closing_time="22:00",
    phone_num="9293280041",
    avg_rating=0,
    num_reviews=0,
    owner_id=3
  )
  dunkins = Business(
    store_name="Dunkin'",
    description="Donuts, Bakeries, Desserts",
    city="Brooklyn",
    state="NY",
    address="1285 Broadway",
    zipcode=11221,
    business_type="restaurant",
    opening_time="5:00",
    closing_time="21:00",
    phone_num="7184539880",
    avg_rating=0,
    num_reviews=0,
    owner_id=4
  )
  dicken_thomas_construction = Business(
    store_name="Dickens Thomas Construction",
    description="Certified Professional, 31 years in business, free estimates",
    city="San Francisco",
    state="CA",
    address="San Francisco Area",
    zipcode=12345,
    business_type="home",
    opening_time="7:00",
    closing_time="20:00",
    phone_num="4154255224",
    avg_rating=0,
    num_reviews=0,
    owner_id=3
  )
  ariari = Business(
    store_name="ARIARI",
    description="Korean, Tapas/Small Plates, Gastropubs",
    city="New York",
    state="NY",
    address="119 1st Ave",
    zipcode=10003,
    business_type="restaurant",
    opening_time="17:00",
    closing_time="22:00",
    phone_num="6464227466",
    avg_rating=4.6,
    num_reviews=20,
    owner_id=3
  )
  honeybliss = Business(
    store_name="Honeybliss Salon",
    description="Hair Salons",
    city="New York",
    state="NY",
    address="128 E 84th St",
    zipcode=10028,
    business_type="salon",
    opening_time="17:00",
    closing_time="22:00",
    phone_num="2122881676",
    avg_rating=0,
    num_reviews=0,
    owner_id=1
  )

  db.session.add(brandons_donuts)
  db.session.add(da_andrea)
  db.session.add(midas)
  db.session.add(poke_burrito)
  db.session.add(dunkins)
  db.session.add(dicken_thomas_construction)
  db.session.add(ariari)
  db.session.add(honeybliss)
  db.session.commit()

def undo_businesses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM businesses")

    db.session.commit()
