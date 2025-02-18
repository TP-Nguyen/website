import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import { aliases, fa } from "vuetify/iconsets/fa";
import { md } from 'vuetify/iconsets/md'
const vuetify = createVuetify({
     components,
     directives,
     display:{
          // mobileBreakpoint: 'sm',
          thresholds: {
               xs: 0,
               sm: 340,
               md: 540,
               lg: 800,
               xl: 1280,
          },
     },
     theme: {
          defaultTheme: 'dark',
          themes: {
               light: {
                    dark: false,
                    colors: {
                         primary: '#1e90ff',
                         secondary:'#E1E7F5',
                         textPrimary:'#000',
                         textSecondary:'#535353',
                         genre:'D1D1D6',
                         detail:'#F2F2F2',
                         cube:'#FFFFFF',
                         background:'#FAF9F6',
                    }
               },
               dark: {
                    dark: true,
                    colors: {
                         primary: '#1e90ff',
                         secondary: '#44506E',
                         textPrimary:'#FAF9F6',
                         textSecondary:'#D5D5D5',
                         genre:'424242',
                         detail:'#131313',
                         cube:'#2222222',
                         background:'#1c1c1c',
                    }
               }
          }
     },
     icons: {
          defaultSet: 'fa',
          aliases,
          sets: {
               // custom,
            fa,
            md,
          }
        },
})

export default vuetify;