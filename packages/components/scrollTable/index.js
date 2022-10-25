import scrollTable from './src/scrollTable.vue'

// console.log(Button);
scrollTable.install = function(Vue){
    Vue.component(scrollTable.name, scrollTable);
}

export default scrollTable;