from .models import SupportDonation
from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        # We include 'phone' here because it's in your React formData now
        fields = ['id', 'name', 'email', 'phone', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class SupportDonationSerializer(serializers.ModelSerializer):
    # We use CharField here to stop the strict "Enter a valid email" check on empty strings
    email = serializers.CharField(
        required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = SupportDonation
        fields = ['name', 'email', 'tier_name', 'amount', 'message']

    def validate_email(self, value):
        # If the user actually typed something, THEN check if it's a real email
        if value and "@" not in value:
            raise serializers.ValidationError("Enter a valid email address.")
        return value
