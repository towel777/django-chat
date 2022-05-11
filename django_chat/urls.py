from django.urls import path
from . import views

app_name = 'django_chat'
urlpatterns = [
    path('', views.head_page, name='head_page'),
]
