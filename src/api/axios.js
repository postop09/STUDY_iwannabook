import axios from 'axios';

const REST_API_KEY = '08505891f646ebf6fd3a0f3fd539c8ab';
const instance = axios.create({
  baseURL: `https://dapi.kakao.com/v3/search/book`,
  headers: {
    "Authorization" : `KakaoAK ${REST_API_KEY}`,
  },
});

export default instance;