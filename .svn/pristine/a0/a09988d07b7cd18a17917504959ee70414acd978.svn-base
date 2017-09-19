<template>
	<i
		:class="[perfixCls + 'icon-' + type]"
		:style="{fontSize: size, color: color}" >
		<slot></slot>
	</i>
</template>

<script>
	export default {
		name: 'drIcon',
		props: {
			type: {
				type: String
			},
			size: {
				type: String
			},
			color: {
				type: String
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		}
	}
</script>