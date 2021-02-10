from django.urls import path
from . import views
urlpatterns = [
    path('',views.homepage),
    path('hod/<str:session_input>',views.home,name="home"),
    path('preference/<str:session_input>',views.preference_page,name="preference")
]