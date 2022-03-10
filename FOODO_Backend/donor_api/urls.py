
from django.urls import path
from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet, DonateFormViewSet, FeedbackFormViewSet, DonateProcessViewSet
router=routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'donateform',DonateFormViewSet)
router.register(r'feedbackform',FeedbackFormViewSet)
router.register(r'donateprocess',DonateProcessViewSet)
urlpatterns=[
    path('',include(router.urls))
]






