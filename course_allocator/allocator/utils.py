from reportlab.platypus import TableStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from .models import Preference
from django.contrib import messages
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from .models import Preference
from django.db.models import Q
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
def table_row(forwhich):
    if forwhich=='core':
	    return ['Preference','UG/PG','Semester','Subject']
    else:
        return ['Preference','UG/PG','Elective Type','Semester','Subject']  

def save_preference_data(request,session_input):
    user = User.objects.get(username=request.user.username)
    have_prefernces = Preference.objects.filter(Q(user=user)& Q(session=session_input)).exists()
    if have_prefernces:
        messages.add_message(request,messages.INFO,'Preferences already submitted for this session.')
        return

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

    elective_type1 = request.POST.get('electiveType_pre1')
    elective_type2 = request.POST.get('electiveType_pre2')
    elective_type3 = request.POST.get('electiveType_pre3')

    Preference.objects.create(user=request.user,preference_num = '1',course_type='core', semester = semester1, course_name = course1, ug_pg = ug_pg1,session=session_input)
    Preference.objects.create(user=request.user,preference_num = '2',course_type='core', semester = semester2, course_name = course2, ug_pg = ug_pg2,session=session_input)
    Preference.objects.create(user=request.user,preference_num = '3',course_type='core', semester = semester3, course_name = course3, ug_pg = ug_pg3,session=session_input)
    Preference.objects.create(user=request.user,preference_num = '1',course_type=elective_type1, semester = semester4, course_name = course4, ug_pg = ug_pg4,session=session_input)
    Preference.objects.create(user=request.user,preference_num = '2',course_type=elective_type2, semester = semester5, course_name = course5, ug_pg = ug_pg5,session=session_input)
    Preference.objects.create(user=request.user,preference_num = '3',course_type=elective_type3, semester = semester6, course_name = course6, ug_pg = ug_pg6,session=session_input)
    messages.add_message(request,messages.SUCCESS, f'Your Preference submitted')