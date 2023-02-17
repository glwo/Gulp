from app.models import db, Review, environment, SCHEMA, Review_Image


def seed_review_image():
    brandons_donuts1 = Review_Image(
        review_id=1,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/QF2ZN0l_Xe8CJbxmBkOO2w/o.jpg",
    )
    brandons_donuts2 = Review_Image(
        review_id=2,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Z3JL6P3FM3F9AEqq1eamTg/o.jpg",
    )
    brandons_donuts3 = Review_Image(
        review_id=3,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/ashwgVFdVMsuoZR0c53olQ/o.jpg",
    )
    brandons_donuts4 = Review_Image(
        review_id=4,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/UqIJYYA_3GZ_wFB2cwBjwA/o.jpg",
    )
    brandons_donuts5 = Review_Image(
        review_id=5,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Ls45IqsMpHb7p3TKMUFeSA/o.jpg",
    )
    da_andrea1 = Review_Image(
        review_id=6,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/4mXHQ2-NyusqWSJdjsDEQw/o.jpg",
    )
    da_andrea2 = Review_Image(
        review_id=7,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/LWYP6nsJG5L9a8cKcxdYQg/o.jpg",
    )
    da_andrea3 = Review_Image(
        review_id=8,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/ojPx0tK6nDivF14THV3xdw/o.jpg",
    )
    da_andrea4 = Review_Image(
        review_id=9,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/8rthnXdxpj_tlpGnGgrGxQ/o.jpg",
    )
    da_andrea5 = Review_Image(
        review_id=10,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/oL21oDg7VLPLiPuKbastCg/o.jpg",
    )
    midas1 = Review_Image(
        review_id=11,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/a2IGiPUytQUaz9SpLQItag/o.jpg",
    )
    midas2 = Review_Image(
        review_id=12,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/M7nw_cJng0ytcm-NSmNQBw/o.jpg",
    )
    midas3 = Review_Image(
        review_id=13,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/bq8LG7Auhtcv4TnxqmZ1-g/o.jpg",
    )
    midas4 = Review_Image(
        review_id=14,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/t5NL6bDpV8popRVpVI0fEQ/o.jpg",
    )
    midas5 = Review_Image(
        review_id=15,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/9PEMvcexXxlxCiWe5Auwjg/o.jpg",
    )
    joe_shanghai1 = Review_Image(
        review_id=16,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/uvRuBT-uL1JZn0K-wSj4IA/o.jpg",
    )
    joe_shanghai2 = Review_Image(
        review_id=17,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/gkp9bzPqrcaWIvgOJbatQw/o.jpg",
    )
    joe_shanghai3 = Review_Image(
        review_id=18,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/bON9a523npJiNl9DebJfOA/o.jpg",
    )
    joe_shanghai4 = Review_Image(
        review_id=19,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/j2-A_qqa_cjxgj316nuxQw/o.jpg",
    )
    joe_shanghai5 = Review_Image(
        review_id=20,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Xux7AQdYJ-17o8fU1WD0ag/o.jpg",
    )
    dunkins1 = Review_Image(
        review_id=21,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/H03LRyZXq-UI6VyxnR-w8w/o.jpg",
    )
    dunkins2 = Review_Image(
        review_id=22,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/8Qp9klYTXF6JwqWskeVX4g/o.jpg",
    )
    dunkins3 = Review_Image(
        review_id=23,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/a3Z5JN4K78dDetqiRmOhQA/o.jpg",
    )
    dunkins4 = Review_Image(
        review_id=24,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/DclN5vX5f0aY7KBXtl07BQ/o.jpg",
    )
    dunkins5 = Review_Image(
        review_id=25,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/kW9FBCqDlK_odmZdXt0HMg/o.jpg",
    )
    dicken_thomas_construction1 = Review_Image(
        review_id=26,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/_X1z6IF2qWgYAeE1ZWb2Gg/o.jpg",
    )
    dicken_thomas_construction2 = Review_Image(
        review_id=27,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/4lKZRHyuYNKDhkSu5yd5-Q/o.jpg",
    )
    ariari1 = Review_Image(
        review_id=28,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/BJaeJl485rfD1YKVj8N9pQ/o.jpg",
    )
    ariari2 = Review_Image(
        review_id=29,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/0UgtWDtVmHdlwMkR9F294A/o.jpg",
    )
    ariari3 = Review_Image(
        review_id=30,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/x5UIZSKaoM09z4r_ASxp-A/o.jpg",
    )
    honeybliss1 = Review_Image(
        review_id=31,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/-NXdDsh_rQJoHsYAnR05TA/o.jpg",
    )
    honeybliss2 = Review_Image(
        review_id=32,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/RTiLrVr5LjGGnPBGCQzxSQ/o.jpg",
    )
    nytdr1 = Review_Image(
        review_id=33,
        url="https://s3-media0.fl.yelpcdn.com/projectphoto/BBZvwWX1sqTWnO7ktCyT6Q/o.jpg",
    )
    zy1 = Review_Image(
        review_id=34,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Ymrg3jPTL1sWUy674Yq3Hg/o.jpg",
    )
    zy2 = Review_Image(
        review_id=35,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/c5OhQCnCXClBEngrz4jgMw/o.jpg",
    )
    moe_tire1 = Review_Image(
        review_id=36,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/YPcNaRJ8nRaFZynRCv1pJQ/o.jpg",
    )
    moe_tire2 = Review_Image(
        review_id=37,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/OCGKpVXAKlbFYbBVFg0Jrw/o.jpg",
    )
    enzi1 = Review_Image(
        review_id=38,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/ItnvIpBBa6zjmpvTTg9GVg/o.jpg",
    )
    enzi2 = Review_Image(
        review_id=39,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/fSJqYLqwWOzygNdyelVFBw/o.jpg",
    )
    anchor_oyster_bar1 = Review_Image(
        review_id=40,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/0i9M6KKC5Xr1ZP-l07q7qw/o.jpg",
    )
    anchor_oyster_bar2 = Review_Image(
        review_id=41,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/hJBLN6LTHBdPegLFBY29ZQ/o.jpg",
    )
    deli_board1 = Review_Image(
        review_id=42,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/rfEEn6EwyOzQidFJGWTqIA/o.jpg",
    )
    deli_board2 = Review_Image(
        review_id=43,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/KOVrVcqgZsz4sZ-j5ZOMkQ/o.jpg",
    )
    brendas_french1 = Review_Image(
        review_id=44,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/-bch1_Who1F28YFqlsiuWA/o.jpg",
    )
    brendas_french2 = Review_Image(
        review_id=45,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/LY6X6ZCbPXXXl3bNggF_NQ/o.jpg",
    )
    boulevard1 = Review_Image(
        review_id=46,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Sc4tg0BfdUFiNve3NkO6XA/o.jpg",
    )
    boulevard2 = Review_Image(
        review_id=47,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/t_3A6ndZHNTJjMDm6Kggbw/o.jpg",
    )
    boulevard3 = Review_Image(
        review_id=48,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/eyozm93TGr-hZiv1YvfCWQ/o.jpg",
    )
    toyota_parts1 = Review_Image(
        review_id=49,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/jnLXA8SLiNcSUm9rmXdehA/o.jpg",
    )
    toyota_parts2 = Review_Image(
        review_id=50,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/a_-EjdHNYAuvZhWYhDQ6tQ/o.jpg",
    )
    JT_auto1 = Review_Image(
        review_id=51,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Cx00Igd4F5pfUIuLXIzTyg/o.jpg",
    )
    JT_auto2 = Review_Image(
        review_id=52,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/3C_VJBAs-e9INcH8BU27bQ/o.jpg",
    )
    oreilly1 = Review_Image(
        review_id=53,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/prgZG5cTUbLs2lG0xs0m6Q/o.jpg",
    )
    oreilly2 = Review_Image(
        review_id=54,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/hk3bkoBEUesBDgl72pag-g/o.jpg",
    )
    abc_motor1 = Review_Image(
        review_id=55,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/MKNopQC0rsmjTxtlJoUYTA/o.jpg",
    )
    abc_motor2 = Review_Image(
        review_id=56,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/uW_ZIg3Wjs_64FEAkqw6ng/o.jpg",
    )
    rite_way1 = Review_Image(
        review_id=57,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/-5SGjskc2nS9wI4bbriEXQ/o.jpg",
    )
    rite_way2 = Review_Image(
        review_id=58,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/P1-rtvgTK7MpD2gM4Gwynw/o.jpg",
    )
    code_salon1 = Review_Image(
        review_id=59,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/mgCT5aY1Tx0vM3CfaI354w/o.jpg",
    )
    code_salon2 = Review_Image(
        review_id=60,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/UlC4-F8_i1IraVy60vszSg/o.jpg",
    )
    bottega1 = Review_Image(
        review_id=61,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Eb9ipq9pQCQ7FSDiih28qQ/o.jpg",
    )
    bottega2 = Review_Image(
        review_id=62,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/9aHevFoMDTlxB3O98ZLPlA/o.jpg",
    )
    bottega3 = Review_Image(
        review_id=63,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/SpxfSwtOCaUVl4BmNX3rdQ/o.jpg",
    )
    bottega4 = Review_Image(
        review_id=64,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/VwDBR5fDwp5vOKMha1mq9Q/o.jpg",
    )
    bottega5 = Review_Image(
        review_id=65,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/IawDcF1QmHSzUQDczHYVuw/o.jpg",
    )
    jims1 = Review_Image(
        review_id=66,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/ZV_hIL61ocyz63sL700A6A/o.jpg",
    )
    jims2 = Review_Image(
        review_id=67,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/ZH2RPn_VTmg4lHygeQ_RvQ/o.jpg",
    )
    home_instead1 = Review_Image(
        review_id=68,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/iwHnfZFEUho-npDeQtB1nQ/o.jpg",
    )
    castros1 = Review_Image(
        review_id=69,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/MA5v84yFmP7RwV_S4cGF_A/o.jpg",
    )
    castros2 = Review_Image(
        review_id=70,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/vFXvuNI6B--t0PaOzWDOVg/o.jpg",
    )
    grubstake1 = Review_Image(
        review_id=71,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/e_xkzjsT8m4-GHfo-U-mJA/o.jpg",
    )
    grubstake2 = Review_Image(
        review_id=72,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/eu0psAR7s2FTZawHCYUK_Q/o.jpg",
    )
    grubstake3 = Review_Image(
        review_id=73,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/L5Paiyg3AHu9P_V1gJ6jYw/o.jpg",
    )
    grubstake4 = Review_Image(
        review_id=74,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/gc3I8zOT6K3PeuDnyYnTzQ/o.jpg",
    )
    son_and_garden1 = Review_Image(
        review_id=75,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/J4QxzBsKjcHTUsmsRIiNvQ/o.jpg",
    )
    son_and_garden2 = Review_Image(
        review_id=76,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/8yn-_mXcsVhwJpxDyrmFdA/o.jpg",
    )
    son_and_garden3 = Review_Image(
        review_id=77,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/YftIE3I6vLxL49P5H4PnDA/o.jpg",
    )
    son_and_garden4 = Review_Image(
        review_id=78,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/pb7MgXowCyZcHJoeBb53YQ/o.jpg",
    )
    artys1 = Review_Image(
        review_id=79,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/OxfDHGYF3CjBd7_SMuXOhQ/o.jpg",
    )
    artys2 = Review_Image(
        review_id=80,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/0p8V5WDWzJR-6S-uyoXS3g/o.jpg",
    )
    MJM1 = Review_Image(
        review_id=81,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/awTuXgj_HLs6bn73XL8hOA/o.jpg",
    )
    MJM2 = Review_Image(
        review_id=82,
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Os2IfpXyChQRzj6_7IKwfA/o.jpg",
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

def undo_review_image():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
