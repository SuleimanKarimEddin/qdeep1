"use client";

import { create } from 'zustand';
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from '../utils/localStorage';
import { LocalStorageEnum } from '../enums/LocalStorage';
import { AuthStore, LoginData, RegisterData, User } from '../types/auth';

const useAuthState = create<AuthStore>((set) => {
  // Helper function to get initial values only on the client side
  const getInitialValue = <T>(key: LocalStorageEnum): T | null => {
    if (typeof window !== "undefined") {
      return getLocalStorage<T>(key);
    }
    return null;
  };

  // Initial values for the store
  const initialUser = getInitialValue<User>(LocalStorageEnum.USER_KEY);
  const initialGuest = getInitialValue<any>(LocalStorageEnum.GUEST_KEY);
  const initialToken = getInitialValue<string>(LocalStorageEnum.TOKEN_KEY);

  return {
    isAuthenticated: !!initialToken,
    token: initialToken,
    user: initialUser,
    guest: initialGuest,

    // Method to handle user login
    login: async (data: LoginData) => {
      if (typeof window !== "undefined") {
        setLocalStorage(LocalStorageEnum.TOKEN_KEY, data.token);
        setLocalStorage(LocalStorageEnum.USER_KEY, data.user);
      }

      set(() => ({
        isAuthenticated: true,
        token: data.token,
        user: data.user,
      }));
    },

    // Method to set the guest state and store it in localStorage
    setGuest: (newGuest: any) => {
      if (typeof window !== "undefined") {
        setLocalStorage(LocalStorageEnum.GUEST_KEY, newGuest.guest);
      }
      set({ guest: newGuest });
    },

    // Method to handle user registration
    register: async (data: RegisterData) => {
      if (typeof window !== "undefined") {
        setLocalStorage(LocalStorageEnum.TOKEN_KEY, data.token);
        setLocalStorage(LocalStorageEnum.USER_KEY, data.user);
      }

      set({
        user: data.user,
        isAuthenticated: true,
        token: data.token,
      });
    },

    // Method to handle user logout
    logout: async () => {
      if (typeof window !== "undefined") {
        clearLocalStorage(LocalStorageEnum.TOKEN_KEY);
        clearLocalStorage(LocalStorageEnum.USER_KEY);
      }

      set(() => ({
        isAuthenticated: false,
        token: null,
        user: null,
        guest: null,
      }));
    },
  };
});

export default useAuthState;
