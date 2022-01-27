from django.contrib import admin
from .models import User, DonateForm, FeedbackForm, DonateProcess

class UserAdmin(admin.ModelAdmin):
    list_display = ['full_name','email_id','ngo_name','address','contact','pwd']

class DonateFormAdmin(admin.ModelAdmin):
    list_display = ['full_name','cont_no','food_type','cdt','pdt','ploc']

class FeedbackFormAdmin(admin.ModelAdmin):
    list_display = ['full_name','email_id','cont_no','feedback']

class DonateProcessAdmin(admin.ModelAdmin):
    list_display = ['don_id']

admin.site.register(User, UserAdmin)
admin.site.register(DonateForm, DonateFormAdmin)
admin.site.register(FeedbackForm, FeedbackFormAdmin)
admin.site.register(DonateProcess, DonateProcessAdmin)









'''
from django.contrib import admin
from .models import User, DonateForm, FeedbackForm

class UserAdmin(admin.ModelAdmin):
    list_display = ['full_name','email_id','ngo_name','address','contact','pwd']

class DonateFormAdmin(admin.ModelAdmin):
    list_display = ['full_name','cont_no','food_type','cdt','pdt','ploc']

class FeedbackFormAdmin(admin.ModelAdmin):
    list_display = ['full_name','email_id','cont_no','feedback']

admin.site.register(User, UserAdmin)
admin.site.register(DonateForm, DonateFormAdmin)
admin.site.register(FeedbackForm, FeedbackFormAdmin)

'''