from django.db import models


class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    # Flexible for international formats
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"


# class SupportDonation(models.Model):
#     name = models.CharField(max_length=255, default="Anonymous")
#     email = models.EmailField(blank=True, null=True)
#     tier_name = models.CharField(max_length=100)
#     # To handle formatted numbers easily
#     amount = models.CharField(max_length=50)
#     message = models.TextField(blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.name} - {self.tier_name}"
class SupportDonation(models.Model):
    name = models.CharField(max_length=255, default="Anonymous")
    email = models.EmailField(blank=True, null=True)
    # New Field Added:
    phone = models.CharField(max_length=20, blank=True, null=True)
    tier_name = models.CharField(max_length=100)
    amount = models.CharField(max_length=50)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.amount}"
