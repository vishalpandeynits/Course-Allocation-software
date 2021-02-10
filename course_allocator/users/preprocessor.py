from .models import *
from course_allocator.session_detector import session

def preload_infos(request):
    if request.user.is_authenticated:
        try:
            profile = Profile.objects.get(user = request.user)
        except Profile.DoesNotExist:
            profile = Profile.objects.create(user=request.user,
                department='Superuser',phone_number=123,designation="Superuser",)
        return {
            'profile':profile,
            'session':session()
            }
    return {}
