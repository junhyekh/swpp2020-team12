# Generated by Django 3.1.2 on 2020-11-10 09:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('study', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='daily_study_for_subject',
            name='distracted_time',
            field=models.DurationField(default=datetime.timedelta(0)),
        ),
        migrations.AlterField(
            model_name='daily_study_for_subject',
            name='study_time',
            field=models.DurationField(default=datetime.timedelta(0)),
        ),
        migrations.AlterField(
            model_name='daily_study_record',
            name='total_concentration',
            field=models.DurationField(default=datetime.timedelta(0)),
        ),
        migrations.AlterField(
            model_name='daily_study_record',
            name='total_study_time',
            field=models.DurationField(default=datetime.timedelta(0)),
        ),
    ]
