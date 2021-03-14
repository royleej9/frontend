import Vue from 'vue';

import 'quasar/dist/quasar.css';
import 'quasar/dist/quasar.ie.polyfills';
import '@quasar/extras/material-icons/material-icons.css';
import {
  Quasar,
  QPageContainer,
  QPage,
  QCard,
  QCardSection,
  QCardActions
} from 'quasar';

Vue.use(Quasar, {
  components: {
    QPageContainer,
    QPage,
    QCard,
    QCardSection,
    QCardActions
  }
});
