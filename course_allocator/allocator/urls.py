from django.urls import path
from . import views
urlpatterns = [
    path('',views.home,name="home"),
    path('signup/',views.signup,name="signup"),
    path('profile/<str:username>/',views.profile_page,name="profile"),
    path('preference/',views.preference_page,name="preference")
]
