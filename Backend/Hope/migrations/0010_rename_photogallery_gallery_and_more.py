# Generated by Django 5.1.4 on 2025-01-03 18:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0009_photogallery_description'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PhotoGallery',
            new_name='Gallery',
        ),
        migrations.RenameField(
            model_name='gallery',
            old_name='photo',
            new_name='image',
        ),
    ]