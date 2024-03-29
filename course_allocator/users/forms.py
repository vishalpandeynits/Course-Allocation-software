from django import forms
from django.contrib.auth.models import User
from users.models import Profile
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.core.exceptions import ValidationError
from django.db.models import Q 

class RegisterForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['first_name','last_name','email', 'password1', 'password2']

	def __init__(self, *args, **kwargs):
		super(RegisterForm, self).__init__(*args, **kwargs)
		self.fields['password1'].help_text = None
		self.fields['password2'].help_text = None
		self.fields['password2'].label = 'Confirm Password'
		self.fields['email'].widget.attrs.update({'required': 'required'})
		self.fields['first_name'].widget.attrs.update({'required': 'required'})
		self.fields['last_name'].widget.attrs.update({'required': 'required'})
	
	def clean(self):
		cleaned_data = self.cleaned_data
		try:
		    User.objects.get(email=cleaned_data['email'])
		except User.DoesNotExist:
		    pass
		else:
		    raise ValidationError('This Email address already exists! Try different one!')
		return cleaned_data

class UserLoginForm(AuthenticationForm):
	def __init__(self, *args, **kwargs):
		super(UserLoginForm, self).__init__(*args, **kwargs)
		self.fields['username'].label = 'Email:'

class ProfileRegisterForm(forms.ModelForm):
	class Meta:
		model = Profile 
		fields = ('department','phone_number','designation')

	def clean(self):
		cleaned_data = self.cleaned_data
		k=Profile.objects.filter(Q(designation='HOD') & Q(department=cleaned_data['department']))
		if k.exists() and cleaned_data['designation']=='HOD':
			k = k.first()
			raise ValidationError(f' {k.user.first_name} {k.user.last_name} already registred as HOD of this department')