from django.urls import path
from .views import contact_api, support_api

urlpatterns = [
    path('api/contact/', contact_api, name='contact_api'),
    path('api/support/', support_api, name='support_api'),

]
