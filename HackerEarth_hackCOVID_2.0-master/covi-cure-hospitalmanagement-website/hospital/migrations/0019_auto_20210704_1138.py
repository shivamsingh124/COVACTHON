# Generated by Django 3.0.5 on 2021-07-04 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0018_auto_20201015_2036'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='department',
            field=models.CharField(choices=[('Cardiologist', 'Cardiologist'), ('Dermatologist', 'Dermatologist'), ('Emergency Medicine Specialist', 'Emergency Medicine Specialist'), ('Allergist/Immunologist', 'Allergist/Immunologist'), ('Anesthesiologist', 'Anesthesiologist'), ('Colon and Rectal Surgeon', 'Colon and Rectal Surgeon')], default='Cardiologist', max_length=50),
        ),
    ]