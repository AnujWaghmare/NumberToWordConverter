# -*- coding: utf-8 -*-

# This dictionary holds all the data and logic for each language.
# The 'places' lists have been extended to support numbers up to 10^28.
LANGUAGES = {
    'english': {
        'system': 'western',
        'zero': 'zero',
        'ones': [
            "", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ",
            "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ",
            "nineteen "
        ],
        'tens': ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "],
        # Extended place values for the Western system (up to Octillion)
        'places': ["", "thousand ", "million ", "billion ", "trillion ", "quadrillion ", "quintillion ", "sextillion ",
                   "septillion ", "octillion "],
        'hundred': 'hundred '
    },
    'hindi': {
        'system': 'indian',
        'zero': 'शून्य',
        'ones': [
            "", "एक ", "दो ", "तीन ", "चार ", "पाँच ", "छह ", "सात ", "आठ ", "नौ ", "दस ",
            "ग्यारह ", "बारह ", "तेरह ", "चौदह ", "पंद्रह ", "सोलह ", "सत्रह ", "अठारह ", "उन्नीस ", "बीस ",
            "इक्कीस ", "बाईस ", "तेईस ", "चौबीस ", "पच्चीस ", "छब्बीस ", "सत्ताईस ", "अट्ठाईस ", "उनतीस ", "तीस ",
            "इकतीस ", "बत्तीस ", "तैंतीस ", "चौंतीस ", "पैंतीस ", "छत्तीस ", "सैंतीस ", "अड़तीस ", "उनतालीस ", "चालीस ",
            "इकतालीस ", "बयालीस ", "तैंतालीस ", "चौवालीस ", "पैंतालीस ", "छियालीस ", "सैंतालीस ", "अड़तालीस ", "उनचास ",
            "पचास ",
            "इक्यावन ", "बावन ", "तिरपन ", "चौवन ", "पचपन ", "छप्पन ", "सत्तावन ", "अट्ठावन ", "उनसठ ", "साठ ",
            "इकसठ ", "बासठ ", "तिरसठ ", "चौंसठ ", "पैंसठ ", "छियासठ ", "सड़सठ ", "अड़सठ ", "उनहत्तर ", "सत्तर ",
            "इकहत्तर ", "बहत्तर ", "तिहत्तर ", "चौहत्तर ", "पचहत्तर ", "छिहत्तर ", "सतहत्तर ", "अठहत्तर ", "उनासी ",
            "अस्सी ",
            "इक्यासी ", "बयासी ", "तिरासी ", "चौरासी ", "पचासी ", "छियासी ", "सत्तासी ", "अट्ठासी ", "नवासी ", "नब्बे ",
            "इक्यानबे ", "बानबे ", "तिरानबे ", "चौरानबे ", "पंचानबे ", "छियानबे ", "सत्तानबे ", "अट्ठानबे ",
            "निन्यानबे "
        ],
        # Extended place values for the Indian system (up to Parardh)
        'places': ["", "हज़ार ", "लाख ", "करोड़ ", "अरब ", "खरब ", "नील ", "पद्म ", "शंख ", "महाशंख ", "अंक ", "जल्द ",
                   "मध्य ", "परार्ध "],
        'hundred': 'सौ '
    },
    'marathi': {
        'system': 'indian',
        'zero': 'शून्य',
        'ones': [
            "", "एक ", "दोन ", "तीन ", "चार ", "पाच ", "सहा ", "सात ", "आठ ", "नऊ ", "दहा ",
            "अकरा ", "बारा ", "तेरा ", "चौदा ", "पंधरा ", "सोळा ", "सतरा ", "अठरा ", "एकोणीस ", "वीस ",
            "एकवीस ", "बावीस ", "तेवीस ", "चोवीस ", "पंचवीस ", "सव्वीस ", "सत्तावीस ", "अठ्ठावीस ", "एकोणतीस ", "तीस ",
            "एकतीस ", "बत्तीस ", "तेहतीस ", "चौंतीस ", "पस्तीस ", "छत्तीस ", "सदतीस ", "अडतीस ", "एकोणचाळीस ", "चाळीस ",
            "एकेचाळीस ", "बेचाळीस ", "त्रेचाळीस ", "चव्वेचाळीस ", "पंचेचाळीस ", "सेहेचाळीस ", "सत्तेचाळीस ",
            "अठ्ठेचाळीस ", "एकोणपन्नास ", "पन्नास ",
            "एक्कावन्न ", "बावन्न ", "त्रेपन ", "चोपन्न ", "पंचावन्न ", "छप्पन्न ", "सत्तावन्न ", "अठ्ठावन्न ",
            "एकोणसाठ ", "साठ ",
            "एकसष्ठ ", "बासष्ठ ", "त्रेसष्ठ ", "चौसष्ठ ", "पासष्ठ ", "सहासष्ठ ", "सदुसष्ठ ", "अडुसष्ठ ", "एकोणसत्तर ",
            "सत्तर ",
            "एक्काहत्तर ", "बाहत्तर ", "त्र्याहत्तर ", "चौऱ्याहत्तर ", "पंचाहत्तर ", "शहात्तर ", "सत्याहत्तर ",
            "अठ्ठ्याहत्तर ", "एकोणऐंशी ", "ऐंशी ",
            "एक्क्याऐंशी ", "ब्याऐंशी ", "त्र्याऐंशी ", "चौऱ्याऐंशी ", "पंच्याऐंशी ", "शहाऐंशी ", "सत्त्याऐंशी ",
            "अठ्ठ्याऐंशी ", "एकोणनव्वद ", "नव्वद ",
            "एक्क्याण्णव ", "ब्याण्णव ", "त्र्याण्णव ", "चौऱ्याण्णव ", "पंच्याण्णव ", "शहाण्णव ", "सत्त्याण्णव ",
            "अठ्ठ्याण्णव ", "नव्याण्णव "
        ],
        # Extended place values for the Indian system (up to Parardh)
        'places': ["", "हजार ", "लाख ", "कोटी ", "अब्ज ", "खर्व ", "निखर्व ", "पद्म ", "शंख ", "महाशंख ", "अंक ",
                   "जल्द ", "मध्य ", "परार्ध "],
        'hundred': 'शे '
    }
}


