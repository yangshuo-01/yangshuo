<template>
  <div class="sidBar_wrap">
    <!-- 一级导航 -->
    <div class="menu_item">
      <router-link to="/component/button" tag="a">
        更新日志
      </router-link>
    </div>
    <!-- 二级导航组 -->
    <div class="menu_group">
      <div class="menu_group_title">
        <router-link to="/component" tag="a" >
          组件
        </router-link>
      </div>
      <div class="menu_group_wrap">
        <div v-for="item in componentRouterMap" :key="item.name" class="menu_group_item ">
          <router-link :to="`/component/${item.name}`" tag="a">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{

        }
    },
    props:{

    },
    computed:{
      componentRouterMap(){
        let componentRouter = this.$router.options.routes.filter(value=>{
          return value.name === "component" 
        })
        let componentRouterMap = componentRouter[0].children
        console.log(componentRouterMap);
        return componentRouterMap
      }
    },
    watch:{
      $$route(newRoute,OldRoute){
        console.log(newRoute,OldRoute);
      }
    },
    methods:{

    },
    created(){
        
    },
    mounted(){
      console.log(this.$router.options.routes);
    },
}
</script>
<style lang="scss" scoped>
.font_1{
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  &:hover{
    background: rgb(238, 245, 255);
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(50%);
    transition: all 0.1s ease-in-out;
  }
  &:active::before{
    background: rgba(177, 187, 211, 0.295);
    transform: scaleX(100%);
  }
}
a {
  padding: 12px;
  display: block;
  color: rgb(59, 59, 59);
  text-decoration:none; 
  position: relative;
  &:hover{
    background: aliceblue;
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(50%);
    transition: all 0.1s ease-in-out;
  }
  &:active::before{
    background: rgba(177, 187, 211, 0.295);
    transform: scaleX(100%);
  }
} 
.sidBar_wrap{
  padding: 4px;
  padding-top: 24px;
  font-size: 14px;
}
.menu_item{
  font-size: 15px;
  font-weight: bold;
}
.menu_group_wrap-fold{
  height: 0 !important;
}
.menu_group_wrap{
  transition: height  0.3s ease-in-out;
  height: auto;
  overflow: hidden;
}
.menu_group_item{
  font-size: 14px;
  font-weight: normal;
}
.menu_group_title{
  font-size: 15px;
  font-weight: bold;
}
</style>