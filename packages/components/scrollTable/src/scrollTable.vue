<template>
      <div class="un-scrollTable" :style="`height:${height}px;`">
        <div class="header">
            <div class="header-item" :style="`text-align:${item.align}`" v-for="item,index in header" :key="index">{{ item.label }}</div>
        </div>
        <div class="tbody-wrap">
            <div class="tbody" :style="changeMargin">
                <div class="tbody-row" v-for="dataItem,dataIndex in data" :key="dataIndex" >
                    <div class="tbody-row-item" :style="`text-align:${headerItem.align};`" v-for="headerItem,headerIndex in header" :key="headerIndex">
                        {{ getColum(dataItem,headerItem) }}
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
let setting = null
export default {
    name:'unScrollTable',
    data(){
        return{
            animate: false,
            set:'',
            changeMargin: {
                'margin-top': '',
                transition: 'margin '+ this.interval +'s ease-in-out'
            },
        }
    },
    props:{
        shadow:{
            type: Boolean,
            default: false
        },
        height: String,
        controlScroll:{
            type: Boolean,
            default: true,
        },
        scrollTime:{
            type: Number,
            default: 0.5
        },
        interval:{
            type: Number,
            default: 1
        },
        data:{
            type:Array,
            default(){
                return[{}]
            }
        },
        header:{
            type:Array,
            default(){
                return[{}]            
            }
        },
    },
    computed:{
        getColum(){
            return function(items,item){
                return items[item.value]
            }
        },
    },
    watch:{},
    components:{},
    created(){
        this.$nextTick(()=>{
            setting = setInterval(this.scrollMethods, 600+this.interval*1000);
        })
    },
    mounted(){

    },
    beforeDestroy(){
        clearInterval(setting)
    },
    methods:{
        scrollMethods(){
            if (this.controlScroll){
                var getHeight = document.getElementsByClassName('tbody-row')[0].clientHeight
                this.changeMargin['margin-top'] = '-' + getHeight + 'px'
                this.changeMargin['transition'] = 'margin '+this.scrollTime+'s ease-in-out'
                setTimeout(() => {
                this.data.push(this.data[0])
                this.data.shift()
                this.changeMargin['margin-top'] = '0'
                this.changeMargin['transition'] = ''
                }, this.scrollTime*1000)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .un-scrollTable{
        overflow: hidden;
        background-color:#fff ;
        border-radius: 4px;
        box-shadow: 0 2px 10px -12px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important;
        width: 100%;
        border-collapse: collapse;
        .header{
            z-index: 100;
            display: flex;
            .header-item{
                flex: 1;
                padding: 12px;
                border-bottom: thin solid $grey-lighten-3;
            }
        }
        .tbody-wrap{
            position: relative;
            overflow: hidden;
            .tbody{ 
                
                .tbody-row{
                    display: flex;
                    &:hover{
                        background-color: $grey-lighten-3;
                    }
                    .tbody-row-item{
                        flex: 1;
                        padding: 12px;
                        border-bottom: thin solid $grey-lighten-3;
                    }    
                }
            }
        }
    }
    // 设置隔行背景颜色
    // table tbody tr:nth-child(odd){
    //     background-color: #eee;
    // }
    table tbody tr td:first-child{
        color: $blue-darken-1;
    }


</style>