from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def niranjan(request):
    return render(request,'profile.html')
    # return HttpResponse("<h1 style='color:red;'>I am niranjan</h1>")