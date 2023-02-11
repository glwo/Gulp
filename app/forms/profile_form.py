from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError

class Profile(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    email = StringField("Email", validators=[DataRequired()])
    img_url = StringField("Profile Picture", validators=[DataRequired()])
    bio = StringField("Biography", validators=[DataRequired()])
