from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
    url(r'api/users^$', views.UserCreate.as_view(), name='account-create'),
]