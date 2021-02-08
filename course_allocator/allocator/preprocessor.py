from .models import *
def preload_infos(request):
    if request.user.is_authenticated:
        profile = Profile.objects.get(user = request.user)
        return {'profile':profile}
    return {}