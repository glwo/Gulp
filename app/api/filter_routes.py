from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

filter_routes = Blueprint('filter', __name__)

@filter_routes.route('/<str:cat')
def getCategory(cat):
    businesses = Business.query.filter(businessType == cat).all()

    if not businesses:
        return {'Message': 'No Businesses in this category'}

    return {'Businesses': [business.to_dict() for business in businesses]}
