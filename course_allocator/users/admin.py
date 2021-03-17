from django.contrib import admin
from users.models import Profile

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user','department','phone_number','designation']
    list_filter = ['designation','department',]
    search_fields = ['user__email','user__first_name','phone_number']

admin.site.register(Profile,ProfileAdmin)
