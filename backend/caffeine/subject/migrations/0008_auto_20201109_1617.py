# Generated by Django 3.1.2 on 2020-11-09 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subject', '0007_auto_20201108_1351'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='days',
            name='duration',
        ),
        migrations.AddField(
            model_name='days',
            name='end_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
