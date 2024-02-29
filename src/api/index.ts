import axios from 'axios';
export const BASE_URL = 'https://stage.valetax.com';

const API_GET_COUNTRY_SNAP = '/api.guest.country.getSnapshot';
export const API_GET_COUNTRY_LOGO = '/api.guest.country.getLogo?id=';

const apiInstance = axios.create({ baseURL: BASE_URL });

export const getCountrySnapshot = async () => {
  const response = await apiInstance.get(API_GET_COUNTRY_SNAP);

  return response;
};
