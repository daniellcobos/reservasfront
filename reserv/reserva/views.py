from django.shortcuts import render
from reserva.models import *
from reserva.serializers import *
from rest_framework import generics
from rest_framework import status
from datetime import date
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
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

@api_view(['GET','DELETE'])
def borrarreservabr(request,pk):
    try:
        reserva = ReservaBR.objects.get(id=pk)
        cupo= CapacidadBR.objects.filter(mesa=reserva.mesa).filter(dia=reserva.diaReservado).get(hora=reserva.horaReservada)
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
         reserva.delete()
         cupo.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
        serializer = ReservBRSerializer(reserva)
        return Response(serializer.data)

       
@api_view(['GET','DELETE'])
def borrarreservad(request,pk):
    try:
        reserva = ReservaD.objects.get(id=pk)
        cupo= CapacidadD.objects.filter(mesad=reserva.mesad).get(dia=reserva.diaReservado)
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
         reserva.delete()
         cupo.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
            serializer = ReservHSerializer(reserva)
            return Response(serializer.data)

