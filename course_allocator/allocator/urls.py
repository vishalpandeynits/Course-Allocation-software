from django.urls import path
from . import views
urlpatterns = [
<<<<<<< HEAD
    path('',views.home,name="home"),
    path('signup/',views.signup,name="signup"),
    path('profile/<str:username>/',views.profile_page,name="profile"),
    path('preference/',views.preference_page,name="preference")
=======
    path('niranjan/',views.niranjan),
    path('vishal/',views.vishal)
>>>>>>> 335ae222f0ddda46e4d2b073e3918cff291ff9f9
]
