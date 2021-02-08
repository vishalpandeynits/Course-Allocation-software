from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .forms import *
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .models import *

def home(request):
	params ={
		'hi':'hello'
	}
	if request.user.is_authenticated:
		profile = Profile.objects.get(user=request.user)
		if profile.designation=='HOD':
			teachers = Profile.objects.filter(department = profile.department)
			preferences = Preference.objects.filter(user__profile__in = teachers).order_by('user','course_type','preference_num')
			params = {
				'preferences':preferences,
				'teachers':teachers
				}
		return render(request,'home.html',params)
	return render(request,'home.html',params)

def signup(request):
	if request.user.is_authenticated:
		return redirect(reverse('home'))

	if request.method=='POST':
		basicform= RegisterForm(request.POST, request.FILES)
		advanceform = ProfileRegisterForm(request.POST , request.FILES)
		if basicform.is_valid() and advanceform.is_valid():
			user = basicform.save(commit=False)
			user.username = user.email.split('@')[0] +'-' + user.email.split('@')[1].split('.')[0]
			user.save()
			advance_data = advanceform.save(commit=False)
			advance_data.user = user
			advance_data.save()
			return redirect('/')
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
@login_required
def preference_page(request):
	profile = Profile.objects.get(user = request.user)
	branch = profile.department
	if request.method=="POST":
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
	return render(request,'select_preference.html')