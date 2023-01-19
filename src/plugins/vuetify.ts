// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import { aliases, md } from 'vuetify/iconsets/md'
import { mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    ...aliases,
    sets: {
      md,
      mdi
    }
  },
})
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

