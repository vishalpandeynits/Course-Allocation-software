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
course_type_choice = [
    ('core','Core Course'),
    ('elective','Elective Course')
]
graduate_choice = [
    ('UG','Under Graduate'),
    ('PG','Post Graduate')
]
# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    department = models.CharField(max_length=100,choices= department_choices)
    phone_number = models.PositiveIntegerField()
    designation = models.CharField(max_length=100,choices=designation_choices)
    employee_number = models.CharField(unique=True,max_length = 10,null=True,blank=True)

    def __str__(self):
        return self.user.first_name +" "+self.user.last_name

class Preference(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    preference_num = models.CharField(max_length=1,choices = [('1','1'),('2','2'),('3','3')])
    course_type = models.CharField(max_length=20,choices = course_type_choice)
    semester = models.CharField(max_length=3)
    course_name = models.CharField(max_length=100)
    ug_pg = models.CharField(max_length = 30,choices = graduate_choice)
    
    def __str__(self):
        return f'{self.user.username}'