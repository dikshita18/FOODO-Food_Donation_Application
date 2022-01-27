from rest_framework import serializers
from .models import User, DonateForm, FeedbackForm, DonateProcess
from rest_framework.authtoken.views import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','full_name','email_id','ngo_name','address','contact','pwd')

class DonateFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonateForm
        fields = ('id','full_name','cont_no','food_type','cdt','pdt','ploc')
        
class FeedbackFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackForm
        fields = ('id','full_name','email_id','cont_no','feedback')

class DonateProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonateProcess
        fields = ('id','don_id')




'''
from rest_framework import serializers
from .models import User, DonateForm, FeedbackForm
from rest_framework.authtoken.views import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','full_name','email_id','ngo_name','address','contact','pwd')

class DonateFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonateForm
        fields = ('id','full_name','cont_no','food_type','cdt','pdt','ploc')
        
class FeedbackFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackForm
        fields = ('full_name','email_id','cont_no','feedback')
        
'''