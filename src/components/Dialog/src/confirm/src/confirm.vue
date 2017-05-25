<template>
	<transition name="fade">
		<div v-if='isHide' :class='maskCls'>
			<div :class='confirmCls'>
				<div :class='confirmHeadCls'>
					<div :class='confirmTitleCls'>{{ title }}</div>
					<span 
						:class="confirmCloseIconCls"
						@click='closeConfirm'>&times;</span>
				</div>

				<div :class='confirmContentCls'>
					<span :class='confirmIconCls'></span>
					<div :class='confirmTipsCls' v-text='msg'></div>
				</div>
				
				<div :class='confirmFooterCls'>
					<dr-button 
						type='danger'
						@click.native='cancelConfirm'>
						{{ cancelTxt }}
					</dr-button>
					<dr-button 
						type='info'
						@click.native='okConfirm'>
						{{ okTxt }}
					</dr-button>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import drButton from '@/components/Button/src/button.vue';

	export default {
		name: 'drDialogConfirm',
		props: {
			title: {
				type: String
			},
			msg: {
				type: String
			},
			okTxt: {
				type: String
			},
			cancelTxt: {
				type: String
			},
			okFn: {
				type: Function
			},
			cancelFn: {
				type: Function
			},
			perfixCls: {
        type: String
      }
		},
		data() {
			return {
				isHide: false
			}
		},
		computed: {
			maskCls() {
				return [
					`${this.perfixCls}dialog__mask`
				];
			},
			confirmCls() {
				return [
					`${this.perfixCls}dialog__modal`
				];
			},
			confirmHeadCls() {
				return [
					`${this.perfixCls}dialog__modal-head`
				];
			},
			confirmTitleCls() {
				return [
					`${this.perfixCls}dialog__modal-title`
				];
			},
			confirmCloseIconCls() {
				return [
					`${this.perfixCls}dialog__modal-icon`
				];
			},
			confirmContentCls() {
				return [
					`${this.perfixCls}dialog__modal-content`
				];
			},
			confirmIconCls() {
				return [
					`${this.perfixCls}dialog__modal-content-icon`,
					'dr-icon-exclamation-circle'
				];
			},
			confirmTipsCls() {
				return [
					`${this.perfixCls}dialog__modal-tips`
				];
			},
			confirmFooterCls() {
				return [
					`${this.perfixCls}dialog__modal-footer`
				];
			}
			
		},
		mounted() {
			this.isHide = true;
		},
		components: {
			drButton
		}
	}
</script>