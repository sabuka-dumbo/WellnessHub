from django.db import models

# Create your models here.
class Note():
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=1500)
    pics = models.ImageField()

    def __str__(self):
        return f"self.user added '{self.title}' note"