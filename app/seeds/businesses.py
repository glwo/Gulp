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
    business_type="Bakery",
    opening_time="9:00",
    closing_time="18:00",
    phone_num=9293376354,
    avg_rating=0,
    num_reviews=0,
    owner_id=1
  )

  db.session.add(brandons_donuts)
  db.session.commit()

def undo_businesses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM businesses")
        
    db.session.commit()
