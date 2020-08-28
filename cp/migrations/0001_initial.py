# Generated by Django 3.1 on 2020-08-26 06:39

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SocialNetwork',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discount', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=255, null=True)),
                ('icon', models.ImageField(null=True, upload_to='services/')),
                ('slogan', models.CharField(max_length=255, null=True)),
                ('created_at', models.DateField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tarif',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=5)),
                ('min', models.IntegerField(default=0)),
                ('max', models.IntegerField(default=0)),
                ('description', models.TextField(blank=True, null=True)),
                ('service', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cp.service')),
            ],
        ),
        migrations.AddField(
            model_name='service',
            name='social_network',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cp.socialnetwork'),
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('total_number', models.IntegerField(default=0)),
                ('url', models.CharField(max_length=255, null=True)),
                ('email', models.CharField(max_length=255, null=True)),
                ('total_cost', models.DecimalField(decimal_places=2, default=0, max_digits=5)),
                ('service', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cp.service')),
                ('social_network', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cp.socialnetwork')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cp.status')),
                ('tarif', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cp.tarif')),
            ],
        ),
    ]
