import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    //'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    'X-RapidAPI-Key': '08a0ba17d2mshb95d62d7437388dp175ac5jsn23012967c0ad',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}&apikey=08a0ba17d2mshb95d62d7437388dp175ac5jsn23012967c0ad`);

  return data;
};