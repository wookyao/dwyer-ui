<template>
	<label
		:class='classWrap'
		@click.stop='change'>
		<span
			:class='radioClass'>
			<input
				type="radio"
				:class='inputClass'
				:disabled='disabled'
				:checked='isChecked'
				:value='value'
				@click.stop='()=>{}'>
		</span><slot>{{value}}</slot>
	</label>
</template>

<script>

	export default {
		name: 'drRadio',
		props: {
			value: {
				type: [String, Number]
			},
			disabled: {
				type: Boolean,
				default: false
			},
			checked: {
				type: Boolean
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		},
		data() {
			return {
				isChecked: false,
				currentValue: ''
			}
		},
		computed: {
			classWrap() {
				let clsList = [
					`${this.perfixCls}radio`,
					{
						[`${this.perfixCls}radio--disabled`]: this.disabled,
						[`${this.perfixCls}radio--checked`]: this.isChecked
					}
				];

				return clsList;
			},
			radioClass() {
				return `${this.perfixCls}radio__icon`
			},
			inputClass() {
				return `${this.perfixCls}radio__input`
			}
		},
		watch: {
			checked: function () {
				this.isChecked = this.checked;
			}
		},
		methods: {
			change() {
				if (!!this.isChecked || this.disabled) return false;
				this.isChecked = !this.isChecked;
				this.updateValue();
				this.$emit('change', this.currentValue);
			},
			updateValue () {
        this.currentValue = this.value;
      }
		},
		created() {
			this.isChecked = !!this.checked;
		}
	}
</script>