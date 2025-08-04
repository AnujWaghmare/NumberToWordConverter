import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000';

/**
 * Converts a number to words using the backend API.
 * @param {string} number - The number to convert.
 * @param {string} language - The target language ('english', 'hindi', 'marathi').
 * @returns {Promise<object>} - The JSON response from the API.
 */
export const convertNumberToWords = async (number, language) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/convert/`, {
      number,
      language,
    });
    // axios returns the data directly in the `data` property
    return response.data;
  } catch (error) {
    // axios wraps API errors in a specific structure
    if (error.response && error.response.data && error.response.data.error) {
      // Throw an error with the specific message from the backend
      throw new Error(error.response.data.error);
    }
    // Handle network errors or other unexpected issues
    throw new Error(error.message || 'An unknown network error occurred.');
  }
};