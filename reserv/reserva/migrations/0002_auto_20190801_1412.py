# Generated by Django 2.2.3 on 2019-08-01 19:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reserva', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=255)),
                ('direccion', models.CharField(blank=True, max_length=255)),
                ('tipo', models.CharField(blank=True, max_length=55)),
                ('ciudad', models.CharField(blank=True, max_length=55)),
            ],
        ),
        migrations.CreateModel(
            name='RestBar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=255)),
                ('direccion', models.CharField(blank=True, max_length=255)),
                ('tipo', models.CharField(blank=True, max_length=55)),
                ('ciudad', models.CharField(blank=True, max_length=55)),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='ciudad',
            field=models.CharField(blank=True, max_length=55),
        ),
        migrations.CreateModel(
            name='ReservaH',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diaReserva', models.DateTimeField(auto_now_add=True)),
                ('diaReservado', models.DateField()),
                ('cantidad', models.IntegerField()),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ReservaH', to='reserva.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='ReservaBR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diaReserva', models.DateTimeField(auto_now_add=True)),
                ('diaReservado', models.DateField()),
                ('horaReservada', models.TimeField()),
                ('cantidad', models.IntegerField()),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ReservaBR', to='reserva.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='Mesa',
            fields=[
                ('numero', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('capacidad', models.IntegerField()),
                ('restbar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mesa', to='reserva.RestBar')),
            ],
        ),
        migrations.CreateModel(
            name='Habitacion',
            fields=[
                ('numero', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('capacidad', models.IntegerField()),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='habitacion', to='reserva.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='CapacidadH',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dia', models.DateField()),
                ('capacidad', models.IntegerField()),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='CapacidadH', to='reserva.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='CapacidadBR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dia', models.DateField()),
                ('hora', models.TimeField()),
                ('capacidad', models.IntegerField()),
                ('restbar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='CapacidadBR', to='reserva.RestBar')),
            ],
        ),
    ]