def convert_chunk_western(n, lang_data):
    """Helper function to convert a 2-digit number (1-99) for the Western system."""
    if n > 19:
        return lang_data['tens'][n // 10] + lang_data['ones'][n % 10]
    else:
        return lang_data['ones'][n]


def convert_indian_system(n, lang_data):
    """
    Handles conversion for the Indian numbering system (Lakh, Crore, etc.)
    This uses a robust, looped logic that now supports the extended place values.
    """
    # First, handle the last three digits (up to 999)
    last_three = n % 1000
    n //= 1000

    # Process the hundreds place for the last three digits
    hundreds_digit = last_three // 100
    last_two_digits = last_three % 100

    res = ""
    if hundreds_digit > 0:
        # Special handling for "एकशे" in Marathi
        if lang_data['hundred'] == 'शे ' and hundreds_digit == 1:
            res += "एकशे "
        else:
            res += lang_data['ones'][hundreds_digit] + lang_data['hundred']

    # Process the last two digits
    if last_two_digits > 0:
        res += lang_data['ones'][last_two_digits]

    # Now, loop through the remaining number in chunks of two digits
    place_index = 1
    while n > 0:
        chunk = n % 100
        if chunk > 0:
            if place_index < len(lang_data['places']):
                chunk_words = lang_data['ones'][chunk] + lang_data['places'][place_index]
                res = chunk_words + res
            else:
                # This case should now be extremely rare
                res = lang_data['ones'][chunk] + "[Number Too Large] " + res
        n //= 100
        place_index += 1

    return res


def convert_western_system(num_str, lang_data):
    """Handles conversion for the Western numbering system (Thousand, Million, etc.)."""
    output = ""
    length = len(num_str)
    # Handle numbers larger than the defined places gracefully
    if length > len(lang_data['places']) * 3:
        return "Number is too large to convert."

    groups = (length + 2) // 3
    num_str = num_str.zfill(groups * 3)

    for i in range(groups):
        chunk = int(num_str[i * 3:(i + 1) * 3])
        group_name_index = groups - 1 - i

        if chunk != 0:
            hundreds = chunk // 100
            tens_and_ones = chunk % 100

            if hundreds > 0:
                output += lang_data['ones'][hundreds] + lang_data['hundred']
                if tens_and_ones > 0:
                    output += "and "

            if tens_and_ones > 0:
                output += convert_chunk_western(tens_and_ones, lang_data)

            if group_name_index > 0 and group_name_index < len(lang_data['places']):
                output += lang_data['places'][group_name_index]

    return output


def convert_to_words(num_str, lang_data):
    """
    Main dispatcher function. Converts a number string to words based on the language.
    """
    if not num_str.isdigit():
        return "Invalid input. Please enter numbers only."

    if num_str == "0":
        return lang_data['zero']

    # Check if number is too large for the Indian system (beyond 10^29 - 1)
    if lang_data['system'] == 'indian' and len(num_str) > (len(lang_data['places']) - 1) * 2 + 3:
        return "Number is too large to convert."

    n = int(num_str)

    if lang_data['system'] == 'indian':
        return convert_indian_system(n, lang_data)
    elif lang_data['system'] == 'western':
        return convert_western_system(num_str, lang_data)
    else:
        return "Error: Unknown numbering system."