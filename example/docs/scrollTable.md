<script>
export default{
    data(){
      return{
          data:[
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
            {
                name:"陈阳",
                address:"二社区B楼",
                time:"2014年",
                scropt:"test"
            },
          ],
          header:[
            {
                label:"姓名",
                value:"name",
            },
            {
                label:"地址",
                value:"address",
            },
            {
                label:"时间",
                value:"time",
            },
            {
                label:"??",
                value:"scropt",
            }
          ]
      }
    },
}
</script>

# scrollTable

滚动展示组件


::: tip
Scroll表格实际通过`div`标签实现的,目前没有办法实现如何使用原生`table`表格实现
:::

## 基本用法
::: code 滚动展示的表格`scrollTable`
```html
<un-scroll-table height="310" :data="data" :header="header"></un-scroll-table>

<script>
    export default{
        data(){
            return{
                tableData:[
                    {
                        name:"陈阳",
                        address:"二社区B楼",
                        time:"2014年",
                        scropt:"test"
                    },
                    {
                        name:"陈阳",
                        address:"二社区B楼",
                        time:"2014年",
                        scropt:"test"
                    },
                    {
                        name:"陈阳",
                        address:"二社区B楼",
                        time:"2014年",
                        scropt:"test"
                    },
                    {
                        name:"陈阳",
                        address:"二社区B楼",
                        time:"2014年",
                        scropt:"test"
                    },
                ],
                header:[
                    {
                        label:"姓名",
                        value:"name",
                    },
                    {
                        label:"地址",
                        value:"address",
                    },
                    {
                        label:"时间",
                        value:"time",
                    },
                    {
                        label:"scropt",
                        value:"scropt",
                    }
                ]
            }
        },
    }
</script>
```
:::

### Atrributes

