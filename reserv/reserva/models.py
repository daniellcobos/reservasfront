from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    name = models.CharField(blank=True, max_length=255)
    fondos = models.IntegerField()
    ciudad = models.CharField(blank=True, max_length=55)
    def __str__(self):
        return self.email

class RestBar(models.Model):
    nombre = models.CharField(blank=True, max_length=255)
    direccion = models.CharField(blank=True, max_length=255)
    tipo = models.CharField(blank=True, max_length=55)
    ciudad = models.CharField(blank=True, max_length=55)
   

class Hotel(models.Model):
    nombre = models.CharField(blank=True, max_length=255)
    direccion = models.CharField(blank=True, max_length=255)
    tipo = models.CharField(blank=True, max_length=55)
    ciudad = models.CharField(blank=True, max_length=55)
class Habitacion(models.Model):
    numero = models.IntegerField(primary_key=True, unique= True)
    capacidad = models.IntegerField()
    hotel = models.ForeignKey(Hotel, related_name='habitacion', on_delete=models.CASCADE)

class Mesa(models.Model):
    numero = models.IntegerField(primary_key=True,unique= True)
    capacidad = models.IntegerField()
    restbar = models.ForeignKey(RestBar, related_name='mesa', on_delete=models.CASCADE)    

class CapacidadH(models.Model):
    dia = models.DateField( auto_now=False, auto_now_add=False)
    capacidad = models.IntegerField()
    hotel = models.ForeignKey(Hotel, related_name='CapacidadH', on_delete=models.CASCADE)

class CapacidadBR(models.Model):
    dia = models.DateField( auto_now=False, auto_now_add=False)
    hora = models.TimeField( auto_now=False, auto_now_add=False)
    capacidad = models.IntegerField()
    restbar = models.ForeignKey(RestBar, related_name='CapacidadBR', on_delete=models.CASCADE)
class ReservaH(models.Model):
    reservante = models.ForeignKey(User,related_name='ReservH', on_delete=models.CASCADE)
    diaReserva = models.DateTimeField(  auto_now_add=True)
    diaReservado = models.DateField( auto_now=False, auto_now_add=False)
    cantidad = models.IntegerField()
    hotel = models.ForeignKey(Hotel, related_name='ReservaH', on_delete=models.CASCADE)

class ReservaBR(models.Model):
    reservante = models.ForeignKey(User,related_name='ReservBR', on_delete=models.CASCADE)
    diaReserva = models.DateTimeField( auto_now_add=True)
    diaReservado = models.DateField( auto_now=False, auto_now_add=False)
    horaReservada = models.TimeField( auto_now=False, auto_now_add=False)
    cantidad = models.IntegerField()
    hotel = models.ForeignKey(Hotel, related_name='ReservaBR', on_delete=models.CASCADE)

