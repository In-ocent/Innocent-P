from .serializers import SupportDonationSerializer  # Make sure to import this!
from .models import SupportDonation
from .serializers import SupportDonationSerializer
import os
import requests
import logging
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


@api_view(['POST'])
def contact_api(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        contact_instance = serializer.save()
        resend_api_key = os.environ.get('RESEND_API_KEY')

        try:
            response = requests.post(
                "https://api.resend.com/emails",
                headers={
                    "Authorization": f"Bearer {resend_api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    # Use onboarding@resend.dev until your domain is verified!
                    "from": "Portfolio Contact <onboarding@resend.dev>",
                    "to": "innocoda.team@gmail.com",
                    "subject": f"📩 New Message from {contact_instance.name}",
                    "html": f"""
                        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                            <h3>New Contact Form Submission</h3>
                            <p><strong>Name:</strong> {contact_instance.name}</p>
                            <p><strong>Email:</strong> {contact_instance.email}</p>
                            <p><strong>Phone:</strong> {contact_instance.phone}</p>
                            <hr>
                            <p><strong>Message:</strong></p>
                            <p>{contact_instance.message}</p>
                        </div>
                    """,
                },
                timeout=10
            )
            print(f"Contact Email Status: {response.status_code}")
        except Exception as e:
            print(f"Contact Email Error: {e}")

        return Response({"message": "Success! Message received."}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def support_api(request):
    serializer = SupportDonationSerializer(data=request.data)

    if serializer.is_valid():
        support_instance = serializer.save()

        # 1. Format amount safely
        try:
            amount_val = float(support_instance.amount)
            formatted_amount = "{:,.2f}".format(amount_val)
        except (ValueError, TypeError):
            formatted_amount = str(support_instance.amount)

        resend_api_key = os.environ.get('RESEND_API_KEY')

        try:
            response = requests.post(
                "https://api.resend.com/emails",
                headers={
                    "Authorization": f"Bearer {resend_api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "from": "Innocoda Support <onboarding@resend.dev>",
                    "to": "innocoda.team@gmail.com",
                    "subject": f"💰 New Support: ₦{formatted_amount} from {support_instance.name}",
                    "html": f"""
                        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #7C53C5; border-radius: 10px;">
                            <h2 style="color: #7C53C5;">New Support Logged!</h2>
                            <p><strong>Supporter:</strong> {support_instance.name}</p>
                            <p style="font-size: 1.2rem; color: #E64A8D;"><strong>Amount:</strong> ₦{formatted_amount}</p>
                            <hr />
                            <p><strong>Message:</strong> {support_instance.message or 'No message left.'}</p>
                        </div>
                    """,
                },
                timeout=10
            )
            print(f"Support Email Status: {response.status_code}")
            if response.status_code != 200 and response.status_code != 201:
                print(f"Support Error Details: {response.text}")

        except Exception as e:
            print(f"Support Connection Error: {e}")

        return Response({"message": "Support Intent Logged"}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
