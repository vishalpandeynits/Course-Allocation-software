from django.http.response import Http404
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from reportlab.pdfgen import canvas
from reportlab.platypus import Table
from reportlab.lib.units import inch
from django.http import FileResponse
from datetime import datetime
from django.http import Http404
from .utils import *
from .models import Preference
from django.db.models import Q
from easy_pdf.views import PDFTemplateView 
from course_allocator.session_detector import session
from users.models import Profile
import io

def homepage(request,session_input=None):
	if request.user.is_authenticated:
		profile=get_object_or_404(Profile,user=request.user)
		if profile.designation=="HOD":
			return redirect(reverse('home',kwargs={'session_input':session_input or session()}))
		else:
			return redirect(reverse('preference',kwargs={'session_input':session_input or session()}))
	else:
		return redirect('login')

@login_required
def home(request,session_input):
	profile = Profile.objects.get(user=request.user)
	if profile.designation=='HOD':
		teachers = Profile.objects.filter(department = profile.department)
		preferences = Preference.objects.filter(user__profile__in = teachers).order_by('user','course_type','preference_num')
		preferences = preferences.filter(session=session_input)
		data = ['-odd-sem','-even-sem']
		flag=0
		for i in data:
			if i not in session_input:
				flag=1
		if(flag==0):
			raise Http404()

		params = {
			'preferences':preferences,
			'teachers':teachers.filter(designation="HOD")|teachers.order_by('designation'),
			'session_input':session_input
			}
		return render(request,'home.html',params)
	else:
		return redirect(reverse('preference',kwargs={'session_input':session_input}))

@login_required
def preference_page(request,session_input):
	user = request.user
	profile = Profile.objects.get(user=user)
	my_preferences=Preference.objects.filter(Q(user=request.user) & Q(session=session_input)).order_by('course_type','preference_num','-ug_pg',)
	if 'print' in request.POST and my_preferences.exists():
		which_session = my_preferences.first().session
		core_courses = [list(i.values())[2:] for i in list(my_preferences.filter(course_type='core').values())]
		elective_courses = [list(i.values())[2:] for i in list(my_preferences.exclude(course_type='core').order_by('preference_num').values())]
		for i in core_courses:
			i.remove('core') # remove'core' tag from core course
			i.pop() # remove 'session' from queryset
		for i in elective_courses:
			i.pop()  # remove 'session' from queryset
		core_courses.insert(0,table_row('core'))
		elective_courses.insert(0,table_row('elective'))
		buffer = io.BytesIO()
		page = canvas.Canvas(buffer)
		page.setFont('Helvetica', 11)
		page.drawString(0.6*inch,11*inch,f'Name: {user.first_name} {user.last_name} ')
		page.drawString(0.6*inch,10.8*inch,f'Email: {user.email}')
		page.drawString(0.6*inch,10.6*inch,f'Department: {profile.department}')
		page.drawString(0.6*inch,10.4*inch,f'Session: {which_session}')
		page.drawString(0.6*inch,10.2*inch,'Datetime: '+datetime.now().strftime('%d %b %Y %H:%M %p'))
		page.drawInlineImage('https://upload.wikimedia.org/wikipedia/en/c/c6/NIT_Silchar_logo.png',6.4*inch,10*inch, width=100,height=100)
		page.setFont('Helvetica', 22)
		page.line(0.5*inch,10*inch,8*inch,10*inch)

		page.drawString(3*inch,9.5*inch,"PREFERENCES")
		page.drawCentredString(4*inch,9*inch,"Core Courses")
		t=Table(core_courses,hAlign='CENTER')
		t.setStyle(table_style())
		page.setFont('Helvetica', 18)
		t.wrapOn(page, 1.4*inch, 7.4*inch)
		t.drawOn(page, 1.4*inch, 7.4*inch)

		page.drawCentredString(4*inch,7*inch,"Elective Courses")
		x = Table(elective_courses,hAlign='CENTER')
		x.setStyle(table_style())
		x.wrapOn(page,1.4*inch, 5.4*inch)
		x.drawOn(page,1.4*inch, 5.4*inch)

		page.showPage()
		page.save()
		buffer.seek(0)
		return FileResponse(buffer, as_attachment=True, filename=f'{user.username}-preference.pdf')

	elif request.method=="POST" and not my_preferences.exists():
		save_preference_data(request,session_input)

	# elif session()!= session_input: # Input can only be taken if current sem is equal to session provided in url
	# 	raise Http404()

	params={
		'my_preferences':my_preferences,
		'session':session(),
		}
	return render(request,'select_preference.html',params)

class Cansolidated(PDFTemplateView):
	template_name = 'cansolidated.html'
	context_object_name = 'pdf_data'

	def get(self,request,session_input,*args,**kwargs):
		context = self.get_context_data(**kwargs)
		profile = Profile.objects.get(user=request.user)
		if profile.designation=='HOD':
			teachers = Profile.objects.filter(department = profile.department)
			preferences = Preference.objects.filter(Q(user__profile__in = teachers)).order_by('user','course_type','preference_num')
			if session_input:
				preferences = preferences.filter(session=session_input)
				context['preferences']= preferences
				context['session']=session_input
				context['department'] = profile.get_department_display
				return self.render_to_response(context)

			if not preferences.exists():
				raise Http404()
		else:
			raise Http404()
	
	def get_context_data(self, **kwargs):
		return super(Cansolidated, self).get_context_data(
			pagesize='A4',
			**kwargs
		)