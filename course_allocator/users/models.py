from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
import re

department_choices = [
    ('CSE', 'Computer Science and Engineering'),
    ('ECE', 'Electronics communication and Engineering'),
    ('CE', 'Civil Engineering'),
    ('EEE', 'Electrical Engineering'),
    ('EIE', 'Electronics & Instrumentation Engineering'),
    ('ME','Mechanical Engineering')
]
designation_choices = [
    ('HOD','Head of Department'),
    ('AP','Associate Professor'),
    ('P', 'Professor'),
]

def phonevalidate(value):
    if not re.search(r"[6-9]{1}[0-9]{9}",str(value)):
        raise ValidationError(
            _('%(value)s is an Invalid phone number.'),
            params={'value': value},
        )


class Profile(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    department = models.CharField(max_length=100,choices= department_choices)
    phone_number = models.PositiveIntegerField(max_length=10, validators=[phonevalidate])
    designation = models.CharField(max_length=100,choices=designation_choices)
    def __str__(self):
        return self.user.first_name +" "+self.user.last_name


