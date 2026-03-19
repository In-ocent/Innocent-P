from django.contrib import admin
from . models import ContactMessage, SupportDonation
# Register your models here.


class ContactMesageAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")


admin.site.register(ContactMessage, ContactMesageAdmin)

admin.site.register(SupportDonation)
