import axios from 'axios';
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '40246120-635cf6b51d07f62c2e22f19b9';

export const fetchImage = async params => {
  const { data } = await axios.get(`/api/`, {
    params: {
      key: API_KEY,
      q: '',
      page: 1,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      ...params,
    },
  });
  return data;
};
