# Generated by Django 3.1.2 on 2020-11-08 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subject', '0006_auto_20201108_1140'),
    ]

    operations = [
        migrations.RenameField(
            model_name='days',
            old_name='days',
            new_name='day',
        ),
        migrations.AlterField(
            model_name='subject',
            name='days',
            field=models.ManyToManyField(blank=True, related_name='timetable', to='subject.Days'),
        ),
    ]
