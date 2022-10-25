import Button from './src/button.vue'

// console.log(Button);
Button.install = function(Vue){
    Vue.component(Button.name, Button);
}

export default Button;