# Generated by Django 5.0.1 on 2024-02-12 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_cputemperaturetransaction_cpu_fan_speed_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='cputemperaturetransaction',
            name='block_difficulty',
            field=models.FloatField(null=True),
        ),
    ]
