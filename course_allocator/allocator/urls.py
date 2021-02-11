from django.db.models import query
from django.urls import path
from . import views
from django.conf import settings
from easy_pdf.views import PDFTemplateView

class Hello(PDFTemplateView):
    template_name = 'hello.html'

    base_url = 'file://' + settings.STATIC_ROOT
    download_filename = 'hello.pdf'

    def get_context_data(self, **kwargs):
        return super(Hello, self).get_context_data(
            pagesize='A4',
            title='Hi there!',
            **kwargs
        )
 

urlpatterns = [
    path('',views.homepage),
    path('hell', Hello.as_view()),
    path('hod/<str:session_input>',views.home,name="home"),
    path('preference/<str:session_input>',views.preference_page,name="preference"),
    path('check/<session_input>',views.Cansolidated.as_view())
]