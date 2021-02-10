from django.urls import path
from . import views
urlpatterns = [
    path('',views.homepage),
    path('<str:session_input>',views.home,name="home"),
    path('preference/',views.preference_page,name="preference")
]
