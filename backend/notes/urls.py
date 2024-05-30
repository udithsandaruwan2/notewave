from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.notes, name='notes'),
    path('add-note', views.addNote, name='add-note'),
    path('update-note/<str:pk>', views.updateNote, name='update-note'),
    path('delete-note/<str:pk>', views.deleteNote, name='delete-note'),
]