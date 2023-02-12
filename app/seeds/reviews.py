from app.models import db, Review, environment, SCHEMA

def seed_reviews():
    brandons_donuts = Review(
        business_id=1,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="This is a review",
        rating=5,
        imgUrl="https://i.imgur.com/4ZQZQ0C.png",
    )
    midas = Review(
        business_id=2,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="This is a review",
        rating=5,
        imgUrl="https://i.imgur.com/4ZQZQ0C.png",
    )


    db.session.add(brandons_donuts)
    db.session.add(midas)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
