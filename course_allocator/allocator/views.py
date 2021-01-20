from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .forms import *
from django.contrib.auth.decorators import login_required
from django.urls import reverse

def home(request):
    params = {}
    return render(request,'home.html',params)

def signup(request):
	if request.user.is_authenticated:
		return redirect(reverse('home'))
	if request.method=='POST':
		basicform= RegisterForm(request.POST, request.FILES)
		advanceform = ProfileRegisterForm(request.POST , request.FILES)
		if basicform.is_valid() and advanceform.is_valid():
			basicdata = basicform.save(commit=False)
			user_data = basicdata.username
			basicdata.save()
			advance_data = advanceform.save(commit=False)
			advance_data.user = User.objects.get(username=user_data)
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
		'requested_user':user
	}
	return render(request,'profile.html',params)
@login_required
def preference_page(request):
	profile = Profile.objects.get(user = request.user)
	if request.method=="POST":
		pass
	params = {
		'profile':profile,
	}
	return render(request,'select_preference.html',params)