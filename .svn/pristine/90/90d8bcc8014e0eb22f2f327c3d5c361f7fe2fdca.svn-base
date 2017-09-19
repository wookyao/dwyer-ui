<template>
	<div :class='`${this.perfixCls}input__wrap`'>
		<textarea 
			v-if="this.type == 'textarea'"
			ref='input'
			:class='inputCls'
			:value='val'
			:name='name'
			:disabled='disabled'
			:placeholder='placeholder'
			:readonly="readonly"
			:rows='rows'
			@input='changeVal'>			
		</textarea>
		<template v-else>
			<input
				ref='input'
				:class='inputCls'
				:type= 'this.type'
				:value='val'
				:name="name"
				:disabled='disabled'
				:placeholder='placeholder'
				:readonly="readonly"
				@input='changeVal'>

			<span
				v-if='this.clear'
				:class='`${this.perfixCls}input__close`'
				@click.stop='clearVal'>
				&times;
			</span>
			<span
				v-if='showSeePwd'
				:class='seepwdCls'
				@click.stop='seePassword'>
			</span>
		</template>
		
	</div>
</template>

<script>
	import {oneOf} from '@/utils/assist.js';
	export default {
		name: 'drInput',
		props: {
			customCls: {
				type: String
			},
			type: {
				type: String,
				default: 'text',
				validator(val) {
					return oneOf(val, ['text', 'password', 'number', 'textarea']);
				}
			},
			size: {
				type: String,
				validator(val) {
					return oneOf(val, ['large', 'small']);
				}
			},
			clear: {
				type: Boolean
			},
			icon: {
				type: String
			},
			name: {
				type: String
			},
			value: {
				type: String
			},
			disabled: {
				type: Boolean
			},
			placeholder: {
				type: String
			},
			readonly: {
				type: Boolean,
				default: false
			},
			// 仅在type='textarea'时生效
			rows: {
				type: Number
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		},
		data() {
			return {
				val: '',
				showSeePwd: false,
				seepwd: false
			}
		},
		computed: {

			inputCls() {
				let clsList = [
					`${this.perfixCls}input`
				];

				if (this.type !== 'textarea') {
					clsList.push(
						this.size ? `${this.perfixCls}input--${this.size}` : ''
					);
				} else {
					clsList.push(
						`${this.perfixCls}input-textarea`
					);
				}

				clsList.push(
					this.customCls ? this.customCls : ''
				);

				return clsList;
			},
			seepwdCls() {
				let pwdCls = [
					`${this.perfixCls}input__seepwd`
				];

				pwdCls.push(
					this.seepwd ? `${this.perfixCls}icon-eye` : `${this.perfixCls}icon-eye-slash`
				);

				return pwdCls;
			}
		},
		watch: {
			val: function (v, ov) {
				this.$emit('change', v);
			}
		},
		methods: {
			clearVal() {
				this.$refs.input.focus();
				if (this.val == '') return false;
				this.val='';
			},
			seePassword() {
				this.$refs.input.focus();
				this.seepwd = !this.seepwd;

				this.$refs.input.type = this.seepwd ? 'text' : 'password';
			},
			changeVal: function (val) {
				let $input = this.$refs.input;
				this.val = $input.value;
			}
		},
		mounted() {
			this.val = this.value;
			this.showSeePwd = this.type == 'password';
		}
	}
</script>