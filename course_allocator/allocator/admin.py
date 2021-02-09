from django.contrib import admin
from .models import *
admin.site.site_header = 'NIT SILCHAR'
admin.site.index_title = 'COURSE ALLOTMENT' 
admin.site.site_title = 'NIT SILCHAR' 

# Register your models here.
admin.site.register(Preference)