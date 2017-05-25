<template>
  <div
    :class='classObj'
    :style='style'>
    <slot></slot>
  </div>
</template>

<script>
  import {oneOf} from '@/utils/assist.js';

  export default {
    name: 'drRow',
    props: {
      gutter: {
        type: Number
      },
      type: {
        type: String,
        default: '' // 可选 flex
      },
      justify: {
        type: String,
        default: 'start',
        validator (val) {
          return oneOf(val, ['start', 'end', 'center', 'space-around', 'space-between']);
        }
      },
      perfixCls: {
        type: String,
        default: 'dr-'
      }
    },
    computed: {
      classObj() {
        let
          flexCls =  this.type == 'flex' ? `${this.perfixCls}row--flex`: '',
          justifyCls = this.type == 'flex' && this.justify !== 'start' ?
            `${this.perfixCls}row--justify-${this.justify}` : '';

        return [
          `${this.perfixCls}row`,
          flexCls,
          justifyCls
        ];
      },
      style() {
        let ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }

        return ret;
      }
    }
  }
</script>