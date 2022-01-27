from django.db import models
from django.core.exceptions import ValidationError

def  validate_contact(value):
    if len(value)!=10:
        raise ValidationError("Incorrect Contact No!")

def  validate_pwd(value):
    if len(value)!=8:
        raise ValidationError("Password must be of 8 characters only!")

class User(models.Model):
    full_name = models.CharField(max_length=200)
    email_id = models.EmailField()
    ngo_name = models.CharField(max_length=200, null=True, blank=True)
    address = models.TextField()
    contact = models.CharField(max_length=10, validators=[validate_contact])
    pwd = models.CharField(max_length=8, validators=[validate_pwd])

    def __str__(self):
        return self.full_name

class DonateForm(models.Model):
    full_name = models.CharField(max_length=200)
    cont_no = models.CharField(max_length=10)
    food_type = models.CharField(max_length=200)
    cdt = models.CharField(max_length=200)
    pdt = models.CharField(max_length=200)
    ploc = models.TextField()

    def __str__(self):
        return self.full_name

class FeedbackForm(models.Model):
    full_name = models.CharField(max_length=200)
    email_id = models.EmailField()
    cont_no = models.CharField(max_length=10)
    feedback = models.TextField()

    def __str__(self):
        return self.full_name

class DonateProcess(models.Model):
    don_id = models.CharField(max_length=2000)

    def __str__(self):
        return self.don_id




'''
from django.db import models
from django.core.exceptions import ValidationError

def  validate_contact(value):
    if len(value)!=10:
        raise ValidationError("Incorrect Contact No!")

def  validate_pwd(value):
    if len(value)!=8:
        raise ValidationError("Password must be of 8 characters only!")

class User(models.Model):
    full_name = models.CharField(max_length=200)
    email_id = models.EmailField()
    ngo_name = models.CharField(max_length=200, null=True, blank=True)
    address = models.TextField()
    contact = models.CharField(max_length=10, validators=[validate_contact])
    pwd = models.CharField(max_length=8, validators=[validate_pwd])

    def __str__(self):
        return self.full_name

class DonateForm(models.Model):
    full_name = models.CharField(max_length=200)
    cont_no = models.CharField(max_length=10)
    food_type = models.CharField(max_length=200)
    cdt = models.CharField(max_length=200)
    pdt = models.CharField(max_length=200)
    ploc = models.TextField()

    def __str__(self):
        return self.full_name

class FeedbackForm(models.Model):
    full_name = models.CharField(max_length=200)
    email_id = models.EmailField()
    cont_no = models.CharField(max_length=10)
    feedback = models.TextField()

    def __str__(self):
        return self.full_name
'''