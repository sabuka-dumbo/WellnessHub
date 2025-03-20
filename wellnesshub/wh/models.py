from django.db import models
from django.contrib.auth.models import AbstractUser 

# Create your models here.
class User(AbstractUser):
    pass

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_of_note")
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=1500)

    def __str__(self):
        return f"self.user added '{self.title}' note"