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
    notes_list = Note.objects.all().filter(user=request.user)

    return render(request, "notes.html", {
        "notes": notes_list
    })

def workouts(request):
    return render(request, "workouts.html")

@csrf_exempt
def save_note(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))

            note_title = data_from_js.get("note_title")
            note_text = data_from_js.get("note_text")

            new_note = Note.objects.create(user=request.user, title=note_title, text=note_text)

            new_note.save()

            return JsonResponse({"saved": "Saved", "note_id": new_note.pk, "note_date": new_note.date})            

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({ "done": True })

@csrf_exempt
def delete_note(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))

            note_pk = data_from_js.get("note_pk")

            note = Note.objects.all().filter(pk=note_pk)

            note.delete()

            return JsonResponse({"delete": "Deleted"})            

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({ "done": True })

@csrf_exempt
def read_note(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))

            note_pk = data_from_js.get("note_pk")

            note = Note.objects.all().get(pk=note_pk)

            return JsonResponse({"title": note.title, "text": note.text})            

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({ "done": True })

@csrf_exempt
def edit_note(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))

            note_pk = data_from_js.get("note_pk")

            note = Note.objects.all().get(pk=note_pk)

            

            return JsonResponse({"edit": "Edited"})            

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({ "done": True })