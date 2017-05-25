import Radio from './src/radio.vue';
import RadioGroup from './src/radio-group.vue';

Radio.install = (Vue) => {
  Vue.component(Radio.name, Radio);
};

RadioGroup.install = (Vue) => {
  Vue.component(RadioGroup.name, RadioGroup);
};

export {
  Radio,
  RadioGroup
};