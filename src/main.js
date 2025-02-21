import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const perPage = 15;
let page = 1;
let query = '';
let totalHits = 0;
let loadMoreBtn = null;

let lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search term!',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: '#fafafb',
      iconUrl:
        'https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg',
    });
    return;
  }

  clearGallery();
  page = 1;
  totalHits = 0;
  if (loadMoreBtn) {
    loadMoreBtn.remove();
    loadMoreBtn = null;
  }

  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, page, perPage);

    if (data.hits.length === 0) {
      loader.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but no images match your search.",
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        iconUrl:
          'https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg',
      });
      return;
    }

    totalHits = data.totalHits;
    renderImages(data.hits);
    lightbox.refresh();

    loader.style.display = 'none';

    if (totalHits > page * perPage) {
      createLoadMoreButton();
    }
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong!',
      position: 'topRight',
    });
  }
});

function createLoadMoreButton() {
  loadMoreBtn = document.createElement('button');
  loadMoreBtn.textContent = 'Load more';
  loadMoreBtn.classList.add('load-more-btn');
  document.body.append(loadMoreBtn);

  loadMoreBtn.addEventListener('click', async () => {
    page += 1;

    loader.style.display = 'block';

    try {
      const data = await fetchImages(query, page, perPage);
      renderImages(data.hits);
      lightbox.refresh();

      loader.style.display = 'none';

      scrollPage();

      if (page * perPage >= totalHits) {
        loadMoreBtn.remove();
        loadMoreBtn = null;
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          iconUrl:
            'https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg',
        });
      }
    } catch (error) {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
      });
    }
  });
}

function scrollPage() {
  const card = document.querySelector('.image-card');
  if (!card) return;

  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 3,
    behavior: 'smooth',
  });
}
