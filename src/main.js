import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  refs,
  showLoader,
} from './js/render-functions';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ data: { hits: images } }) => {
      if (images.length > 0) {
        createGallery(images);
      } else {
        showError(
          `Sorry, there are no images matching your ${query}. Please try again!`
        );
      }
    })
    .catch(error => console.log(error))
    .finally(() => hideLoader());
}

function showError(message) {
  iziToast.error({
    position: 'topRight',
    message,
  });
}
