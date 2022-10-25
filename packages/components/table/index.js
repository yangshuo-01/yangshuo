import table from './src/table.vue'

// console.log(Button);
table.install = function(Vue){
    Vue.component(table.name, table);
}

export default table;