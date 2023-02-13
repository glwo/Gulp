from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from ..forms .profile_form import Profile

profile_routes = Blueprint('profile', __name__)

# GET PROFILE
@profile_routes.route('/')
@login_required
def get_user(id):
    user = User.query.get(id)
    if user:
        return user.to_dict(), 200


# UPDATE PROFILE
@profile_routes.route('/', methods=['PUT'])
@login_required
def update_profile(id):
    to_update = User.query.get(id)
    if to_update:
        form = Profile()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = form.data
            updated_user = User(first_name=data["first_name"],
                              last_name=data["last_name"],
                              username=data["username"],
                              email=data["email"],
                              img_url=data["img_url"],
                              bio=data["bio"])
            db.session.add(updated_user)
            db.session.commit()
            return updated_user.to_dict(), 201

    else:
        return {
            "errors": "Profile not found",
            "code": 404
        }, 404
