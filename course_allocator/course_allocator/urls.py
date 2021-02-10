from django.contrib import admin
from django.conf import settings
from django.urls import path,include
from django.conf.urls.static import static
from django.contrib.auth import views
from users.forms import UserLoginForm 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('allocator.urls')),
    path('accounts/login/',views.LoginView.as_view(template_name="registration/login.html",authentication_form=UserLoginForm),name='login'),
    path('accounts/',include('django.contrib.auth.urls')),
    path('profile/',include('users.urls'))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)