<template>
  <div class="">
    <div style="height:54px;">
      <navHead></navHead>
    </div>
    <div class="main_pages">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navHead from './head'

export default {
  components:{
    navHead
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

<style scoped>
  .main_pages{
    height: calc(100vh - 54px);
    width: 100%;
  }
</style>