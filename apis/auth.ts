import { useAddMutation, useDeleteMutation, useGetQuery, useUpdateMutation } from "./helpers";

// api custom hooks are auto imported
const API = {
 LOGIN: '/auth/login',
 REGISTER: '/auth/register',
 LOGOUT: '/auth/logout',
 USER: '/user',
 CSV:'/uploadCsv',
 PAYMENTS:'/payment/checkout',
 FIELS:'/getAllFiles'

};

const KEY = 'example';

export const useGetUser = (params?: any, options?: any) =>
  useGetQuery("user", API.USER, params, options);

export const useGetFiles = (params?: any, options?: any) =>
  useGetQuery('files', API.FIELS, params, options);


export const useAddRegister = () => useAddMutation(KEY, API.REGISTER);
export const useAddLogin = () => useAddMutation(KEY, API.LOGIN);
export const useAddLogout = () => useAddMutation('logout', API.LOGOUT);

export const useUploadCsv = () => useAddMutation('csv', API.CSV);

export const useAddPayments = () => useAddMutation('payment', API.PAYMENTS);
