from django import forms
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.core.exceptions import ValidationError

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
		try:
		    User.objects.get(username=cleaned_data['username'])

		except User.DoesNotExist:
		    pass
		else:
		    raise forms.ValidationError('User already exists! Try different one!')
		return cleaned_data

class ProfileRegisterForm(forms.ModelForm):
    class Meta:
        model = Profile 
        fields = ('department','phone_number','designation')

class UserLoginForm(AuthenticationForm):
	def __init__(self, *args, **kwargs):
		super(UserLoginForm, self).__init__(*args, **kwargs)
		self.fields['username'].label = 'Email:'