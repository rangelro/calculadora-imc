
from django.urls import path
from .views import home, imc


urlpatterns = [
    path('',home,name='home'),
    path('imc/', imc, name='imc')
]
