# Generated by Django 2.2.3 on 2019-08-01 22:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reserva', '0006_auto_20190801_1718'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservabr',
            name='mesa',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='ReservaMes', to='reserva.Mesa'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='reservah',
            name='habitacion',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='ReservaHab', to='reserva.Habitacion'),
            preserve_default=False,
        ),
    ]