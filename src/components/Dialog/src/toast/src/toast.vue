<template>
	<div :class='wrapCls'>
		<div :class='innerCls'>
			<span :class='iconCls'></span>
			{{ msg }}
		</div>
	</div>
</template>
<script>
	export default {
		name: 'drToast',
		props: {
			type: {
				type: String
			},
			msg: {
				type: String
			},
			perfixCls: {
				type: String
			}
		},
		computed: {
			wrapCls() {
				return [
					`${this.perfixCls}dialog__toast`
				];
			},
			innerCls() {
				return [
					`${this.perfixCls}dialog__toast-inner`
				];
			},
			iconCls() {
				let iconList = {
					'success': 'dr-icon-check-circle',
					'error': 'dr-icon-times-circle',
					'warning': 'exclamation-circle'
				}

				return [
					this.type === 'normal' ? '' : 
						`${this.perfixCls}dialog__toast--${this.type}`,
					iconList[this.type]
				];
			}
		}
	}
</script>