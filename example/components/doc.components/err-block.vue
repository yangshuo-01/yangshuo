<template>
  <div class="err-block">
    <div class="err-block_wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:'errBlock',
    data(){
        return{

        }
    },
    props:{

    },
    computed:{},
    watch:{},
    methods:{},
    created(){
        
    },
    mounted(){

    },
}
</script>

<style lang="scss" scoped>
.err-block{
  margin: 12px 0;
  padding: 20px 12px;
  border-left: 6px solid $orange-lighten-1;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: $orange-lighten-5;
}
</style>