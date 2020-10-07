import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  let language = window.navigator.language;
  if (language === 'en-US') {
    language = 'en'
  }
  store.commit("updateLang", language)
  app.i18n = new VueI18n({
    locale: language,
    messages: {
      en: require('~/locales/en.json')
    }
  })
}
