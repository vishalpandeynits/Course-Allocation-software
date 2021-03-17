from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from course_allocator import session_detector
from django.utils.text import slugify

class Preference(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    preference_num = models.CharField(max_length=1,choices = [('1','1'),('2','2'),('3','3')])
    ug_pg = models.CharField(max_length = 30)
    course_type = models.CharField(max_length=20)
    semester = models.CharField(max_length=3)
    course_name = models.CharField(max_length=100)
    session = models.CharField(max_length=100)

    def __str__(self):
        return self.user.first_name +" "+self.user.last_name

    def display_name(self):
        return "%s %s %s" %(self.user.first_name.title(), self.user.last_name.title(), self.user.email )

    def full_name(self):
        return "%s %s"% (self.user.first_name, self.user.last_name )

# @receiver(pre_save,sender=Preference)
# def session_add(sender,instance,*args,**kwargs):
#     instance.session = slugify(session_detector.session())
