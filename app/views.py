from rest_framework import viewsets
from .models import Lesson
from .serializers import LessonSerializer

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all().order_by('theme')
    serializer_class = LessonSerializer
