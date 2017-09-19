<template>
  <label
    :class='wrapCls'
    @click.stop='change'>
    <span :class='iconCls'>
      <input
        type="checkbox"
        :class='inputCls'
        :value='value'
        :checked='isChecked'
        :disabled='disabled'
        @click.stop='()=>{}'>
    </span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'drCheckbox',
    props: {
      value: {
        type: String
      },
      checked: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      perfixCls: {
        type: String,
        default: 'dr-'
      }
    },
    data() {
      return {
        isChecked: false,
        currentValue: ''
      }
    },
    computed: {
      wrapCls() {
        return [
          `${this.perfixCls}checkbox`,
          {
            [`${this.perfixCls}checkbox--checked`]: this.isChecked,
            [`${this.perfixCls}checkbox--disabled`]: this.disabled
          }
        ];
      },
      iconCls() {
        return [
          `${this.perfixCls}checkbox__icon`
        ];
      },
      inputCls() {
        return [
          `${this.perfixCls}checkbox__input`
        ];
      }
    },
    watch: {
      isChecked: function () {
        this.updateVal();
        this.$emit('change', {
          "value": this.currentValue,
          state: this.isChecked
        });
      }
    },
    methods: {
      updateVal() {
        this.currentValue = this.value || '';
      },
      change() {
        if (this.disabled) return false;
        this.isChecked = !this.isChecked;
        this.updateVal();
      }
    },
    created() {
      this.isChecked = !!this.checked;
      this.updateVal();
    }
  }
</script>