from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    name = models.CharField(blank=True, max_length=255)
    fondos = models.IntegerField(blank=True, default=0)
    ciudad = models.CharField(blank=True, max_length=55)
    admin = models.BooleanField(default=False)
    def __str__(self):
        return self.email

class RestBar(models.Model):
    nombre = models.CharField(blank=True, max_length=255)
    direccion = models.CharField(blank=True, max_length=255)
    tipo = models.CharField(blank=True, max_length=55)
    ciudad = models.CharField(blank=True, max_length=55)
    dueño = models.ForeignKey(User, related_name=("Dueñob"), on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre

class Discobar(models.Model):
    nombre = models.CharField(blank=True, max_length=255)
    direccion = models.CharField(blank=True, max_length=255)
    tipo = models.CharField(blank=True, max_length=55)
    ciudad = models.CharField(blank=True, max_length=55)
    dueño = models.ForeignKey(User, related_name=("Dueñod"), on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre

class MesaD(models.Model):
    numero = models.IntegerField(primary_key=True, unique= True)
    capacidad = models.IntegerField()
    discobar = models.ForeignKey(Discobar, related_name='MesaD', on_delete=models.CASCADE)
    def __str__(self):
        return str(self.numero)
class Mesa(models.Model):
    numero = models.IntegerField(primary_key=True,unique= True)
    capacidad = models.IntegerField()
    restbar = models.ForeignKey(RestBar, related_name='mesa', on_delete=models.CASCADE)    
    def __str__(self):
        return str(self.numero)
class CapacidadD(models.Model):
    dia = models.DateField( auto_now=False, auto_now_add=False)
    libre = models.BooleanField(default=True)
    mesad = models.ForeignKey(MesaD, related_name='CapacidadH', on_delete=models.CASCADE)

class CapacidadBR(models.Model):
    dia = models.DateField( auto_now=False, auto_now_add=False)
    hora = models.TimeField( auto_now=False, auto_now_add=False)
    libre = models.BooleanField(default=True)
    mesa = models.ForeignKey(Mesa, related_name='CapacidadBR', on_delete=models.CASCADE)
class ReservaD(models.Model):
    reservante = models.ForeignKey(User,related_name='ReservH', on_delete=models.CASCADE)
    diaReserva = models.DateTimeField(  auto_now_add=True)
    diaReservado = models.DateField( auto_now=False, auto_now_add=False)
    cantidad = models.IntegerField(default=0)
    mesad = models.ForeignKey(MesaD, related_name='ReservaDis', on_delete=models.CASCADE)
class ReservaBR(models.Model):
    reservante = models.ForeignKey(User,related_name='ReservBR', on_delete=models.CASCADE)
    diaReserva = models.DateTimeField( auto_now_add=True)
    diaReservado = models.DateField( auto_now=False, auto_now_add=False)
    horaReservada = models.TimeField( auto_now=False, auto_now_add=False)
    cantidad = models.IntegerField()
    mesa = models.ForeignKey(Mesa, related_name='ReservaMes', on_delete=models.CASCADE)
