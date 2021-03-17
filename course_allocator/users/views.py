from django.contrib.auth.tokens import PasswordResetTokenGenerator
from six import text_type
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.contrib.auth import login
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.contrib import messages
from django.conf import settings
from django.urls import reverse
from .forms import *
from course_allocator.session_detector import session

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return text_type(user.pk) + text_type(timestamp) + text_type(user.is_active)
account_activation_token = AccountActivationTokenGenerator()

def signup(request):
    if request.user.is_authenticated:
        return redirect(reverse('home'))
    if request.method=='POST':
        basicform= RegisterForm(request.POST)
        advanceform = ProfileRegisterForm(request.POST)
        print(basicform.errors,advanceform.errors)
        if basicform.is_valid() and advanceform.is_valid():
            user = basicform.save(commit=False)
            advance_data = advanceform.save(commit=False)
            user.username = user.email.split('@')[0] +'-' + user.email.split('@')[1].split('.')[0]
            user.is_active = False
            user.save()
            advance_data.user = user
            advance_data.save()
            current_site = get_current_site(request)
            message = render_to_string('emails/acc_active_email.html', {
                'user': user, 'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
                'site_name':settings.SITE_NAME
            })
            mail_subject = 'Activate your account.'
            to_email = user.email
            send_mail(mail_subject, message,'guru.online.classroom.portal@gmail.com' ,[to_email],html_message=message)
            messages.add_message(request,messages.SUCCESS,'An Activation link is sent to your \
                    registrated email id.Please visit your email and activate your account.')
            return redirect(reverse('preference',kwargs={'session_input':session()}))
    else:
        basicform= RegisterForm()
        advanceform = ProfileRegisterForm()
    params = {'form':basicform,'advanceform':advanceform}
    return render(request,'registration/signup.html',params)

def activate(request, uidb64, token,backend='django.contrib.auth.backends.ModelBackend'):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        messages.add_message(request,messages.SUCCESS,'Thank you for your email confirmation.')
        login(request, user)
        return redirect(reverse('preference',kwargs={'session_input':session()}))
    else:
        messages.add_message(request,messages.WARNING,'Activation link is invalid.')
        return redirect(reverse('home',kwargs={'session_input':session()}))

def profile_page(request,username):
	user = get_object_or_404(User,username=username)
	profile = Profile.objects.get(user=user)
	params = {
		'profile':profile,
		'requested_user':user,
	}
	return render(request,'profile.html',params)
