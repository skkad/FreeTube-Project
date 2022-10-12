import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// eslint-disable-next-line
// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     //'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     'X-RapidAPI-Key': '08a0ba17d2mshb95d62d7437388dp175ac5jsn23012967c0ad',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   },
// };

const options = {
  // method: 'GET',
  // url: '',
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

//&apikey=08a0ba17d2mshb95d62d7437388dp175ac5jsn23012967c0ad
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);

  return data;
};