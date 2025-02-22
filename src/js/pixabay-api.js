import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '48901919-31fb8722d9302fb6f0fb2505f';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page, perPage = 15) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    iziToast.error({
      message: `Error: ${error.message}`,
      position: 'topRight',
      iconUrl:
        'https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg',
    });
  }
}
