<template>
  <div class="component_page page_content-res">
    <div class="sidBar">
      <div class="container_scroll">
        <sidBar></sidBar>
      </div>
    </div>
    <div class="doc_page_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidBar from "@/layout/aside"
export default {
  components:{
    sidBar
  },
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
.component_page{
    display: flex;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    .sidBar{
      width: 230px;
      background: lightblue;
      position: fixed;
      top: 54px;
      left: 200px;
      bottom: 0;
      border-right: 1px solid #e9ecf5;
      transition: all .3s ease-in-out;
      .container_scroll{
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        background: rgb(255, 255, 255);
      }
    }
}

.doc_page_content{
  flex: 1;
  padding: 12px;
  padding-left: 280px;
  transition: padding 0.3s ease-in-out;
  /deep/ body{
    padding: 12px 12px 180px 12px;
  }
}
</style>