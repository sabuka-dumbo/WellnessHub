from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('calculator/', views.calculator, name="calculator"),
    path('notes/', views.notes, name="notes"),
    path('workouts/', views.workouts, name="workout"),


    path('/add_note/', views.save_note, name="add_note"),
]