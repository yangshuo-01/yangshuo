<template>
      <table class="un-table">
        <caption v-if="caption">
            ScrollTable
        </caption>
        <thead>
            <tr>
                <th :style="`text-align:${item.align}`" v-for="item,index in header" :key="index">{{ item.label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dataItem,dataIndex in data" :key="dataIndex">
                <td :style="`text-align:${headerItem.align};`" v-for="headerItem,headerIndex in header" :key="headerIndex">
                    {{ getColum(dataItem,headerItem) }}
                </td>
            </tr>
        </tbody>
        <tfoot v-if="tableFoot">
            <tr>
                <td colspan="5"></td>
            </tr>
        </tfoot>
      </table> 
</template>

<script>
export default {
    name:'unTable',
    data(){
        return{
            animate: false,


        }
    },
    props:{
        caption:{
            type:Boolean,
            default:false
        },
        tableFoot:{
            type:Boolean,
            default:false
        },
        shadow:{
            type:Boolean,
            default:false
        },
        headers:{
            type:Array,
            default(){
                return [
                    {

                    }
                ]
            }
        },
        data:{
            type:Array,
            default(){
                return[
                    {
                        name: "陈阳",
                        address: "河北工程大学",
                        Carbs: 80,
                    },
                    {
                        name: "陈阳",
                        address: "河北工程大学",
                        Carbs: 80,
                    },
                    {
                        name: "陈阳",
                        address: "河北工程大学",
                        Carbs: 80,
                    },
                ]
            }
        },
        header:{
            type:Array,
            default(){
                return[
                    {
                        label: "姓名",
                        value: "name",
                        align: "left",
                    },
                    {
                        label: "住址",
                        value: "address",
                        align: "start",
                    },
                    {
                        label: "Carbs",
                        value: "Carbs",
                        align: "start",
                    },
                ]
            }
        }
    },
    computed:{
        getColum(){
            return function(items,item){
                return items[item.value]
            }
        }
    },
    watch:{},
    components:{},
    created(){

    },
    mounted(){

    },
    beforeDestroy(){},
    methods:{
        scroll(){
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .un-table{
        background-color: #fff ;
        border-radius: 4px;
        box-shadow: 0 2px 10px -12px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important;
        width: 100%;
        border-collapse: collapse;
        caption{
            font-size: 1.4em;
            font-weight: bold;
            margin: 0.5em 0;
        }
        thead{

        } 
        tbody{

        }
        td {
            display: table-cell;
            vertical-align: center;
        }
        th,td{
            border-bottom: thin solid $grey-lighten-3;
            display: table-cell;
            vertical-align: inherit;
            text-align: left;
            padding: 14px 12px;
        }
        tfoot tr td{
            text-align: right;
            padding-right: 20px;
        }
    }
    // 设置隔行背景颜色
    // table tbody tr:nth-child(odd){
    //     background-color: #eee;
    // }

    table tbody tr:hover{
        background-color: $grey-lighten-4;
    }

    table tbody tr td:first-child{
        color: $blue-darken-1;
    }


</style>