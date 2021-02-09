from django.urls import path
from . import views

urlpatterns = [
    path('signup/',views.signup,name="signup"),
    path('profile/<str:username>/',views.profile_page,name="profile"),
    path('activate/<uidb64>/<token>/',views.activate,name="activate"),
]