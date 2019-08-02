from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    name = models.CharField(blank=True, max_length=255)
    fondos = models.IntegerField(blank=True, default=0)
    ciudad = models.CharField(blank=True, max_length=55)
    def __str__(self):
        return self.email

class RestBar(models.Model):
    nombre = models.CharField(blank=True, max_length=255)
    direccion = models.CharField(blank=True, max_length=255)
    tipo = models.CharField(blank=True, max_length=55)
    ciudad = models.CharField(blank=True, max_length=55)
    def __str__(self):
        return self.nombre

class Hotel(models.Model):
    nombre = models.CharField(blank=True, max_length=255)
    direccion = models.CharField(blank=True, max_length=255)
    tipo = models.CharField(blank=True, max_length=55)
    ciudad = models.CharField(blank=True, max_length=55)
    def __str__(self):
        return self.nombre

class Habitacion(models.Model):
    numero = models.IntegerField(primary_key=True, unique= True)
    capacidad = models.IntegerField()
    hotel = models.ForeignKey(Hotel, related_name='habitacion', on_delete=models.CASCADE)
    def __str__(self):
        return str(self.numero)
class Mesa(models.Model):
    numero = models.IntegerField(primary_key=True,unique= True)
    capacidad = models.IntegerField()
    restbar = models.ForeignKey(RestBar, related_name='mesa', on_delete=models.CASCADE)    
    def __str__(self):
        return str(self.numero)
class CapacidadH(models.Model):
    dia = models.DateField( auto_now=False, auto_now_add=False)
    libre = models.BooleanField(default=False)
    habitacion = models.ForeignKey(Habitacion, related_name='CapacidadH', on_delete=models.CASCADE)

class CapacidadBR(models.Model):
    dia = models.DateField( auto_now=False, auto_now_add=False)
    hora = models.TimeField( auto_now=False, auto_now_add=False)
    libre = models.BooleanField(default=False)
    mesa = models.ForeignKey(Mesa, related_name='CapacidadBR', on_delete=models.CASCADE)
class ReservaH(models.Model):
    reservante = models.ForeignKey(User,related_name='ReservH', on_delete=models.CASCADE)
    diaReserva = models.DateTimeField(  auto_now_add=True)
    diaReservado = models.DateField( auto_now=False, auto_now_add=False)
    cantidad = models.IntegerField(default=0)
    habitacion = models.ForeignKey(Habitacion, related_name='ReservaHab', on_delete=models.CASCADE)
class ReservaBR(models.Model):
    reservante = models.ForeignKey(User,related_name='ReservBR', on_delete=models.CASCADE)
    diaReserva = models.DateTimeField( auto_now_add=True)
    diaReservado = models.DateField( auto_now=False, auto_now_add=False)
    horaReservada = models.TimeField( auto_now=False, auto_now_add=False)
    cantidad = models.IntegerField()
    mesa = models.ForeignKey(Mesa, related_name='ReservaMes', on_delete=models.CASCADE)
