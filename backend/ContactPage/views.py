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
                # json={
                #     "from": "Innocoda Support <onboarding@resend.dev>",
                #     "to": "innocoda.team@gmail.com",
                #     "subject": f"Vision Support Message from {support_instance.name}",
                #     "html": f"""
                #         <div style="font-family: sans-serif; padding: 20px; border: 1px solid #7C53C5; border-radius: 10px;">
                #             <h2 style="color: #7C53C5;">New Support Logged!</h2>
                #             <p><strong>Supporter:</strong> {support_instance.name}</p>
                #             <p style="font-size: 1.2rem; color: #E64A8D;"><strong>Amount:</strong> ₦{formatted_amount}</p>
                #             <hr />
                #             <p><strong>Message:</strong> {support_instance.message or 'No message left.'}</p>
                #         </div>
                #     """,
                # },
                json={
                    "from": "Innocoda Team <onboarding@resend.dev>",
                    "to": "innocoda.team@gmail.com",
                    # This specifically tells Gmail who the message is REALLY from
                    "reply_to": getattr(support_instance, 'email', 'innocoda.team@gmail.com'),
                    "subject": f"Vision Support Message from {support_instance.name}",
                    "html": f"""
                    <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
                        <h2 style="color: #7C53C5; border-bottom: 2px solid #eee; padding-bottom: 10px;">🚀 New Support Logged</h2>
                        
                        <p><strong>Supporter Name:</strong> {support_instance.name}</p>
                        <p><strong>Email Address:</strong> <a href="mailto:{getattr(support_instance, 'email', '')}">{getattr(support_instance, 'email', 'Not provided')}</a></p>
                        <p><strong>Phone Number:</strong> {getattr(support_instance, 'phone', 'Not provided')}</p>
                        <p><strong>Intent Amount:</strong> <span style="color: #2D3748; font-weight: bold;">{formatted_amount} NGN</span></p>
                        
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                        
                        <p><strong>Message:</strong></p>
                        <blockquote style="background: #f7fafc; padding: 15px; border-left: 5px solid #7C53C5; font-style: italic;">
                            {support_instance.message or 'No additional details provided.'}
                        </blockquote>
                        
                        <footer style="margin-top: 20px; font-size: 0.8rem; color: #a0aec0;">
                            Sent via Innocoda Support Engine
                        </footer>
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
