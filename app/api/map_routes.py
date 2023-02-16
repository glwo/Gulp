from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
import os
from ..forms .profile_form import Profile

map_routes = Blueprint('map', __name__)

@map_routes.route('/key')
def get_key():
    print('backend map test')
    key = os.environ.get('MAPS_API_KEY')
    return {'googleMapsAPIKey': key}
