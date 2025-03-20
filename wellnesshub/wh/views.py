from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json

# Create your views here.
def index(request):
    return render(request, "index.html")

def calculator(request):
    return render(request, "calculator.html")

def notes(request):
    return render(request, "notes.html")

def workouts(request):
    return render(request, "workouts.html")

@csrf_exempt
def save_note(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))

            note_title = data_from_js.get("note_title")
            note_text = data_from_js.get("note_text")

            new_note = Note(request,)

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({ "done": True })