from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name= 'Demo', last_name = 'Lition', username='Demo', email='demo@aa.io', img_url='https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg', bio="Positive and enthusiastic business owner!", password='password')
    marnie = User(
       first_name= 'Marnie', last_name = 'Higgins', username='marnie', email='marnie@aa.io', img_url='https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-06.jpg', bio="Just leaving my honest opinions about the businesses in my area!" , password='password')
    bobbie = User(
       first_name= 'Bobbie', last_name = 'Coffee', username='bobbie', email='bobbie@aa.io', img_url='https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg', bio="Contributing to my community one review at a time!", password='password')
    austin = User(
       first_name= 'Austin', last_name = 'Smith', username='austin', email='austin@aa.io', img_url='https://revgineer.com/wp-content/uploads/2019/12/ThisPersonDoesNotExist_fail2.jpg', bio="Interested in the community's perception of my business.", password='password')
    alex = User(
       first_name= 'Alex', last_name = 'Gurley', username='alex', email='alex@aa.io', img_url='https://iili.io/HJNb7FR.md.jpg', bio="It just dawned on me that I need to have my opinions heard!", password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(austin)
    db.session.add(alex)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
