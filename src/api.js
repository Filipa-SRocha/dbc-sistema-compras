import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dbcompras.herokuapp.com'
})

export {api};