
from django.urls import path
from app1 import views


urlpatterns = [
    path('', views.index, name='index'),
    path('pepe', views.index2, name='index'),
] 