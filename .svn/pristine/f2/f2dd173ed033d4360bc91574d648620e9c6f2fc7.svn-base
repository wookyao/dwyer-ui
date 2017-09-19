<template>
	<div
		:class='classObj'>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'drButtonGroup',
		props: {
			round: {
				type: Boolean,
				default: false
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		},
		computed: {
			classObj() {
				let clsList = [
					`${this.perfixCls}btn__group`
				];

				clsList.push(
					this.round ? `${this.perfixCls}btn__group--round` : ''
				);
				return clsList;
			}
		}
	}
</script>