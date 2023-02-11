from app.models import db, Review, environment, SCHEMA

def seed_reviews():


# ----------seed reviews needed---------- #


    db.session.add()
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()

    
