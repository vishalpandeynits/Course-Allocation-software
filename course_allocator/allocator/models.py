from django.db import models
from django.contrib.auth.models import User
course_type_choice = [
    ('core','Core Course'),
    ('elective','Elective Course')
]
graduate_choice = [
    ('UG','Under Graduate'),
    ('PG','Post Graduate')
]

class Preference(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    preference_num = models.CharField(max_length=1,choices = [('1','1'),('2','2'),('3','3')])
    ug_pg = models.CharField(max_length = 30,choices = graduate_choice)
    course_type = models.CharField(max_length=20,choices = course_type_choice)
    semester = models.CharField(max_length=3)
    course_name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.user.first_name +" "+self.user.last_name