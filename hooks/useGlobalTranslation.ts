import { useTranslation } from 'react-i18next';

export const useGlobalTranslation = () => {
  const { t } = useTranslation();
  (window as any).t = t;
  return { t };
};