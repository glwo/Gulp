from app.models import db, Review, environment, SCHEMA


def seed_reviews():
    brandons_donuts1 = Review(
        business_id=1,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="The apple pie donuts, for real, are melt in your mouth delicious!",
        rating=5,
    )
    brandons_donuts2 = Review(
        business_id=1,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="Nothing special! I think the presentation wins out over the flavor, the dough was a bit on the dry side, and the frosting was a bit too hard. I think the gingerbread donut with it's festive spices, super sweet sprinkles...",
        rating=2,
    )
    brandons_donuts3 = Review(
        business_id=1,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="I'm not a huge donut fan, but I do love a good apple pie, and this donut was a great combination of the two. The apple filling was sweet and tart, and the donut itself was soft and fluffy. I would recommend this donut to anyone who loves apple pie!",
        rating=3,
    )
    brandons_donuts4 = Review(
        business_id=1,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Tasty average sized donuts. The maple bacon was tasty. They have a few seats outside. Everything Visible was very clean",
        rating=4,
    )
    brandons_donuts5 = Review(
        business_id=1,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="I love donuts and I love Brandon's Donuts. I've been coming here for years and I've never been disappointed. The donuts are always fresh and the staff is always friendly. I highly recommend this place to anyone who loves donuts.",
        rating=5,
    )
    da_andrea1 = Review(
        business_id=2,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="I love this place! The food is always fresh and delicious. The staff is always friendly and helpful. I highly recommend this place to anyone who loves Italian food.",
        rating=5,
    )
    da_andrea2 = Review(
        business_id=2,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="The food was very decent, nothing too unique or awe-inspiring, but wow, the service is really top notch. The staff are kind, detail-oriented, and really made us feel so welcome and comfortable. ",
        rating=4,
    )
    da_andrea3 = Review(
        business_id=2,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="This place is a gem! The food is delicious and the staff is so friendly. I highly recommend this place to anyone who loves Italian food.",
        rating=5,
    )
    da_andrea4 = Review(
        business_id=2,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Tons of great options and all were superb. The crème brûlée in particular was perfect. So was the risotto.",
        rating=4,
    )
    da_andrea5 = Review(
        business_id=2,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="I'll admit, I chose this restaurant because my first name is Andrea. Well, it was a great choice! Their food was cooked perfectly and there pasta is made fresh. I'd highly recommend the pesto",
        rating=5,
    )
    midas1 = Review(
        business_id=3,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="I went to Midas to install 2 new tires and have my rear brakes done. The brakes were less expensive than the dealer. Everyone there is knowledgeable,friendly, courteous and accommodating.",
        rating=5,
    )
    midas2 = Review(
        business_id=3,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="I've been going to Midas for years. They are always friendly and helpful. They always do a great job and I never have any problems with my car after I leave. I highly recommend this place to anyone who needs their car fixed.",
        rating=5,
    )
    midas3 = Review(
        business_id=3,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content='Just left Midas after waiting for 40 min for an inspection just for a mechanic to come out to my truck in the parking lot and look at my wheels and tell me i needed brakes or I wont pass inspection.',
        rating=1,
    )
    midas4 = Review(
        business_id=3,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Terrible experience. Final charge (with hidden charges) is different from what has been agreed on. Save yourself the headache",
        rating=1,
    )
    midas5 = Review(
        business_id=3,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Great service. They are quick, honest and pleasant to deal with. I brought my older car in for a second opinion, and I'm so glad I did. I'll definitely be back.",
        rating=5,
    )
    joe_shanghai1 = Review(
        business_id=4,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="I love this place! The food is always fresh and delicious. The staff is always friendly and helpful. I highly recommend this place to anyone who loves Soup Dumplings.",
        rating=5,
    )
    joe_shanghai2 = Review(
        business_id=4,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="The place is a bit dirty, but the food is incredible. The soup dumplings are the best I've ever had.",
        rating=4,
    )
    joe_shanghai3 = Review(
        business_id=4,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Best soup dumplings in the city.",
        rating=5,
    )
    joe_shanghai4 = Review(
        business_id=4,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="The food is good, but the service is terrible. The staff is rude and unhelpful. I will not be returning.",
        rating=2,
    )
    joe_shanghai5 = Review(
        business_id=4,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Long wait time, but the food is worth it. The soup dumplings are amazing!",
        rating=4,
    )
    dunkins1 = Review(
        business_id=5,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="I love Dunkin Donuts! The coffee is always fresh and delicious. The staff is always friendly and helpful. I highly recommend this place to anyone who loves coffee.",
        rating=5,
    )
    dunkins2 = Review(
        business_id=5,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="The place is a bit dirty, but the coffee is good. The donuts are always fresh.",
        rating=4,
    )
    dunkins3 = Review(
        business_id=5,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Best coffee for a quick pick me up.",
        rating=5,
    )
    dunkins4 = Review(
        business_id=5,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Terrible coffee. I will not be returning.",
        rating=1,
    )
    dunkins5 = Review(
        business_id=5,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="My coffee was so hot that I burned my tongue.",
        rating=1,
    )
    dicken_thomas_construction1 = Review(
        business_id=6,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="They remodeled my kitchen and did a nice job. Only complaint is that they were a little slow.",
        rating=4,
    )
    dicken_thomas_construction2 = Review(
        business_id=6,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Very expensive, but they did a great job.",
        rating=5,
    )
    ariari1 = Review(
        business_id=7,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="The food is good, but the service is terrible. The staff is rude and unhelpful. I will not be returning.",
        rating=2,
    )
    ariari2 = Review(
        business_id=7,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Best Korean food in the city.",
        rating=5,
    )
    ariari3 = Review(
        business_id=7,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Nice Korean tapas, good selection of beer",
        rating=4,
    )
    honeybliss1 = Review(
        business_id=8,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Let me start off by saying I've been seeing Kadir S. for 5+ years. He is and always will be the only artist I let touch my hair!",
        rating=5,
    )
    honeybliss2 = Review(
        business_id=8,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Kadir is absolutely phenomenal! I started going to him about 5 years ago when I decided I wanted to go from brunette to a blonde balayage... he did it in such a way that my hair was still healthy.",
        rating=5,
    )
    nytdr1 = Review(
        business_id=9,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Very expensive, and took forever. I will not be returning.",
        rating=1,
    )
    zy1 = Review(
        business_id=10,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="I love this place! The food is always fresh and delicious. The staff is always friendly and helpful. I highly recommend this place to anyone who loves Chinese food.",
        rating=5,
    )
    zy2 = Review(
        business_id=10,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="The place is a bit dirty, but the food is good. The staff is always friendly and helpful.",
        rating=4,
    )
    moe_tire1 = Review(
        business_id=11,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="They sold me a tire that was defective. I will not be returning.",
        rating=1,
    )
    moe_tire2 = Review(
        business_id=11,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Got a flat tire on the way to work. They were able to fix it quickly and I was on my way.",
        rating=4,
    )
    enzi1 = Review(
        business_id=12,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Honeybliss is a much better salon. I will not be returning.",
        rating=1,
    )
    enzi2 = Review(
        business_id=12,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Got a really bad haircut here. I will not be returning.",
        rating=1,
    )
    anchor_oyster_bar1 = Review(
        business_id=13,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="If you love oysters, this is the place to go. The food is always fresh and delicious. The staff is always friendly and helpful. I highly recommend this place to anyone who loves oysters.",
        rating=5,
    )
    anchor_oyster_bar2 = Review(
        business_id=13,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Ate some really bad oysters here. I will not be returning.",
        rating=1,
    )
    deli_board1 = Review(
        business_id=14,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Huge old school sandwiches, expensive but worth it.",
        rating=4,
    )
    deli_board2 = Review(
        business_id=14,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Excellent salads, sandwiches, and soups. Gets crowded during lunch.",
        rating=4,
    )
    brendas_french1 = Review(
        business_id=15,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="The food is always super fresh and delicious here",
        rating=5,
    )
    brendas_french2 = Review(
        business_id=15,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Delicious French food with a twist.",
        rating=5,
    )
    boulevard1 = Review(
        business_id=16,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Great views of the city, but the food is overpriced and not very good.",
        rating=2,
    )
    boulevard2 = Review(
        business_id=16,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="We came here for a special occasion and the food was amazing. The service was great and the views were spectacular.",
        rating=5,
    )
    boulevard3 = Review(
        business_id=16,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Very fancy restaurant. Slow service but the food was spectacular.",
        rating=4,
    )
    toyota_parts1 = Review(
        business_id=17,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="I bought a part here and it was defective. Had to return it.",
        rating=1,
    )
    toyota_parts2 = Review(
        business_id=17,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Dealer parts are always more expensive than aftermarket parts.",
        rating=3,
    )
    JT_auto1 = Review(
        business_id=18,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Aftermarket parts are always cheaper than dealer parts.",
        rating=4,
    )
    JT_auto2 = Review(
        business_id=18,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Got some parts here to fix my car. They were very helpful and the parts were very reasonably priced.",
        rating=5,
    )
    oreilly1 = Review(
        business_id=19,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Always more expensive than JT Auto.",
        rating=2,
    )
    oreilly2 = Review(
        business_id=19,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="I bought some parts here and they were defective. Had to return them.",
        rating=1,
    )
    abc_motor1 = Review(
        business_id=20,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="We call him Dr. Sam in my family because he's the one we trust to keep our cars healthy. I always learn something from him about our cars as he very throughly explains what the issues are and what he's going to do.",
        rating=5,
    )
    abc_motor2 = Review(
        business_id=20,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="I've been going to ABC Motor for years. Sam is a great mechanic and a great guy. He's always honest and fair. I highly recommend him.",
        rating=5,
    )
    rite_way1 = Review(
        business_id=21,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="I've been going to Rite Way for years. Sam is a great mechanic and a great guy. He's always honest and fair. I highly recommend him.",
        rating=5,
    )
    rite_way2 = Review(
        business_id=21,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="The sell good motors. I bought one here and it's still running great.",
        rating=5,
    )
    code_salon1 = Review(
        business_id=22,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="I love this salon. The staff is always friendly and helpful. They do a great job with my hair.",
        rating=5,
    )
    code_salon2 = Review(
        business_id=22,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="Nice salon, but so expensive.",
        rating=3,
    )
    bottega1 = Review(
        business_id=23,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Excellent Italian food. The service is always great.",
        rating=5,
    )
    bottega2 = Review(
        business_id=23,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="The food is always good here, but the service is always slow.",
        rating=3,
    )
    bottega3 = Review(
        business_id=23,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Really good pizza and pasta. The service is always great.",
        rating=5,
    )
    bottega4 = Review(
        business_id=23,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Good food, good wine, good company. What more could you ask for?",
        rating=5,
    )
    bottega5 = Review(
        business_id=23,
        user_id=1,
        firstName="Demo",
        lastInitial="L",
        content="Fantastic food and service. I highly recommend this restaurant.",
        rating=5,
    )
    jims1 = Review(
        business_id=24,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Cheap quick food. The service is always great.",
        rating=4,
    )
    jims2 = Review(
        business_id=24,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="No frills diner but the food is always good.",
        rating=4,
    )
    home_instead1 = Review(
        business_id=25,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Really exception caregivers. They are always on time and very professional.",
        rating=5,
    )
    castros1 = Review(
        business_id=26,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Good cleaners. They are always on time and very professional.",
        rating=4,
    )
    castros2 = Review(
        business_id=26,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="They've always done a good job for me.",
        rating=4,
    )
    grubstake1 = Review(
        business_id=27,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Good food. Cool environment. The service is always great.",
        rating=4,
    )
    grubstake2 = Review(
        business_id=27,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="Got food poisoning here once. Never going back.",
        rating=1,
    )
    grubstake3 = Review(
        business_id=27,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Great burgers, fries, and shakes. The service is always great.",
        rating=5,
    )
    grubstake4 = Review(
        business_id=27,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Interesting menu. Anything you order is good.",
        rating=5,
    )
    son_and_garden1 = Review(
        business_id=28,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Cozy little restaurant. Nice drinks and great food.",
        rating=5,
    )
    son_and_garden2 = Review(
        business_id=28,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="Gets extremely busy on the weekends. Make a reservation.",
        rating=4,
    )
    son_and_garden3 = Review(
        business_id=28,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Great food and drinks. The service is always great.",
        rating=5,
    )
    son_and_garden4 = Review(
        business_id=28,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Feels like you're in a garden. The food is always good.",
        rating=5,
    )
    artys1 = Review(
        business_id=29,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="They burnt my hair. Never going back.",
        rating=1,
    )
    artys2 = Review(
        business_id=29,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="I've always had a good experience here.",
        rating=4,
    )
    MJM1 = Review(
        business_id=30,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="They've always done a good job for me cleaing my businesses.",
        rating=4,
    )
    MJM2 = Review(
        business_id=30,
        user_id=2,
        firstName="Bobby",
        lastInitial="S",
        content="Very professional. They always do a great job.",
        rating=4,
    )


    db.session.add(brandons_donuts1)
    db.session.add(brandons_donuts2)
    db.session.add(brandons_donuts3)
    db.session.add(brandons_donuts4)
    db.session.add(brandons_donuts5)
    db.session.add(da_andrea1)
    db.session.add(da_andrea2)
    db.session.add(da_andrea3)
    db.session.add(da_andrea4)
    db.session.add(da_andrea5)
    db.session.add(midas1)
    db.session.add(midas2)
    db.session.add(midas3)
    db.session.add(midas4)
    db.session.add(midas5)
    db.session.add(joe_shanghai1)
    db.session.add(joe_shanghai2)
    db.session.add(joe_shanghai3)
    db.session.add(joe_shanghai4)
    db.session.add(joe_shanghai5)
    db.session.add(dunkins1)
    db.session.add(dunkins2)
    db.session.add(dunkins3)
    db.session.add(dunkins4)
    db.session.add(dunkins5)
    db.session.add(dicken_thomas_construction1)
    db.session.add(dicken_thomas_construction2)
    db.session.add(ariari1)
    db.session.add(ariari2)
    db.session.add(ariari3)
    db.session.add(honeybliss1)
    db.session.add(honeybliss2)
    db.session.add(nytdr1)
    db.session.add(zy1)
    db.session.add(zy2)
    db.session.add(moe_tire1)
    db.session.add(moe_tire2)
    db.session.add(enzi1)
    db.session.add(enzi2)
    db.session.add(anchor_oyster_bar1)
    db.session.add(anchor_oyster_bar2)
    db.session.add(deli_board1)
    db.session.add(deli_board2)
    db.session.add(brendas_french1)
    db.session.add(brendas_french2)
    db.session.add(boulevard1)
    db.session.add(boulevard2)
    db.session.add(boulevard3)
    db.session.add(toyota_parts1)
    db.session.add(toyota_parts2)
    db.session.add(JT_auto1)
    db.session.add(JT_auto2)
    db.session.add(oreilly1)
    db.session.add(oreilly2)
    db.session.add(abc_motor1)
    db.session.add(abc_motor2)
    db.session.add(rite_way1)
    db.session.add(rite_way2)
    db.session.add(code_salon1)
    db.session.add(code_salon2)
    db.session.add(bottega1)
    db.session.add(bottega2)
    db.session.add(bottega3)
    db.session.add(bottega4)
    db.session.add(bottega5)
    db.session.add(jims1)
    db.session.add(jims2)
    db.session.add(home_instead1)
    db.session.add(castros1)
    db.session.add(castros2)
    db.session.add(grubstake1)
    db.session.add(grubstake2)
    db.session.add(grubstake3)
    db.session.add(grubstake4)
    db.session.add(son_and_garden1)
    db.session.add(son_and_garden2)
    db.session.add(son_and_garden3)
    db.session.add(son_and_garden4)
    db.session.add(artys1)
    db.session.add(artys2)
    db.session.add(MJM1)
    db.session.add(MJM2)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
