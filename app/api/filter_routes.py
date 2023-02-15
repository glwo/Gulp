from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Filter, db
from app.forms import FilterForm

filter_routes = Blueprint('filter', __name__)

@filter_routes.route('/:cat')
def getCategory(cat):
    businesses = Business.query.filter(businessType == cat).all()

    if not businesses:
        return {'errors': 'No Businesses in this category'}

    return {'Businesses': [business.to_dict() for business in businesses]}

@filter_routes.route('/exists')
@login_required
def filterExistsCheck():
    thisFilter = Filter.query.filter(Filter.user_id == current_user.id).first()

    if not thisFilter:
        return {'filter': False}
        # return {'filter': 'False'}
    return {'filter': thisFilter.to_dict()}


# @filter_routes.route('/getFilter')
# def getFilter(id):
#     ththisFilter = Filter.query.get(current_user.id)

@filter_routes.route('/createFilter', methods=['POST'])
@login_required
def createFilter():
    form = FilterForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        newFilter = Filter(
            reviews = form.data['reviews'],
            ratings = form.data['ratings'],
            category1 = form.data['category1'],
            category2 = form.data['category2'],
            category3 = form.data['category3'],
            user_id = current_user.id
        )
        db.session.add(newFilter)
        db.session.commit()

        return newFilter.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@filter_routes.route('/editFilter', methods=['PUT'])
@login_required
def updateFilter():
    form = FilterForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    oldFilter = Filter.query.filter(Filter.user_id == current_user.id).first()
    # print(oldFilter.to_dict(), 'this is oldFilterrrrrrrrrrrrrrrrr oldFilterrrrrrrrrrrrrrrrr oldFilterrrrrrrrrrrrrrrrr')
    if not oldFilter:
        return {'errors': 'Existing filter not found, unable to edit filter'}

    if form.validate_on_submit():
        oldFilter.reviews = form.data['reviews']
        oldFilter.ratings = form.data['ratings']
        oldFilter.category1 = form.data['category1']
        oldFilter.category2 = form.data['category2']
        oldFilter.category3 = form.data['category3']
        # user_id = current_user.id

        db.session.commit()
        print(oldFilter.to_dict(), 'compare to top compare to top compare to top compare to top ')

        return oldFilter.to_dict(), 200
    # print('checkmate')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# @filter_routes.route('/deleteFilter', methods=['DELETE'])
# @login_required
# def deleteFilter():
