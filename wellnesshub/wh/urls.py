from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('calculator/', views.calculator, name="calculator"),
    path('notes/', views.notes, name="notes"),
    path('workouts/', views.workout, name="workout"),
]