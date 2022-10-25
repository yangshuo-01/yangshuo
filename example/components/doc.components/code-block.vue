<template>
  <div class="code-block">
      <div class="descript_block">
        <div class="control-theme">
          
        </div>
        <slot name="showComp">
          components
        </slot>
      </div>
        <div class="innerText-wrap">
          <slot name="descript">
            slot default default
          </slot>
        </div>
      <div class="mainDemo_block" :class="change? 'change':''">
        <slot name="mainDemo" class="mainDemo_wrap">
          slot demo default
        </slot>
      </div>
      <div class="block_control">
        <div class="inner_text" @click="change = !change">
          <i>test</i>
          <span>展开 / 收起</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'codeBlock',
    data(){
        return{
          change:true,
        }
    },
    props:{
      contents:{
        type:String,
        default:''
      }
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
  .code-block{
    border: thin solid $grey-lighten-3;
    transition: all 0.3s ease;
    // hover样式
    &:hover{
      box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.2);

      .inner_text /deep/i{
          transform: translateX(-10px) !important;
        }
      .inner_text /deep/span{
          transform: translateX(0px)!important;
          color: inherit !important;
        }
    }
  //normal样式
    .descript_block{
      background: $grey-lighten-5;
      padding: 20px;

        p{
          margin: 0 !important;
        }
    }
    .innerText-wrap{
      border-top: thin solid $grey-lighten-3;
      padding: 12px;
    }
    //折叠的的代码块
    .mainDemo_block{
      background: $grey-lighten-4;
      font-size: 14px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;

      pre{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
      }
      .mainDemo_wrap{
        padding: 24px;
      }
    }
    //展开关闭代码块
    .change{
      height: 0px;
      min-height: 0px;
    }
    .block_control{
      height: 40px;
      text-align: center;
      border-top: 0px;
      position: relative;
      transition: background-color 0.3s ease-in-out;
      &:hover{
        background-color: $grey-lighten-4;
      }
      .inner_text{
        height: 100%;
        font-size: 12px;
        cursor: pointer;
        color: rgb(138, 138, 138);
        &:hover{
          color: $blue-darken-1;
        }
        i {
          display: flex;
          align-items: center;
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          right: 50%;
          margin: -20px 0 0 -20px;
          transform: translateX(10px);
          transition: transform 0.2s ease-in;
        }
        span{
          color: #fff;
          display: inline-flex;
          align-items: center;
          height: 100%;
          transform: translateX(20px);
          transition: all 0.2s ease-in;
        }
      }
    }
  }
</style>