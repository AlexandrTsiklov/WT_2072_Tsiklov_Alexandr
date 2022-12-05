from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import json

from app.models import User


@csrf_exempt
def register(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        name, surname, email, password = body['name'], body['surname'], body['email'], body['password']

        try:
            user_db = User.objects.get(name=name)
            return HttpResponse(status=222)
        except ObjectDoesNotExist:
            user = User(name = name, surname = surname, email = email, password = password)
            user.save()
            return HttpResponse(status=200)

    return render(request, 'registration.html')


@csrf_exempt
def login(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        email, password = body['email'], body['password']

        try:
            user_db = User.objects.get(email = email, password = password)
            return HttpResponse(status=200)
        except ObjectDoesNotExist:
            return HttpResponse(status=222)

    return render(request, 'login.html')


def home(request):
    return render(request, 'home.html')