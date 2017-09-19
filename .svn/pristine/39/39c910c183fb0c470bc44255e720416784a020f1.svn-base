import Vue from 'vue';
import {
	extend
} from '@/utils/assist.js';
import {
	move
} from '@/utils/move.js';

const AlertConstructor = Vue.extend(require('./src/alert.vue'));

const instance = new AlertConstructor({
	el: document.createElement('div')
});

AlertConstructor.prototype.closeAlert = function() {

	const el = instance.$el;
	el.className += " dialog-hide";
	setTimeout(function() {
		el.className = el.className.split(' ')[0];
		el.parentNode && el.parentNode.removeChild(el);
	}, 500);

	typeof this.callback == 'function' && this.callback();

};

const Alert = (options = {}) => {
	let sets = extend({
		title: '提示',
		msg: '',
		buttonTxt: '我知道了',
		perfixCls: 'dr-',
		callback: function() {}
	}, options)

	instance.title = sets.title;
	instance.msg = sets.msg;
	instance.buttonTxt = sets.buttonTxt;
	instance.perfixCls = sets.perfixCls;
	instance.callback = sets.callback;

	document.body.appendChild(instance.$el);

};

export default Alert;