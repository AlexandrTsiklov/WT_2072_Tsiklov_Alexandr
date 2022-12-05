from django.urls import path
from app.views import home, login, register


urlpatterns = [
    path('home', home),
    path('login', login),
    path('registration', register),
]
