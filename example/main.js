import Vue from 'vue'
import App from './App.vue'
import UN from '~/main.js'
import router from'./router'
import '@/static/style/globle.scss'
import '@/static/style/responsive.scss'
import '@/static/style/highlight.scss'
// console.log(UN);
Vue.use(UN)

// 导入代码块组件
import codeBlock from '@/components/doc.components/code-block'
import tipBlock from '@/components/doc.components/tip-block'
import warnBlock from '@/components/doc.components/warn-block'
import errBlock from '@/components/doc.components/err-block'
Vue.component(codeBlock.name,codeBlock)
Vue.component(tipBlock.name,tipBlock)
Vue.component(warnBlock.name,warnBlock)
Vue.component(errBlock.name,errBlock)

// 导入全局样式
import '~/static/_color.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


