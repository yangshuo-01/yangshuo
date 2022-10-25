import test from './src/test.vue'

// console.log(Button);
test.install = function(Vue){
    Vue.component(test.name, test);
}

export default test;