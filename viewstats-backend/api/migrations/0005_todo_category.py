# Generated by Django 3.2.13 on 2024-04-03 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_todo_uid'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='category',
            field=models.TextField(max_length=500, null=True),
        ),
    ]