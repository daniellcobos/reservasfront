from django.contrib.auth.models import  Group
from .models import *
from rest_framework import serializers

class HotelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discobar
        fields = ('nombre','tipo','ciudad','direccion')
class RestBarListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestBar
        fields = ('nombre','tipo','ciudad','direccion')

class MesaSerializer(serializers.ModelSerializer):
    restbar = serializers.SlugRelatedField(
    slug_field='nombre',
    read_only=True,
    )
    class Meta:
        model = Mesa
        fields = '__all__'

class HabitacionSerializer(serializers.ModelSerializer):
    discobar = serializers.SlugRelatedField(
    slug_field='nombre',
    read_only=True,
    )
    class Meta:
        model = MesaD
        fields = '__all__'
class HotelSerializer(serializers.ModelSerializer):
    mesad = HabitacionSerializer(many=True,read_only=True)
    class Meta:
        model = Discobar
        fields = ('nombre','tipo','ciudad','direccion','mesad')
class RBSerializer(serializers.ModelSerializer):
    mesa = MesaSerializer(many=True,read_only=True)
    class Meta:
        model = RestBar
        fields = ('nombre','tipo','ciudad','direccion', 'mesa')
class ReservHSerializer(serializers.ModelSerializer):
    mesad =HabitacionSerializer(read_only=True)
    class Meta:
        model = ReservaD
        fields = ('diaReserva','diaReservado','cantidad','mesad')
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
    mesad =serializers.SlugRelatedField(queryset= MesaD.objects.all(), slug_field='numero')
    
    def validate(self, data):
        habt= str(data['mesad'])
        date = data['diaReservado']
        habc= MesaD.objects.get(numero=habt)
        hab= MesaD.objects.filter(numero=habt).values('capacidad')
        habcap= hab[0]['capacidad']
        
        if  data['cantidad'] > habcap:
            raise serializers.ValidationError("La cantidad de personas excede la capacidad de la mesad")
        elif CapacidadD.objects.filter(mesad=habc).filter(dia=date).exists():
         cphab = CapacidadD.objects.filter(mesad=habc).get(dia=date)
         if not cphab.libre:
            raise serializers.ValidationError("Esta ocupada para este dia")
         else:
             cphab.libre=True
             cphab.save()
        else: 
           newcup= CapacidadD(dia=date,libre=False,mesad=habc)
           newcup.save()
        return data
    class Meta:
        model = ReservaD
        fields = ('reservante','diaReserva','diaReservado','cantidad','mesad')

class ReservBReSerializer(serializers.ModelSerializer):
    mesa = serializers.PrimaryKeyRelatedField(queryset=Mesa.objects.all())
    def validate(self, data):
        mesc= str(data['mesa'])
        date = data['diaReservado']
        time = data['horaReservada']
        messc= Mesa.objects.get(numero=mesc)
        messsa= Mesa.objects.filter(numero=mesc).values('capacidad')
        mesacap= messsa[0]['capacidad']
        if  data['cantidad'] > mesacap:
            raise serializers.ValidationError("La cantidad de personas excede la capacidad de la mesa")
        elif CapacidadBR.objects.filter(mesa=messc).filter(dia=date).filter(hora=time).exists():
         cpmes = CapacidadBR.objects.filter(mesa=messc).filter(dia=date).get(hora=time)
         if not cpmes.libre:
            raise serializers.ValidationError("Esta ocupada para este dia y hora")
         else:
             cpmes.libre = True
             cpmes.save()
        else:
           newcup= CapacidadBR(dia=date,hora=time,libre=False,mesa=messc)
           newcup.save()
        return data
    class Meta:
        model = ReservaBR
        fields = ('reservante','diaReserva','diaReservado','horaReservada','cantidad','mesa')
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','name','fondos','ciudad','password')
        extra_kwargs = {
          'password': {'write_only': True}
        }
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance