// services/blogService.js
import axios from 'axios';
const API_URL = 'http://localhost:8800'; // Back-end API URL

export default {
  getHomeService() {
    return axios.get(`${API_URL}/`);
  }
};
