from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("hello world, you are at the WORDLE landing page")
# Create your views here.
