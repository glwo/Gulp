from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from ..forms .profile_form import Profile

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_profile(id):
    to_update = User.query.get(id)
    if to_update:
        form = Profile()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = form.data
            to_update.first_name = data["first_name"]
            to_update.last_name = data["last_name"]
            to_update.username = data["username"]
            to_update.email = data["email"]
            to_update.img_url = data["img_url"]
            to_update.bio = data["bio"]
            # updated_user = User(first_name=data["first_name"],
            #                   last_name=data["last_name"],
            #                   username=data["username"],
            #                   email=data["email"],
            #                   img_url=data["img_url"],
            #                   bio=data["bio"],
            #                   password=to_update.hashed_password)
            # db.session.add(updated_user)
            db.session.commit()
            # return updated_user.to_dict(), 201
            return to_update.to_dict(), 201

    else:
        return {
            "errors": "Profile not found",
            "code": 404
        }, 404
