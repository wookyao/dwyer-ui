<template>
  <div
    :class='classObj'
    :style='style'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'drCol',
    props: {
      clsName: {
        type: String
      },
      col: {
        type: Number
      },
      offset: {
        type: Number
      },
      xs: {
        type: [Number, Object]
      },
      sm: {
        type: [Number, Object]
      },
      md: {
        type: [Number, Object]
      },
      lg: {
        type: [Number, Object]
      },
      perfixCls: {
        type: String,
        default: 'dr-'
      }
    },
    computed: {
      classObj() {
        let
          mediaClsList = [],
          colNumCls = (this.col > 0 && this.col < 25) ?
            `${this.perfixCls}col--${this.col}` : '',

          offsetCls = this.offset ?
            `${this.perfixCls}col--offset-${this.offset}` : '';

        ['xs', 'sm', 'md', 'lg'].forEach(size => {
          if (typeof this[size] === 'number') {
            mediaClsList.push(`${this.perfixCls}col--${size}-${this[size]}`);
          } else if (typeof this[size] === 'object') {
            let props = this[size];

            Object.keys(props).forEach( prop => {
              mediaClsList.push(
                prop == 'col' ?
                `${this.perfixCls}col--${size}-${props[prop]}` :
                prop == 'offset' ?
                `${this.perfixCls}col--offset-${size}-${props[prop]}` : ''
              );
            });

          }
        });

        if(this.clsName) {
          mediaClsList.push(this.clsName)
        }

        return [
          `${this.perfixCls}col`,
          colNumCls,
          offsetCls
        ].concat(mediaClsList);
      },
      style() {
        let gutter = this.$parent.gutter;
        let ret = {};

        if (gutter) {
          ret.paddingLeft = `${gutter / 2}px`;
          ret.paddingRight = ret.paddingLeft;
        }

        return ret;
      }
    }
  }
</script>