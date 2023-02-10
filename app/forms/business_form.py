from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError, URL, Length
from app.models import Business

class BusinessForm(FlaskForm):
  store_name = StringField('store_name', validators=[DataRequired()])
  description = StringField('description', validators=[DataRequired()])
  city = StringField('city', validators=[DataRequired()])
  state = StringField('state', validators=[DataRequired()])
  address = StringField('address', validators=[DataRequired()])
  zipcode = IntegerField('zipcode', validators=[DataRequired(), Length(min=5, max=5, message="zipcode must be 5 character")]) # 
  business_type = StringField('business_type', validators=[DataRequired()])
  opening_time = StringField('opening_time', validators=[DataRequired()])
  closing_time = StringField('closing_time', validators=[DataRequired()])
  phone_num = IntegerField('phone_num', validators=[DataRequired()])
  image_url = StringField('image_url', validators=[DataRequired(), URL])
  preview = BooleanField('preview')
