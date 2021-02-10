from django.http.response import Http404
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from reportlab.pdfgen import canvas
from reportlab.platypus import Table
from reportlab.lib.units import inch
from django.http import FileResponse
from django.contrib import messages
from datetime import datetime
from django.http import Http404
from .utils import *
from .models import *
from .forms import *
from users.models import Profile
import io
from course_allocator.session_detector import session
from django.db.models import Q

def homepage(request):
	print("His")
	if request.user.is_authenticated:
		profile=get_object_or_404(Profile,user=request.user)
		if profile.designation=="HOD":
			return redirect(reverse('home',kwargs={'session_input':session()}))
		else:
			return redirect(reverse('preference'))
	else:
		return redirect('login')

@login_required
def home(request,session_input):
	profile = Profile.objects.get(user=request.user)
	if profile.designation=='HOD':
		teachers = Profile.objects.filter(department = profile.department)
		preferences = Preference.objects.filter(Q(user__profile__in = teachers)).order_by('user','course_type','preference_num')
		if session_input:
			preferences = preferences.filter(session__icontains=session_input)
		params = {
			'preferences':preferences,
			'teachers':teachers,
			}
		return render(request,'home.html',params)
	else:
		return redirect(reverse('preference'))

@login_required
def preference_page(request,session_input):
	user = request.user
	profile = Profile.objects.get(user=user)
	my_preferences=Preference.objects.filter(Q(user=request.user) & Q(session=session_input)).order_by('course_type','-ug_pg','preference_num')
	if 'print' in request.POST and my_preferences.exists():
		which_session = my_preferences.first().session
		core_courses = [list(i.values())[2:] for i in list(my_preferences.filter(course_type='core').values())]
		elective_courses = [list(i.values())[2:] for i in list(my_preferences.filter(course_type='elective').values())]
		for i in core_courses:
			i.remove('core') # remove'core' tag from core course
			i.pop() # remove 'session' from queryset
		for i in elective_courses:
			i.remove('elective')# remove'elective' tag from elective course
			i.pop()  # remove 'session' from queryset
		core_courses.insert(0,table_row())
		elective_courses.insert(0,table_row())
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
		#core courses 
		ug_pg1 = request.POST.get('ug_pg_cc_pre1')
		semester1 = request.POST.get('semester_cc_pre1')
		course1 = request.POST.get('coreCourses_cc_pre1')

		ug_pg2 = request.POST.get('ug_pg_cc_pre2')
		semester2 = request.POST.get('semester_cc_pre2')
		course2 = request.POST.get('coreCourses_cc_pre2')

		ug_pg3 = request.POST.get('ug_pg_cc_pre3')
		semester3 = request.POST.get('semester_cc_pre3')
		course3 = request.POST.get('coreCourses_cc_pre3')

		ug_pg4 = request.POST.get('ug_pg_ec_pre1')
		semester4 = request.POST.get('semester_ec_pre1')
		course4 = request.POST.get('electiveCourses_ec_pre1')

		ug_pg5 = request.POST.get('ug_pg_ec_pre2')
		semester5 = request.POST.get('semester_ec_pre2')
		course5 = request.POST.get('electiveCourses_ec_pre2')

		ug_pg6 = request.POST.get('ug_pg_ec_pre3')
		semester6 = request.POST.get('semester_ec_pre3')
		course6 = request.POST.get('electiveCourses_ec_pre3')

		Preference.objects.create(user=request.user,preference_num = '1',course_type='core', semester = semester1, course_name = course1, ug_pg = ug_pg1)
		Preference.objects.create(user=request.user,preference_num = '2',course_type='core', semester = semester2, course_name = course2, ug_pg = ug_pg2)
		Preference.objects.create(user=request.user,preference_num = '3',course_type='core', semester = semester3, course_name = course3, ug_pg = ug_pg3)
		Preference.objects.create(user=request.user,preference_num = '1',course_type='elective', semester = semester4, course_name = course4, ug_pg = ug_pg4)
		Preference.objects.create(user=request.user,preference_num = '2',course_type='elective', semester = semester5, course_name = course5, ug_pg = ug_pg5)
		Preference.objects.create(user=request.user,preference_num = '3',course_type='elective', semester = semester6, course_name = course6, ug_pg = ug_pg6)
		messages.add_message(request,messages.SUCCESS, f'Your Preference submitted')
	elif session()!= session_input: # Input can only be taken if current sem is equal to session provided in url
		raise Http404()
	params={
		'my_preferences':my_preferences,
		'session':session(),
		}
	return render(request,'select_preference.html',params)

