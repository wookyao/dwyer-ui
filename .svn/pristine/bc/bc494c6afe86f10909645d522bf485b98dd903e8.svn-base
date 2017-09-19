import Vue from 'vue';
import {
	extend
} from '@/utils/assist.js';


const ConfirmConstructor = Vue.extend(require('./src/confirm.vue'));

const instance = new ConfirmConstructor({
	el: document.createElement('div')
});

ConfirmConstructor.prototype.closeConfirm = function() {

	const el = instance.$el;
	el.className += " dialog-hide";
	setTimeout(function() {
		el.className = el.className.split(' ')[0];
		el.parentNode && el.parentNode.removeChild(el);
	}, 500);
};

ConfirmConstructor.prototype.okConfirm = function() {
	this.closeConfirm();

	(this.okFn && typeof this.okFn == 'function') && this.okFn();
};

ConfirmConstructor.prototype.cancelConfirm = function() {
	this.closeConfirm();

	(this.cancelFn && typeof this.cancelFn == 'function') && this.cancelFn();
};


const Confirm = (options = {}) => {
	let sets = extend({
		title: '提示',
		msg: '',
		okTxt: '我知道了',
		cancelTxt: '取消',
		perfixCls: 'dr-',
		okFn: function() {},
		cancelFn: function() {}
	}, options)

	instance.title = sets.title;
	instance.msg = sets.msg;
	instance.okTxt = sets.okTxt;
	instance.cancelTxt = sets.cancelTxt;
	instance.perfixCls = sets.perfixCls;
	instance.okFn = sets.okFn;
	instance.cancelFn = sets.cancelFn;

	document.body.appendChild(instance.$el);

};

export default Confirm;