'''
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import UserViewSet, DonateFormViewSet

urlpatterns = [
    path('user/', UserViewSet),
    path('donateform/', DonateFormViewSet),
]

urlpatterns = format_suffix_patterns(urlpatterns)
'''

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







'''
from django.urls import path
from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet, DonateFormViewSet, FeedbackFormViewSet
router=routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'donateform',DonateFormViewSet)
router.register(r'feedbackform',FeedbackFormViewSet)
urlpatterns=[
    path('',include(router.urls))
]

'''