import './styles/main.scss';
import GlobalWrapper from './histoire/GlobalWrapper.vue'
import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(GlobalWrapper)
})
