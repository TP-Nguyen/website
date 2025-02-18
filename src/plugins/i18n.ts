import * as en from '../locales/en.json'
import * as de from '../locales/de.json'

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  messages:{
    en,
    de
  }, 
  fallbackLocale:'default'
})

export default i18n;

