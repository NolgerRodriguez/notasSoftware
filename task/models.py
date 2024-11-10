from django.db import models

# Create your models here.
class Task(models.Model):
    tittle = models.CharField(max_length=100)
    description = models.TextField(black=True)
    completed = models.BooleanField(default=False)
