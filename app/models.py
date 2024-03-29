from django.db import models

# Create your models here.
class Lesson(models.Model):
    theme=models.CharField(max_length=30)
    information=models.CharField(max_length=800)
    question=models.CharField(max_length=200)
    answer=models.CharField(max_length=200)
    def __str__(self):
        return  self.theme
        