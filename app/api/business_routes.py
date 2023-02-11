from flask import Blueprint, redirect, request
from app.models import db, Business, BusinessImage
from app.forms import BusinessForm

business_routes = Blueprint('business', __name__)

@business_routes.route('/')
def get_all_businesses():
  """
  Query for all businesses an return them in a list of business dictionaries
  """
  businesses = Business.query.all()
  # data = [business.to_dict() for business in businesses]
  for business in businesses:
    # imagesData =  BusinessImage.query.filter_by(business_id = business.id).all()
    # images = [image.to_dict() for image in imagesData]
    business.business_images = []
  return {'businesses': [business.to_dict() for business in businesses]}



@business_routes.route('/', methods=["POST"])
def post_business():
  """
  Create a new business and return that business in a dictionary
  """
  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    newBusiness = Business(
      store_name = form.data['store_name'],
      description = form.data['description'],
      city = form.data['city'],
      state = form.data['state'],
      address = form.data['address'],
      zipcode = form.data['zipcode'],
      business_type = form.data['business_type'],
      opening_time = form.data['opening_time'],
      closing_time = form.data['closing_time'],
      phone_num = form.data['phone_num']
    )
    newBusinessImage = BusinessImage(
      image_url = form.data['image_url'],
      preview = form.data['preview'],
      business_id = newBusiness.to_dict().id
    )
    db.session.add(newBusiness)
    db.session.add(newBusinessImage)
    db.session.commit()

    return redirect(f'/business/{newBusiness.to_dict().id}/')

  return {'Error': 'Create a new business failed'}


@business_routes.route('/<int:id>')
def get_business(id):
  """
  Query for a business by id and returns that business in a dictionary
  """
  thisBusiness = Business.query.get(id)
  images = BusinessImage.query.filter(BusinessImage.business_id == id).all()

  if not thisBusiness:
    return {'Error': 'Business not Found'}
  thisBusiness.business_images = []
  return thisBusiness.to_dict(), 200


@business_routes.route('<int:id>', methods=["PUT"])
def update_business(id):
  """
  Update business and return that business in a dictionary
  """
  thisBusiness = Business.query.get(id)
  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if not thisBusiness:
    return {"Error": "Business not Found"}

  if form.validate_on_submit():
    thisBusiness.store_name = form.data['store_name']
    thisBusiness.description = form.data['description']
    thisBusiness.city = form.data['city']
    thisBusiness.state = form.data['state']
    thisBusiness.address = form.data['address']
    thisBusiness.zipcode = form.data['zipcode']
    thisBusiness.business_type = form.data['business_type']
    thisBusiness.opening_time = form.data['opening_time']
    thisBusiness.closing_time = form.data['closing_time']
    thisBusiness.phone_num = form.data['phone_num']

    db.session.commit()

    return thisBusiness.to_dict(), 200

  return {'Error': 'Update business failed'}


@business_routes.route('/<int:id>', methods=["DELETE"])
def delete_business(id):
  """
  Delete business
  """
  thisBusiness = Business.query.get(id)

  if not thisBusiness:
    return {"Error": "Business not Found"}

  db.session.delete(thisBusiness)
  db.session.commit()

  return {'Message': 'The business has been deleted!'}
