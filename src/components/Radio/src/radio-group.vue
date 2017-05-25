<template>
  <div :class='classObj'>
    <dr-radio
      v-for='(item, index) in dataList'
      :key='index'
      :value='item.value'
      :disabled='item.disabled'
      :checked='item.checked'
      @change='change'>{{item.label}}</dr-radio>
  </div>
</template>

<script>
  import {extend} from '@/utils/assist.js';
  import drRadio from './radio.vue';

	export default {
		name: 'drRadioGroup',
    props: {
      datas: {
        type: Array
      },
      vertical: {
        type: Boolean
      },
      customCls: {
        type: String,
        default: ''
      },
      perfixCls: {
        type: String,
        default: 'dr-'
      }
    },
    components: {
      drRadio
    },
    computed: {
      classObj() {
        return [
          `${this.perfixCls}radio__group`,
          {
            [`${this.perfixCls}radio__group-vertical`]: this.vertical
          },
          this.customCls
        ];
      }
    },
    data() {
      return {
        currentValue: '',
        dataList: []
      }
    },
    watch: {
      currentValue: function () {
        this.update();
        this.$emit('change', this.currentValue);
      }
    },
    methods: {
      update() {
        this.dataList = [];

        for (let i = 0, iL = this.datas.length; i < iL; i++) {
          if (this.currentValue === this.datas[i].value) {
            this.dataList[i] = (extend(this.datas[i], {
              checked: true,
              disabled: false
            }));
          }else {
            this.dataList[i] = (extend(this.datas[i], {
              checked: false
            }));
          }
        }

      },
      initCurrentVal() {
        let
          i = 0,
          iLen = this.datas.length;

        for (; i < iLen; i++) {
          if (this.datas[i].checked) {
            this.currentValue = this.datas[i].value;
            break;
          }
        }
      },
      change(val) {
        this.currentValue = val;
      }
    },
    created() {
      this.initCurrentVal();
    }
	}
</script>