
import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
import VueSweetalert2 from 'vue-sweetalert2';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueApexCharts from "../components/UI/apexcharts.vue";
import DropZone from "dropzone-vue";
import 'dropzone-vue/dist/dropzone-vue.common.css';
import { Tooltip, Popover } from "bootstrap/dist/js/bootstrap.js";
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import VueMultiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css";
import { VueEditor } from "vue3-editor";
import { Countdown } from 'vue3-flip-countdown'
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
// import Particles from "vue3-particles";'
// alert('zzzz"zz')
export default defineNuxtPlugin((nuxt) => {
  // const vuetify = createVuetify({
  //   ssr: false,
  //   // components,
  //   // directives,
  //   theme: {
  //     themes: {
  //       colors: {
  //
  //       }
  //     }
  //   }
  // });
  // nuxt.vueApp.use(vuetify);
  nuxt.vueApp.use(VueSweetalert2);
  nuxt.vueApp.component("EasyDataTable", Vue3EasyDataTable);
  nuxt.vueApp.use(Vue3ColorPicker);
  nuxt.vueApp.use(DropZone);
  nuxt.vueApp.component("apexchart", VueApexCharts);
  nuxt.vueApp.component("Datepicker", Datepicker);
  nuxt.vueApp.component("Countdown", Countdown);
  nuxt.vueApp.component("VueMultiselect", VueMultiselect);
  nuxt.vueApp.component("VueEditor", VueEditor);
  nuxt.vueApp.provide("Popover", Popover);
  nuxt.vueApp.provide("Tooltip", Tooltip);
});
