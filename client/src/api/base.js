import axios from 'axios';

const api = axios.create({
      baseURL: 'https://jobtelegraph.herokuapp.com/',
      timeout: 20000
   });

export default api;