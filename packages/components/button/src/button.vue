<template>
    <button
      class="un-button"
      :class="[
        type ? 'un-button--' + type : '',
        size ? 'un-button--' + font : '',
      ]"
      :style="getsize"
    >
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
  name:'unButton',
  computed:{
    getsize(){
      console.log(this.font);
      return {"font-size": this.font+"px"}
    }
  },
  props:{
    font:{
      type: Number,
      default: 14
    },
    size:{
      type: String,
    },
    type:{
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
  $type-map:(
    blue: (
      hover:$blue-lighten-1,
      focuse:$blue-lighten-1,
      active:$blue-darken-2,
    ),
    indigo: (
      hover:$indigo-lighten-1,
      focuse:$indigo-lighten-1,
      active:$indigo-darken-2,
    ),
    red: (
      hover:$red-lighten-1,
      focuse:$red-lighten-1,
      active:$red-darken-2,
    ),
    blueGrey: (
      hover:$blue-grey-lighten-1,
      active:$blue-grey-lighten-1,
      focuse:$blue-grey-darken-2,
    ),
  );
  @function getType($key){
    @return map-get($type-map, $key )
  };
  @each $key, $value in (blue,$blue-darken-1),(indigo,$indigo-darken-1),(red,$red-darken-1),(blueGrey,$blue-grey-darken-1){
    .un-button--#{$key}{
      background-color: #{$value} !important;
      border-color: #{$value} !important;
      @each $key-name, $key-value in getType($key) {
        &:#{$key-name}{
          background-color:$key-value !important;
          border-color: $key-value !important;
        }
      };
      span{
        color: #fff;
      }
    }
  }
  .un-button{
    padding: 0.58em 0.8em;
    cursor: pointer;
    border: 1px solid rgb(192, 192, 192);
    border-radius: 0.25em;
    position: relative;
      span{
        line-height: 1;
      }
      &:hover,&:focus{
        background-color: rgb(245, 245, 245);
      }
      &:active{
        background-color: rgb(240, 240, 240);
      }
  }
</style>
