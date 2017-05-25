<template>
	<span :class='classObj' ref='badge'>
		<slot></slot>

		<sup v-if='dot' :class='dotClass' :style='style'></sup>
		<sup v-else :class='countClass' :style='style'>{{ getCount }}</sup>
	</span>
</template>
<script>
	import {checkColor} from '@/utils/assist.js';

	export default {
		name: 'drBadge',
		props: {
			count: {
				type: [String, Number],
				default: 0
			},
			dot: {
				type: Boolean,
				default: false
			},
			overflowCount: {
				type: Number,
				default: 99
			},
			color: {
				type: String,
				default: '#f30',
				validator(val) {
					return checkColor(val);
				}
			},
			className: {
				type: String
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		},
		computed: {
			classObj() {
				return [
					`${this.perfixCls}badge`
				];
			},
			dotClass() {
				return [
					`${this.perfixCls}badge__dot`
				];
			},
			countClass() {
				return [
					`${this.perfixCls}badge__count`,
					{
						[`${this.perfixCls}badge__count--alone`]: this.alone
					},
					this.className ? `${this.className}` : ''
				];
			},
			getCount() {
				return this.count <= +this.overflowCount ? this.count : `+${this.overflowCount}`
			},
			style() {
				return {
					background: this.color
				}
			}
		},
		data() {
			return {
				alone: false,
				currentCount: 0
			};
		},
		mounted() {
			this.alone = this.$refs.badge.children.length === 1;
		}
	}
</script>