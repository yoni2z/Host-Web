# Generated by Django 5.1.4 on 2025-01-03 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0008_blog_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='photogallery',
            name='description',
            field=models.CharField(default='Gallery 01', max_length=100),
        ),
    ]
