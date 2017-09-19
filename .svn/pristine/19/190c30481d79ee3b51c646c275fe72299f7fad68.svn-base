<template>
	<transition name="fade">
		<div
			:class='classObj'
			v-if='visible'>
			<div
				ref='loadingInner'
				:class='classInner'>
				<i class="dr-icon-spinner loading-rotate"></i>
				<p
					:class='classTips'
					v-if='this.tips.length'>{{tips}}</p>
			</div>
		</div>
	</transition>
</template>

<script>
  export default {
    name: 'drLoading',
    props: {
    	visible: {
    		type: Boolean,
    		default: true
    	},
    	fullScreen: {
    		type: Boolean,
    		default: false
    	},
    	tips: {
    		type: String,
    		default: ''
    	},
    	perfixCls: {
    		type: String,
    		default: 'dr-'
    	}
    },
    computed: {

    	classObj() {
    		let 
    			perfixCls = this.perfixCls,
	    		clsList = [
	    			`${perfixCls}loading__mask`
	    		];

	    	this.fullScreen ? clsList.push(`${perfixCls}loading__mask--full`) : '';

	    	return clsList;
    	},
    	classInner() {
    		return [`${this.perfixCls}loading__inner`]
    	},
    	classTips() {
    		return [`${this.perfixCls}loading__tips`]
    	}
    },
    mounted() {
    	let 
    		$inner = this.$refs.loadingInner,
    		iHeight = $inner.offsetHeight;
    	$inner.style.marginTop = `-${iHeight / 2}px`
    }
  }
</script>