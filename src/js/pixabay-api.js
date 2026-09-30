import axios from 'axios';

const API_KEY = '16575326-2aaf0836bf0e7c9f61deb233c';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  }).then(({ data }) => data);
}
