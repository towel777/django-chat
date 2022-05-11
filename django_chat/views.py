from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def head_page(request):

    return render(request, 'django_chat/main_page.html')
