from .models import *
def preload_infos(request):
    if request.user.is_authenticated:
        try:
            profile = Profile.objects.get(user = request.user)
        except Profile.DoesNotExist:
            profile = Profile.objects.create(user=request.user,
                department='Superuser',phone_number=123,designation="Superuser",)

        return {'profile':profile}
    return {}
