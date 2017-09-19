<template>
  <div :class='classObj'>
    <dr-checkbox
      v-for='(item, index) in dataList'
      :key='index'
      :value='item.value'
      :checked='item.checked'
      :disabled='item.disabled'
      @change='change'>
      {{item.label}}
    </dr-checkbox>
  </div>
</template>

<script>
  import {oneOf, arr_remove, extend} from '@/utils/assist.js';
  import drCheckbox from './checkbox.vue';

  export default {
    name: 'drCheckboxGroup',
    components: {
      drCheckbox
    },
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
    data() {
      return {
        dataList: [],
        currentValue: {},
        checkedVal: []
      }
    },
    computed: {
      classObj() {
        return [
          `${this.perfixCls}checkbox__group`,
          {
            [`${this.perfixCls}checkbox__group-vertical`]: this.vertical
          },
          this.customCls
        ];
      }
    },
    methods: {
      change(val) {
        if (val.state) {
          this.checkedVal.push(val);
        } else {
          this.remove(val.value);
        }
        this.$emit('change', this.checkedVal);
      },
      remove(v) {
        for (let i = 0, iL = this.checkedVal.length; i < iL; i++) {
          if (this.checkedVal[i].value == v) {
            this.checkedVal.splice(i,1);
          }
        }
      }
    },
    created() {
      this.dataList = this.datas;
    }

  }
</script>