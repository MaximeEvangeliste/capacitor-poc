import { i18n } from '@lingui/core';
import { en, fr } from 'make-plural/plurals';
import { I18nProvider as BaseI18nProvider } from '@lingui/react';
import { useEffect } from 'react';

const plurals = {
  en,
  fr,
};

export type SupportedLocales = 'fr' | 'en';

export const DEFAULT_LOCALE = 'fr';

const loadCatalog = async (locale: SupportedLocales) => {
  const { messages } = (await import(`@lingui/loader!locales/${locale}/messages.po`)).default;
  return messages;
};

export const activateLocale = async (locale: SupportedLocales = DEFAULT_LOCALE) => {
  i18n.loadLocaleData(locale, { plurals: plurals[locale] });

  const messages = await loadCatalog(locale);
  i18n.load(locale, messages);
  i18n.activate(locale);
  return i18n;
};

type I18nProviderProps = {
  locale: SupportedLocales;
};

export const I18nProvider: React.FC<I18nProviderProps> = ({ children, locale }) => {
  useEffect(() => {
    activateLocale(locale);
  }, [locale]);

  return <BaseI18nProvider i18n={i18n}>{children}</BaseI18nProvider>;
};
