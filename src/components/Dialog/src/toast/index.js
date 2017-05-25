import Vue from 'vue';
import {
	extend
} from '@/utils/assist.js';

const ToastConstructor = Vue.extend(require('./src/toast.vue'));

const instance = new ToastConstructor({
	el: document.createElement('div')
});


const Toast = (options = {}) => {
	let sets = extend({
		type: 'normal',
		msg: '',
		perfixCls: 'dr-'
	}, options)

	instance.type = sets.type;
	instance.msg = sets.msg;
	instance.perfixCls = sets.perfixCls;

	document.body.appendChild(instance.$el);



};

export default Toast;