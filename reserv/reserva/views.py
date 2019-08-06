from django.shortcuts import render
from reserva.models import *
from reserva.serializers import *
from rest_framework import generics

from datetime import date
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
# Create your views here.
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = InduserSerializer
    
class ReservHDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReservaD.objects.all()
    serializer_class = ReservHSerializer
class ReservHList(generics.ListCreateAPIView):
    queryset = ReservaD.objects.all()
    serializer_class = ReservHaSerializer
class ReservBRList(generics.ListCreateAPIView):
    queryset = ReservaBR.objects.all()
    serializer_class = ReservBReSerializer
class HotelList(generics.ListCreateAPIView):
    queryset = Discobar.objects.all()
    serializer_class = HotelListSerializer
 
class RestBarList(generics.ListCreateAPIView):
    queryset = RestBar.objects.all()
    serializer_class = RestBarListSerializer

class HotelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Discobar.objects.all()
    serializer_class = HotelSerializer
class RestBarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = RestBar.objects.all()
    serializer_class = RBSerializer