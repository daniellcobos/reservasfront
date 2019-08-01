from django.contrib.auth.models import  Group
from .models import *
from rest_framework import serializers

class HotelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ('nombre','tipo','ciudad','direccion')
class RestBarListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestBar
        fields = '__all__'

class MesaSerializer(serializers.ModelSerializer):
    restbar = serializers.SlugRelatedField(
    slug_field='nombre',
    read_only=True,
    )
    class Meta:
        model = Mesa
        fields = '__all__'

class HabitacionSerializer(serializers.ModelSerializer):
    hotel = serializers.SlugRelatedField(
    slug_field='nombre',
    read_only=True,
    )
    class Meta:
        model = Habitacion
        fields = '__all__'
class HotelSerializer(serializers.ModelSerializer):
    habitacion = HabitacionSerializer(many=True,read_only=True)
    class Meta:
        model = Hotel
        fields = ('nombre','tipo','ciudad','direccion','habitacion')
class RBSerializer(serializers.ModelSerializer):
    mesa = MesaSerializer(many=True,read_only=True)
    class Meta:
        model = Hotel
        fields = ('nombre','tipo','ciudad','direccion', 'mesa')
class ReservHSerializer(serializers.ModelSerializer):
    habitacion =HabitacionSerializer(read_only=True)
    class Meta:
        model = ReservaH
        fields = ('diaReserva','diaReservado','cantidad','habitacion')
class ReservBRSerializer(serializers.ModelSerializer):
    mesa = MesaSerializer(many=True,read_only=True)
    class Meta:
        model = ReservaBR
        fields = ('diaReserva','diaReservado','horaReservada','cantidad','mesa')
class InduserSerializer(serializers.ModelSerializer):
    ReservH = ReservHSerializer(many=True,read_only=True)
    ReservBR = ReservBRSerializer(read_only=True,many=True,)
    class Meta:
        model = User
        fields = ('id','email','name','fondos','ciudad','ReservH','ReservBR',)
class ReservHaSerializer(serializers.ModelSerializer):
    habitacion =serializers.PrimaryKeyRelatedField(queryset= Habitacion.objects.all())
    class Meta:
        model = ReservaH
        fields = ('diaReserva','diaReservado','cantidad','habitacion')
class ReservBReSerializer(serializers.ModelSerializer):
    mesa = serializers.PrimaryKeyRelatedField(queryset=Mesa.objects.all())
    class Meta:
        model = ReservaBR
        fields = ('diaReserva','diaReservado','horaReservada','cantidad','mesa')