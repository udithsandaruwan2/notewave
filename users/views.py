from django.shortcuts import render

def login(request):
    return render(request, 'users/login-register.html')