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
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/gkp9bzPqrcaWIvgOJbatQw/o.jpg",
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
    business_id=8
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
  anchor_image1 = BusinessImage(
    image_url="http://www.sfheritage.org/wp-content/uploads/2020/06/June_23_2020_Kerri-scaled.jpg",
    preview=True,
    business_id=13
  )
  anchor_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/MiVozTDhE1rpUZ8PghXmDg/348s.jpg",
    preview=True,
    business_id=13
  )
  deliboard_image1 = BusinessImage(
    image_url="https://static.wixstatic.com/media/15e88d_7996e9b9ace643aa87f5f18265ced734~mv2.jpg/v1/fill/w_2500,h_1779,al_c/15e88d_7996e9b9ace643aa87f5f18265ced734~mv2.jpg",
    preview=True,
    business_id=14
  )
  deliboard_image2 = BusinessImage(
    image_url="https://img.hoodline.com/uploads/story/image/11237/DB_3_cmp.jpg",
    preview=True,
    business_id=14
  )
  brendas_image1 = BusinessImage(
    image_url="https://infatuation.imgix.net/media/reviews/brendas-french-soul-food/banners/Brendas_0.jpg",
    preview=True,
    business_id=15
  )
  brendas_image2 = BusinessImage(
    image_url="https://frenchsoulfood.com/wp-content/uploads/2020/07/BFSF_Site-Headers_2020_bennies.jpg",
    preview=True,
    business_id=15
  )
  boulevard_image1 = BusinessImage(
    image_url="https://resizer.otstatic.com/v2/photos/xlarge/4/31869098.jpg",
    preview=True,
    business_id=16
  )
  boulevard_image2 = BusinessImage(
    image_url="https://cdn.vox-cdn.com/thumbor/-CrjcuYOITDXAmnvQb3P8-32DiE=/0x0:2000x1333/1200x0/filters:focal(0x0:2000x1333):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22888588/Boulevard_PChang_2796.jpg",
    preview=True,
    business_id=16
  )
  toyota_image1 = BusinessImage(
    image_url="https://fastly.4sqi.net/img/general/200x200/1106017_xj1so0iaScaGiTp0o3RNUqaZUMjvrQCtmasH-eMLFVg.jpg",
    preview=True,
    business_id=17
  )
  toyota_image2 = BusinessImage(
    image_url="https://static.fzinternal.com/dealers/5ee8e2d22ccde.jpg",
    preview=True,
    business_id=17
  )
  JT_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/DvtmGFrvp82xviVL3D3sdQ/348s.jpg",
    preview=True,
    business_id=18
  )
  JT_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/byDgqoLfWDhDVaS8bMCG3g/348s.jpg",
    preview=True,
    business_id=18
  )
  oreilly_image1 = BusinessImage(
    image_url="https://securecdn.pymnts.com/wp-content/uploads/2022/07/OReilly-Automotive-1000x600.jpg",
    preview=True,
    business_id=19
  )
  oreilly_image2 = BusinessImage(
    image_url="https://fastly.4sqi.net/img/general/600x600/487386563_umq5F1WkSfnveF0f9ak_kA0HjdvXjxRU97Vdgnb_3u0.jpg",
    preview=True,
    business_id=19
  )
  abcmotor_image1 = BusinessImage(
    image_url="https://www.abcmotorcredit.com/images/template/logo.png",
    preview=True,
    business_id=20
  )
  abcmotor_image2 = BusinessImage(
    image_url="https://abcmotorcredit.com/images/content/we-buy-cars-copy-jpshwi.jpg",
    preview=True,
    business_id=20
  )
  riteway_image1 = BusinessImage(
    image_url="https://www.ritewayautos.com/graphics/logo.png",
    preview=True,
    business_id=21
  )
  riteway_image2 = BusinessImage(
    image_url="https://www.rite-wayelectric.com/wp-content/uploads/2019/02/Rite-Way-Electric-Building-300x283.jpg",
    preview=True,
    business_id=21
  )
  code_image1 = BusinessImage(
    image_url="https://d2zdpiztbgorvt.cloudfront.net/us/images/180036/cover_155601529000.jpeg",
    preview=True,
    business_id=22
  )
  code_image2 = BusinessImage(
    image_url="http://1.bp.blogspot.com/-FoOaTPnyG2A/T2o_908hfJI/AAAAAAAAB5Q/9tGgb2CoHmY/s1600/Screen+shot+2012-03-21+at+3.53.11+PM.png",
    preview=True,
    business_id=22
  )
  bottega_image1 = BusinessImage(
    image_url="https://d2zdpiztbgorvt.cloudfront.net/us/images/180036/cover_155601529000.jpeg",
    preview=True,
    business_id=23
  )
  bottega_image2 = BusinessImage(
    image_url="http://1.bp.blogspot.com/-FoOaTPnyG2A/T2o_908hfJI/AAAAAAAAB5Q/9tGgb2CoHmY/s1600/Screen+shot+2012-03-21+at+3.53.11+PM.png",
    preview=True,
    business_id=23
  )
  jims_image1 = BusinessImage(
    image_url="https://media-cdn.tripadvisor.com/media/photo-s/12/32/90/fb/photo3jpg.jpg",
    preview=True,
    business_id=24
  )
  jims_image2 = BusinessImage(
    image_url="https://media-cdn.tripadvisor.com/media/photo-s/0e/b0/ff/e5/i-love-a-restaurant-that.jpg",
    preview=True,
    business_id=24
  )
  homeinstead_image1 = BusinessImage(
    image_url="https://d13iq96prksfh0.cloudfront.net/cdn/photos/125277/730x450%23.png",
    preview=True,
    business_id=25
  )
  homeinstead_image2 = BusinessImage(
    image_url="https://d13iq96prksfh0.cloudfront.net/cdn/photos/125303/730x450%23.jpeg",
    preview=True,
    business_id=25
  )
  castros_image1 = BusinessImage(
    image_url="https://castroscleaningserviceca.com/src/images/elements/slider/mobile/1.jpg",
    preview=True,
    business_id=26
  )
  castros_image2 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/bflPFkKWY31HN2A61o_JOA/348s.jpg",
    preview=True,
    business_id=26
  )
  grubstake_image1 = BusinessImage(
    image_url="https://cdn.vox-cdn.com/thumbor/_SX5r3PKm-umiFQMNjUi0Lx5K7g=/0x0:700x525/1200x800/filters:focal(294x207:406x319)/cdn.vox-cdn.com/uploads/chorus_image/image/65970522/grubstake.0.0.jpg",
    preview=True,
    business_id=27
  )
  grubstake_image2 = BusinessImage(
    image_url="https://miro.medium.com/max/1000/1*v7R7Za2rWu2h0z64N3XHSA.jpeg",
    preview=True,
    business_id=27
  )
  sonandgarden_image1 = BusinessImage(
    image_url="https://images.otstatic.com/prod1/47151359/2/large.png",
    preview=True,
    business_id=28
  )
  sonandgarden_image2 = BusinessImage(
    image_url="https://cdn.vox-cdn.com/thumbor/yzS7QUonYkp8EUz0ocR-z1L9qDs=/0x0:1046x1046/1200x0/filters:focal(0x0:1046x1046):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21869393/89029264_127355888831075_6234785980998483968_o.jpg",
    preview=True,
    business_id=28
  )
  artys_image1 = BusinessImage(
    image_url="https://s3-media0.fl.yelpcdn.com/bphoto/bGAaUfAYoD8dXd9OMQZ4zA/348s.jpg",
    preview=True,
    business_id=29
  )
  artys_image2 = BusinessImage(
    image_url="https://fastly.4sqi.net/img/general/200x200/uA3bwsSQf-QznOpg9Mpf-JMunscPg8sdUi7kCe1632I.jpg",
    preview=True,
    business_id=29
  )
  mjm_image1 = BusinessImage(
    image_url="https://www.mjmjanitor.com/wp-content/uploads/2018/05/MJM_logo.png",
    preview=True,
    business_id=30
  )
  mjm_image2 = BusinessImage(
    image_url="https://www.mjmjanitor.com/wp-content/uploads/2018/05/mjmmaintenance_518586238.jpg",
    preview=True,
    business_id=30
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
  db.session.add(anchor_image1)
  db.session.add(anchor_image2)
  db.session.add(deliboard_image1)
  db.session.add(deliboard_image2)
  db.session.add(brendas_image1)
  db.session.add(brendas_image2)
  db.session.add(boulevard_image1)
  db.session.add(boulevard_image2)
  db.session.add(toyota_image1)
  db.session.add(toyota_image2)
  db.session.add(JT_image1)
  db.session.add(JT_image2)
  db.session.add(oreilly_image1)
  db.session.add(oreilly_image2)
  db.session.add(abcmotor_image1)
  db.session.add(abcmotor_image2)
  db.session.add(riteway_image1)
  db.session.add(riteway_image2)
  db.session.add(code_image1)
  db.session.add(code_image2)
  db.session.add(bottega_image1)
  db.session.add(bottega_image2)
  db.session.add(jims_image1)
  db.session.add(jims_image2)
  db.session.add(homeinstead_image1)
  db.session.add(homeinstead_image2)
  db.session.add(castros_image1)
  db.session.add(castros_image2)
  db.session.add(grubstake_image1)
  db.session.add(grubstake_image2)
  db.session.add(sonandgarden_image1)
  db.session.add(sonandgarden_image2)
  db.session.add(artys_image1)
  db.session.add(artys_image2)
  db.session.add(mjm_image1)
  db.session.add(mjm_image2)

  db.session.commit()

def undo_business_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM business_images")

    db.session.commit()
