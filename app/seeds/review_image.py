from app.models import db, Review, environment, SCHEMA, Review_Image


def seed_review_image():
    brandons_donuts = Review_Image(
        review_id=1,
        url="https://i.imgur.com/4ZQZQ0C.png",
    )
    midas = Review_Image(
        review_id=2,
        url="https://i.imgur.com/4ZQZQ0C.png",
    )




    db.session.add(brandons_donuts)
    db.session.add(midas)
    db.session.commit()

def undo_review_image():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
