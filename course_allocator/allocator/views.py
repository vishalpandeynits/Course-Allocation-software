from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .forms import *
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .models import *
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from django.utils.timezone import now
import io
from django.http import FileResponse
from django.contrib import messages

def table_style():
	return TableStyle([
    ('INNERGRID', (0,0), (-1,-1), 0.25, colors.black),
    ('BOX', (0,0), (-1,-1), 0.25, colors.black),
    ('LEFTPADDING', (0,0), (-1,-1), 0.1*inch),
    ('RIGHTPADDING', (0,0), (-1,-1), 0.1*inch),
    ('TOPPADDING', (0,0), (-1,-1), 0.1*inch),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.1*inch),
    ('FONTSIZE', (0,0), (-1,-1), 13),
])
def table_row():
	return ['Preference','UG/PG','Semester','Subject']

def home(request):
	params = None
	if request.user.is_authenticated:
		profile = Profile.objects.get(user=request.user)
		my_preferences=Preference.objects.filter(user=request.user)
		if profile.designation=='HOD':
			teachers = Profile.objects.filter(department = profile.department)
			preferences = Preference.objects.filter(user__profile__in = teachers).order_by('user','course_type','preference_num')
			params = {
				'preferences':preferences,
				'teachers':teachers,
				'my_preferences':my_preferences
				}
		return render(request,'home.html',params)
	return render(request,'home.html',params)

@login_required
def preference_page(request):
	user = request.user
	profile = Profile.objects.get(user=user)
	my_preferences=Preference.objects.filter(user=request.user).order_by('ug_pg')
	if my_preferences.count()==6 and 'print' in request.POST:
		core_courses = [list(i.values())[2:] for i in list(my_preferences.filter(course_type='core').values())]
		elective_courses = [list(i.values())[2:] for i in list(my_preferences.filter(course_type='elective').values())]
		for i in core_courses:
			i.remove('core') # remove'core' tag from core course
		for i in elective_courses:
			i.remove('elective')# remove'elective' tag from elective course
		core_courses.insert(0,table_row())
		elective_courses.insert(0,table_row())
		buffer = io.BytesIO()
		page = canvas.Canvas(buffer)
		page.setFont('Helvetica', 11)
		page.drawString(0.6*inch,10.8*inch,f'Name: {user.first_name} {user.last_name} ')
		page.drawString(0.6*inch,10.6*inch,f'Email: {user.email}')
		page.drawString(0.6*inch,10.4*inch,f'Department: {profile.department}')
		page.drawString(0.6*inch,10.2*inch,'Datetime: '+now().strftime('%d %b %Y %H:%M %p'))
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

	elif request.method=="POST":
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
	params={'my_preferences':my_preferences,}
	return render(request,'select_preference.html',params)


def signup(request):
	if request.user.is_authenticated:
		return redirect(reverse('home'))
	if request.method=='POST':
		basicform= RegisterForm(request.POST)
		advanceform = ProfileRegisterForm(request.POST)
		if basicform.is_valid() and advanceform.is_valid():
			user = basicform.save(commit=False)
			advance_data = advanceform.save(commit=False)
			user.username = user.email.split('@')[0] +'-' + user.email.split('@')[1].split('.')[0]
			user.save()
			advance_data.user = user
			advance_data.save()
			return redirect(reverse('login'))
	else:
		basicform= RegisterForm()
		advanceform = ProfileRegisterForm()
	params = {'form':basicform,'advance_form':advanceform}
	return render(request,'registration/signup.html',params)

def profile_page(request,username):
	user = User.objects.get(username=username)
	profile = Profile.objects.get(user=user)
	params = {
		'profile':profile,
		'requested_user':user,
	}
	return render(request,'profile.html',params)