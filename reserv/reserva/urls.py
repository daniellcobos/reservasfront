from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from . import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
app_name='reserva'
urlpatterns = [
    path('userlist', views.UserList.as_view()),
    path('userdetail/<int:pk>', views.UserDetail.as_view()),
    path('reservd/<int:pk>', views.ReservHDetail.as_view()),
    path('reservd', views.ReservHList.as_view()),
    path('reservbr', views.ReservBRList.as_view()),
    path('discbares', views.HotelList.as_view()),
    path('restbares', views.RestBarList.as_view()),
    path('discbares/<int:pk>', views.HotelDetail.as_view()),
    path('restbares/<int:pk>', views.RestBarDetail.as_view()),
    path('brr/<int:pk>', views.borrarreservabr),
    path('brb/<int:pk>', views.borrarreservad),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    
]