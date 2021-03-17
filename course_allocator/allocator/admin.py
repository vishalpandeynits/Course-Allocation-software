from django.contrib import admin
from .models import *
admin.site.site_header = 'NIT SILCHAR'
admin.site.index_title = 'COURSE ALLOTMENT' 
admin.site.site_title = 'NIT SILCHAR' 

class PreferenceAdmin(admin.ModelAdmin):
    list_display = ['user','preference_num','ug_pg','course_type','semester','course_name','session']
    list_filter = ['ug_pg','course_type','session','semester','course_name']
    search_fields = ['course_name','session','user__email']

# Register your models here.
admin.site.register(Preference,PreferenceAdmin)