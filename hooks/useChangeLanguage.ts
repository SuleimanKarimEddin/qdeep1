import { useState, useLayoutEffect, useCallback } from 'react';
import { setLanguageDirection } from '../utils/setLanguageDirection';
import { LocalStorageEnum } from '../enums/LocalStorage';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import ar from '../../../assets/language/ar.svg';
import en from '../../../assets/language/en.svg';

export const useChangeLanguage = () => {
  

  return {  };
};

export const languageOptions = [
  { code: 'ar', icon: ar, label: 'Arabic' },
  { code: 'en', icon: en, label: 'English' },
];
