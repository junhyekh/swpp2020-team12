# Generated by Django 3.1.2 on 2020-11-11 11:30

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('group', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studyroom',
            name='active_members',
        ),
        migrations.AddField(
            model_name='studyroom',
            name='activeMembers',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
