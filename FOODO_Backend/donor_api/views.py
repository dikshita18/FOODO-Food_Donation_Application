from donor_api.serializers import UserSerializer, DonateFormSerializer, FeedbackFormSerializer, DonateProcessSerializer
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, DonateFormSerializer, FeedbackFormSerializer, DonateProcessSerializer
from .models import User, DonateForm, FeedbackForm, DonateProcess
from rest_framework.authentication import TokenAuthentication

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)

class DonateFormViewSet(viewsets.ModelViewSet):
    queryset = DonateForm.objects.all().order_by('id')
    serializer_class = DonateFormSerializer
    authentication_classes = (TokenAuthentication,)

class FeedbackFormViewSet(viewsets.ModelViewSet):
    queryset = FeedbackForm.objects.all().order_by('id')
    serializer_class = FeedbackFormSerializer
    authentication_classes = (TokenAuthentication,)

class DonateProcessViewSet(viewsets.ModelViewSet):
    queryset = DonateProcess.objects.all().order_by('id')
    serializer_class = DonateProcessSerializer
    authentication_classes = (TokenAuthentication,)



