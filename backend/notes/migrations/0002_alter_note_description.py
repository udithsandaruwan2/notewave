# Generated by Django 5.0.6 on 2024-05-29 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='description',
            field=models.TextField(blank=True, max_length=200, null=True),
        ),
    ]
