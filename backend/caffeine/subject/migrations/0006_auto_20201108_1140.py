# Generated by Django 3.1.2 on 2020-11-08 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subject', '0005_auto_20201108_1137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='days',
            name='days',
            field=models.IntegerField(choices=[(0, 'Monday'), (1, 'Tuesday'), (2, 'Wednesday'), (3, 'Thursday'), (4, 'Friday'), (5, 'Saturday'), (6, 'Sunday')], null=True),
        ),
    ]
