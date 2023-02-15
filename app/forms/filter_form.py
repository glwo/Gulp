from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User

typeList = ['noInput', 'restaurant', 'auto', 'home', 'salon']

otherList = ['noInput', 'fromHigh', 'fromLow']

def matchType(form, field):
    businessType = field.data
    if businessType not in typeList:
        raise ValidationError('Incorrect Category Submission')

def matchOtherList(form, field):
    select = field.data
    if select not in otherList:
        raise ValidationError('Incorrect reviews/ratings selection')

class FilterForm(FlaskForm):
    reviews = StringField("reviews", validators=[matchOtherList])
    ratings = StringField("ratings", validators=[matchOtherList])
    category1 = StringField("category1", validators=[matchType])
    category2 = StringField("category2", validators=[matchType])
    category3 = StringField("category3", validators=[matchType])
