from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'home.html')

def imc(request):
    return render(request, 'imc.html')