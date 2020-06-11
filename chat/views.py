from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.views import APIView

# Create your views here.
def index(request):
    return render(request, 'index.html')

def room(request, room_name):
    return render(request, 'room.html', {
        'room_name_json' : mark_safe(json.dumps(room_name))
    })

class UserCreate(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)