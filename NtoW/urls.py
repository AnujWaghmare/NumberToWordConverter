from django.urls import path
from .views import api_root, convert_api

urlpatterns = [
    # The root of the API, providing a welcome message: /api/
    path('', api_root, name='api_root'),

    # The endpoint for the conversion functionality: /api/convert/
    path('convert/', convert_api, name='convert_api'),
]