<template>
	<span
		:class='classObj'
		@click.stop='toggle'>
		
	</span>
</template>

<script>
	import {oneOf} from '@/utils/assist.js';

	export default {
		name: 'drSwitch',
		props: {
			type: {
				type: String,
				default: 'info',
				validator(val) {
					return oneOf(val, ['info', 'success', 'warning', 'danger']);
				}
			},
			size: {
				type: String,
				default: 'normal',
				validator(val) {
					return oneOf(val, ['large', 'normal', 'small', 'mini']);
				}
			},
			checked: {
				type: Boolean
			},
			disabled: {
				type: Boolean
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		},
		data() {
			return {
				isChecked: false
			}
		},
		computed: {
			classObj() {
				return [
					`${this.perfixCls}switch`,
					this.size != 'normal' ? `${this.perfixCls}switch--${this.size}`: '',
					`${this.perfixCls}switch--${this.type}`,
					{
						[`${this.perfixCls}switch--disabled`]: this.disabled,
						[`${this.perfixCls}switch--checked`]: this.isChecked
					}
				];
			}
		},
		methods: {
			toggle() {
				this.isChecked = !this.isChecked;
				this.$emit('change', this.isChecked);
			}
		},
		mounted() {
			this.isChecked = !!this.checked;
		}
	}
</script>