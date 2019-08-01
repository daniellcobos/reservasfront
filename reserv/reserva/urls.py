from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from . import views

app_name='reserva'
urlpatterns = [
    path('userdetail/<int:pk>', views.UserDetail.as_view()),
    path('reservh/<int:pk>', views.ReservHDetail.as_view()),
    path('reservh', views.ReservHList.as_view()),
    path('reservbr', views.ReservBRList.as_view()),
    path('hoteles', views.HotelList.as_view()),
    path('restbares', views.RestBarList.as_view()),
    path('hoteles/<int:pk>', views.HotelDetail.as_view()),
    path('restbares/<int:pk>', views.RestBarDetail.as_view()),
]