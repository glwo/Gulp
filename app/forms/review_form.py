from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, NumberRange, URL

class ReviewForm(FlaskForm):
    business_id = IntegerField('business_id', validators=[DataRequired()])
    review = StringField('review', validators=[DataRequired()])
    stars = IntegerField('stars', validators=[DataRequired()])
    url = StringField('url', validators=[DataRequired(), URL()])
