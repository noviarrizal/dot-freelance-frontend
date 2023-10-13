// api/rajaOngkirApi.ts
import axios from 'axios';
import { API_KEY } from '../utils/apiKey';

const instance = axios.create({
  baseURL: 'https://api.rajaongkir.com/starter',
  headers: {
    key: API_KEY,
  },
});

export const getCityList = () => {
  return instance.get('/city');
};
