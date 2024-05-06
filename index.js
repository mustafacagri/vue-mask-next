import MaskInput from "./MaskInput.vue";

const install = (app) => {
  app.component("MaskInput", MaskInput);
};

export default {
  install,
};

export { MaskInput };
