import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

Button.install = function(Vue) {
	Vue.componnet(Button.name, Button);
};

ButtonGroup.install = function(Vue) {
	Vue.componnet(ButtonGroup.name, ButtonGroup);
};

export {
	Button,
	ButtonGroup
};