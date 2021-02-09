from django.db import models
from django.contrib.auth.models import User

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

class Profile(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    department = models.CharField(max_length=100,choices= department_choices)
    phone_number = models.PositiveIntegerField()
    designation = models.CharField(max_length=100,choices=designation_choices)
    def __str__(self):
        return self.user.first_name +" "+self.user.last_name


