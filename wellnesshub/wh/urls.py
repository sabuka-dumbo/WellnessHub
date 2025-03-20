from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('calculator/', views.calculator, name="calculator"),
    path('notes/', views.notes, name="notes"),
    path('workouts/', views.workouts, name="workout"),


    path('add_note/', views.save_note, name="add_note"),
    path('delete_note/', views.delete_note, name="delete_note"),
    path('read_note/', views.read_note, name="read_note"),
]