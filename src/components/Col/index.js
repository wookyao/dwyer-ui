import Col from './src/Col.vue';

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;