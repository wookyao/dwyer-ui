<template>
  <transition name="fade">
    <div
      :class="wrapClass"
      v-if='isShow'>

      <i
        :class="iconClass"
        v-if='showIcon'></i>

      <div :class="contentClass">
        <span :class="titleClass" v-text='title'></span>
        <p :class="descClass" v-text='desc' v-if='desc.length'></p>
      </div>

      <i
        :class="closeClass"
        @click.stop='close'></i>

    </div>
  </transition>
</template>

<script>
  import {oneOf} from '@/utils/assist.js';

  export default {
    name: 'drAlert',
    props: {
      type: {
        type: String,
        default: 'info',
        validator (val) {
          return oneOf(val, ['info', 'success', 'warning', 'error']);
        }
      },
      title: {
        type: String
      },
      desc: {
        type: String,
        default: ''
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      closeIcon: {
        type: Boolean,
        default: true
      },
      perfixCls: {
        type: String,
        default: 'dr-'
      }
    },
    data() {
      return {
        iconType: {
          info: 'icon-info-circle',
          success: 'icon-check-circle',
          warning: 'icon-exclamation-circle',
          error: 'icon-times-circle'
        },
        isShow: true
      }
    },
    computed: {
      wrapClass() {
        return [
          this.perfixCls + 'alert',
          this.perfixCls + 'alert--' + this.type
        ];
      },
      iconClass() {
        return [
          `${this.perfixCls}alert__icon`,
          this.perfixCls + this.iconType[this.type],
          {'is-more-line': this.desc.length}
        ];
      },
      contentClass() {
        return [
          `${this.perfixCls}alert__content`
        ];
      },
      titleClass() {
        return [
          `${this.perfixCls}alert__title`,
          {'is-more-line': this.desc.length}
        ];
      },
      descClass() {
        return [
          `${this.perfixCls}alert__description`
        ];
      },
      closeClass() {
        return [
          `${this.perfixCls}alert__close`,
          `${this.perfixCls}icon-close`
        ];
      }
    },
    methods: {
      close(e) {
        this.isShow = false;

        this.$emit("close", e);
      }
    }
  }
</script>
