from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def calculator(request):
    return render(request, "calculator.html")

def notes(request):
    return render(request, "notes.html")

def workouts(request):
    return render(request, "workouts.html")

def add_note(request):
    return render(request, "workouts.html")