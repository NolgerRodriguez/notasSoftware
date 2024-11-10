from .serializer import TaskSerializer
from .models import Task
from rest_framework import viewsets

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
