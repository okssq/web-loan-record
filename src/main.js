import {createApp} from 'vue'
import {Quasar} from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import quasarIconSet from 'quasar/icon-set/mdi-v6'

// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'



// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})
myApp.mount('#app')