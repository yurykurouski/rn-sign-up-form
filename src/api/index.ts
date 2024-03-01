import axios from 'axios';
import { TRegisterUserData } from 'types';
export const BASE_URL = 'https://stage.valetax.com';

const API_GET_COUNTRY_SNAP = '/api.guest.country.getSnapshot';
export const API_GET_COUNTRY_LOGO = '/api.guest.country.getLogo?id=';
export const API_REGISTER = '/api.user.user.register';

const apiInstance = axios.create({ baseURL: BASE_URL });

export const getCountrySnapshot = async () => {
  try {
    const response = await apiInstance.get(API_GET_COUNTRY_SNAP);

    return response;
  } catch (err) {
    console.error(err);
  }
};

export const api_userRegister = async (data: TRegisterUserData) => {
  try {
    const response = await apiInstance.post(API_REGISTER, data);

    return response;
  } catch (err) {
    console.error(err);
  }
};
