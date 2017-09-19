<template>
  <button
    :class='classObj'
    :type='nativeType'>
    <dr-icon :type='icon' v-if='icon'></dr-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import {oneOf} from '@/utils/assist.js';
  import drIcon from '../../Icon/';

  export default {
    name: 'drButton',
    components: {
      drIcon
    },
    props: {
      type: {
        type: String
      },
      size: {
        type: String,
        validator (val) {
          return oneOf(val, ['large', 'small', 'mini']);
        }
      },
      nativeType: {
        type: String,
        default: 'button', // button/reset/submit
        validator (val) {
          return oneOf(val, ['button', 'reset', 'submit']);
        }
      },
      icon: {
        type: String
      },
      loading: {
        type: Boolean
      },
      plain: {
        type: Boolean
      },
      disabled: {
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
          `${this.perfixCls}btn`
        ];

        if (this.type && !this.disabled){
          clsList.push(`${this.perfixCls}btn--${this.type}`);
        }
        if (this.size) {
          clsList.push(`${this.perfixCls}btn--${this.size}`);
        }
        if (this.plain) {
          clsList.push(`${this.perfixCls}btn--plain`);
        }
        if (this.disabled) {
          clsList.push(`${this.perfixCls}btn--disabled`);
        }


        return clsList;
      }
    }
  }
</script>