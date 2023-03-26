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
  joe_shanghai = Business(
    store_name="Joe's Shanghai",
    description="Shanghainese, Seafood, Noodles",
    city="New York",
    state="NY",
    address="46 Bowery St",
    zipcode=10013,
    business_type="restaurant",
    opening_time="11:00",
    closing_time="22:00",
    phone_num="2122338888",
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
    avg_rating=0,
    num_reviews=0,
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
  nytdr = Business(
    store_name="New York Total Damage Restoration",
    description="Damage Restoration, General Contractors, Environmental Abatement",
    city="New York",
    state="NY",
    address="1115 Broadway Ave",
    zipcode=10010,
    business_type="home",
    opening_time="10:00",
    closing_time="19:00",
    phone_num="6466902283",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  zy = Business(
    store_name="Z & Y Restaurant",
    description="Chinese, Seafood, Soup",
    city="San Francisco",
    state="CA",
    address="655 Jackson St",
    zipcode=94133,
    business_type="restaurant",
    opening_time="11:30",
    closing_time="21:00",
    phone_num="4159818988",
    avg_rating=0,
    num_reviews=0,
    owner_id=3
  )
  moe_tire = Business(
    store_name="Moe's Tires & Auto Repair",
    description="Auto Repair",
    city="San Francisco",
    state="CA",
    address="375 Vermont St",
    zipcode=94103,
    business_type="auto",
    opening_time="7:00",
    closing_time="20:00",
    phone_num="6509106946",
    avg_rating=0,
    num_reviews=0,
    owner_id=1
  )
  enzi = Business(
    store_name="Enzi Hair",
    description="Hair Salons",
    city="San Francisco",
    state="CA",
    address="4448 18th St at Douglass",
    zipcode=94114,
    business_type="salon",
    opening_time="14:00",
    closing_time="19:00",
    phone_num="6509106946",
    avg_rating=0,
    num_reviews=0,
    owner_id=1
  )
  anchor_oyster_bar = Business(
    store_name="Anchor Oyster Bar",
    description="Since 1977, diners have been coming to this nautical-themed eatery for fresh fish & shellfish.",
    city="San Francisco",
    state="CA",
    address="579 Castro St",
    zipcode=94114,
    business_type="restaurant",
    opening_time="14:00",
    closing_time="19:00",
    phone_num="6509106946",
    avg_rating=0,
    num_reviews=0,
    owner_id=2
  )
  deli_board = Business(
    store_name="Deli Board",
    description="Lunch spot for sandwiches piled high with fillings like corned beef & pastrami, plus soups & salads.",
    city="San Francisco",
    state="CA",
    address="1058 Folsom St",
    zipcode=94103,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=2
  )
  brendas_french = Business(
    store_name="Brenda's French Soul Food",
    description="Fresh takes on beignets, po' boys & other Big Easy bites draw crowds to this narrow but airy spot.",
    city="San Francisco",
    state="CA",
    address="652 Polk St",
    zipcode=94102,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=2
  )
  boulevard= Business(
    store_name="Boulevard",
    description="Refined American fare from renowned chef Nancy Oakes at a chic Embarcadero spot boasting bay views.",
    city="San Francisco",
    state="CA",
    address="1 Mission St",
    zipcode=94105,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=3
  )
  toyota_parts = Business(
    store_name="Toyota Parts",
    description="Expert service for all things Toyota!",
    city="San Francisco",
    state="CA",
    address="4099 Geary Blvd",
    zipcode=94109,
    business_type="auto",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=4
  )
  JT_auto = Business(
    store_name="JT Auto Parts & Accessories Store",
    description="Provides a variety of car parts and accessories",
    city="San Francisco",
    state="CA",
    address="1239 Polk St #1",
    zipcode=94109,
    business_type="auto",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=4
  )
  oreilly = Business(
    store_name="O'Reilly Auto Parts",
    description="Small place, carries general items, friendly service.",
    city="San Francisco",
    state="CA",
    address="2300 16th St",
    zipcode=94103,
    business_type="auto",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  abc_motor = Business(
    store_name="ABC Motor",
    description="Local shop with excellent service and reasonable prices.",
    city="San Francisco",
    state="CA",
    address="351 S Van Ness Ave",
    zipcode=94103,
    business_type="auto",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  rite_way = Business(
    store_name="Rite-Way Electric",
    description="Rite-Way Electric is your primary source for exceptional marine, antique and industrial starters, alternators and AC electric motors.",
    city="San Francisco",
    state="CA",
    address="261 6th St",
    zipcode=94103,
    business_type="auto",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=4
  )
  code_salon = Business(
    store_name="CODE Salon",
    description="At CODE, we are in love with our craft and are passionate about using it to express individuality.",
    city="San Francisco",
    state="CA",
    address="370 4th Street Second Floor",
    zipcode=94107,
    business_type="salon",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  bottega = Business(
    store_name="BOTTEGA",
    description="Classic Italian fare including pizza, pasta & meat dishes are offered at this modest restaurant.",
    city="San Francisco",
    state="CA",
    address="1132 Valencia St",
    zipcode=94110,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  jims = Business(
    store_name="Jim's",
    description="Vintage, unpretentious diner serving American breakfast & lunch amid wood paneling & counter seats.",
    city="San Francisco",
    state="CA",
    address="2420 Mission St",
    zipcode=94110,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  home_instead = Business(
    store_name="Home Instead San Francisco",
    description="Home Instead San Francisco is an exceptional caregiver service that truly understands and cares about their clients and family members.",
    city="San Francisco",
    state="CA",
    address="1 Daniel Burnham Ct #307C",
    zipcode=94109,
    business_type="home",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  castros = Business(
    store_name="Castro's Cleaning Service",
    description="Castro's Cleaning Service aims to create your ideal space for your home or business. We have a solid reputation for spotless cleaning, meeting your every need with our wide range of services.",
    city="San Francisco",
    state="CA",
    address="2450 Mission St",
    zipcode=94110,
    business_type="home",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=3
  )
  grubstake = Business(
    store_name="Grubstake Diner",
    description="Set inside an old train car, this diner slings American staples & some Portuguese dishes till late.",
    city="San Francisco",
    state="CA",
    address="1525 Pine St",
    zipcode=94109,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=5
  )
  son_and_garden = Business(
    store_name="Son and Garden",
    description="Pastels, plants & flowery wallpaper outfit this cozy destination that serves New American dishes.",
    city="San Francisco",
    state="CA",
    address="700 Polk St",
    zipcode=94109,
    business_type="restaurant",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=3
  )
  artys = Business(
    store_name="Arty Hair Salon",
    description="Great haircut, good price point, excellent service.",
    city="San Francisco",
    state="CA",
    address="1680 Post St",
    zipcode=94115,
    business_type="salon",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=2
  )
  MJM = Business(
    store_name="MJM Maintenance LLC",
    description="M.J.M. Maintenance Co. is a commercial cleaning and janitorial company based in Glendale, California.",
    city="San Francisco",
    state="CA",
    address="308 Turk St",
    zipcode=94102,
    business_type="home",
    opening_time="09:00",
    closing_time="21:00",
    phone_num="4155527687",
    avg_rating=0,
    num_reviews=0,
    owner_id=2
  )


  db.session.add(brandons_donuts)
  db.session.add(da_andrea)
  db.session.add(midas)
  db.session.add(joe_shanghai)
  db.session.add(dunkins)
  db.session.add(dicken_thomas_construction)
  db.session.add(ariari)
  db.session.add(honeybliss)
  db.session.add(nytdr)
  db.session.add(zy)
  db.session.add(moe_tire)
  db.session.add(enzi)
  db.session.add(anchor_oyster_bar)
  db.session.add(deli_board)
  db.session.add(brendas_french)
  db.session.add(boulevard)
  db.session.add(toyota_parts)
  db.session.add(JT_auto)
  db.session.add(oreilly)
  db.session.add(abc_motor)
  db.session.add(rite_way)
  db.session.add(code_salon)
  db.session.add(bottega)
  db.session.add(jims)
  db.session.add(home_instead)
  db.session.add(castros)
  db.session.add(grubstake)
  db.session.add(son_and_garden)
  db.session.add(artys)
  db.session.add(MJM)
  db.session.commit()

def undo_businesses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM businesses")

    db.session.commit()
