import json
from django.http import HttpRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_GET

# Import the conversion logic and language data from utils.py
from .utils import convert_to_words, LANGUAGES


@require_GET
def api_root(request: HttpRequest) -> JsonResponse:
    """
    A root view for the API that provides a welcome message and lists available endpoints.
    """
    return JsonResponse({
        'message': 'Welcome to the Number to Word Converter API!',
        'endpoints': {
            'convert': '/api/convert/'
        }
    })


@csrf_exempt
@require_POST
def convert_api(request: HttpRequest) -> JsonResponse:
    """
    API endpoint to convert a number to its word representation.

    This view accepts POST requests with a JSON body containing:
    - "number" (str): The number to convert, as a string of digits.
    - "language" (str): The target language (e.g., 'english', 'hindi').

    Returns:
        JsonResponse: A JSON object with the converted "words" or an "error" message.
    """
    try:
        data = json.loads(request.body)
        number_str = data.get('number')
        lang_key = data.get('language')
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON format. Please provide a valid JSON body.'}, status=400)

    # --- Input Validation ---
    if not all([number_str, lang_key]):
        return JsonResponse({'error': 'Missing "number" or "language" key in request body.'}, status=400)

    if not isinstance(number_str, str) or not number_str.isdigit():
        return JsonResponse({'error': 'The "number" must be a string containing only digits.'}, status=400)

    if lang_key not in LANGUAGES:
        valid_languages = ", ".join(LANGUAGES.keys())
        return JsonResponse({'error': f'Invalid language. Please use one of: {valid_languages}.'}, status=400)

    # --- Conversion Logic ---
    try:
        lang_data = LANGUAGES[lang_key]
        words = convert_to_words(number_str, lang_data).strip()

        # The `convert_to_words` function returns error strings on failure.
        # This check handles those cases gracefully.
        if "too large" in words.lower() or "invalid input" in words.lower():
            return JsonResponse({'error': words}, status=400)

        return JsonResponse({'words': words})
    except Exception:
        # This is a catch-all for any unexpected errors during the conversion process.
        # In a real production environment, you would log this error.
        return JsonResponse({'error': 'An internal server error occurred during conversion.'}, status=500)