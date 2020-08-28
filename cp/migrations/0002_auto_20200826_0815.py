# Generated by Django 3.1 on 2020-08-26 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='is_new',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='status',
            name='css_class',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
