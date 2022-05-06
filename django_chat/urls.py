from django.urls import path
from . import views

urlpatterns = [
    path('', views.head_page, name='head_page'),
]
