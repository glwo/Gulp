from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

profile_routes = Blueprint('profile', __name__)

@profile_routes.route('/<int:id>')
@login_required
def get_user(id):
    user = User.query.get(id)
    if user:
        return user.to_dict(), 200
