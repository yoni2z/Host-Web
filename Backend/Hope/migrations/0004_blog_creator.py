# Generated by Django 5.1.4 on 2024-12-31 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0003_alter_blog_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='creator',
            field=models.CharField(default='Creator', max_length=100),
        ),
    ]