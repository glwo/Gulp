from flask import Blueprint, redirect,session, request
from flask_login import login_required, current_user
from app.models import db, Business, BusinessImage
from app.forms import BusinessForm

business_routes = Blueprint('business', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@business_routes.route('/')
def get_all_businesses():
  """
  Query for all businesses an return them in a list of business dictionaries
  """
  businesses = Business.query.all()
  return {"businesses": [business.to_dict() for business in businesses]}


@business_routes.route('/', methods=["POST"])
@login_required
def post_business():
  """
  Create a new business and return that business in a dictionary
  """
  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  # Add and commit new business
  if form.validate_on_submit():
    newBusiness = Business(
      store_name = form.data['store_name'],
      owner_id = current_user.id,
      description = form.data['description'],
      city = form.data['city'],
      state = form.data['state'],
      address = form.data['address'],
      zipcode = form.data['zipcode'],
      business_type = form.data['business_type'],
      opening_time = form.data['opening_time'],
      closing_time = form.data['closing_time'],
      phone_num = form.data['phone_num'],
      avg_rating = form.data['avg_rating'],
      num_reviews = form.data['num_reviews']
    )
    db.session.add(newBusiness)
    db.session.commit()
    # Add and commit business image
    newBusinessImage = BusinessImage(
      image_url = form.data['image_url'],
      preview = form.data['preview'],
      business_id = newBusiness.id
    )
    db.session.add(newBusinessImage)
    db.session.commit()

    return newBusiness.to_dict(), 201

  if form.errors:
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@business_routes.route('/<int:id>')
def get_business(id):
  """
  Query for a business by id and returns that business in a dictionary
  """
  thisBusiness = Business.query.get(id)

  if not thisBusiness:
    return {'Error': 'Business not Found'}, 404

  return thisBusiness.to_dict(), 200


@business_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_business(id):
  """
  Update business and return that business in a dictionary
  """
  thisBusiness = Business.query.get(id)
  thisBusinessImage = BusinessImage.query.get(thisBusiness.business_images[0].id)
  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if not thisBusiness:
    return {"Error": "Business not Found"}, 404
  if current_user.id != thisBusiness.owner_id:
    return {"Error": "Forbidden"}, 403

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
    thisBusinessImage.image_url = form.data['image_url']

    # form.populate_obj(thisBusiness)

    db.session.commit()

    return thisBusiness.to_dict(), 200
  if form.errors:
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400


@business_routes.route('/<int:id>', methods=["DELETE"])
def delete_business(id):
  """
  Delete business
  """
  thisBusiness = Business.query.get(id)

  if not thisBusiness:
    return {"Error": "Business not Found"}, 404
  if current_user.id != thisBusiness.owner_id:
    return {"Error": "Forbidden"}, 403

  db.session.delete(thisBusiness)
  db.session.commit()

  return {'Message': 'The business has been deleted!'}, 200
