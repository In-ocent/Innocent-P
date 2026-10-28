from .models import SupportDonation
from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class SupportDonationSerializer(serializers.ModelSerializer):
    # Simplified email & phone handling
    email = serializers.EmailField(
        required=False, allow_blank=True, allow_null=True)
    phone = serializers.CharField(
        required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = SupportDonation
        # Added 'phone' to the fields list
        fields = ['name', 'email', 'phone', 'tier_name',
                  'amount', 'message', 'created_at']

    def validate_email(self, value):

        if value and "@" not in value:
            raise serializers.ValidationError(
                "Please provide a valid email address.")
        return value
