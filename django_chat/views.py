from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def head_page(request):
    return HttpResponse('test response')
