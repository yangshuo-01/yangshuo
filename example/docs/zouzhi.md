<style>
  .un-button{
    margin:8px;
  }
</style>
<script>//这里为javascript内容

export default {
  data(){
    return{
      
    }
  },
  created(){
    console.log('sssdssdfsdf')
  }
}
</script>

# Button

常用的操作按钮

::: tip
  test for waring
:::
## 基础用法

:::code 通过type性质改变按钮样式
```html
<un-button>默认按钮</un-button>
<un-button type="blue">默认按钮</un-button>
<un-button type="indigo">默认按钮</un-button>
<un-button type="red">危险按钮</un-button>

<script>
  export default {
    data() {
      return {
        checked: true
      };
    },
    create(){

    }
  };
</script>
```
:::
## 不同尺寸

::: code 建议通过font大小改变按钮大小,使你的按钮大控制更灵活
```html
<un-button type="blue" :font="10">默认按钮</un-button>
<un-button type="blue" :font="11">默认按钮</un-button>
<un-button type="blue" :font="12">默认按钮</un-button>
<un-button type="blue" :font="13">默认按钮</un-button>
<un-button type="blue" :font="14">默认按钮</un-button>
<un-button type="blue" :font="15">默认按钮</un-button>
```
::: 


## Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | title         | string | — | — |
| type | Component type | string | success/warning/info/error | info |
| description | Descriptive text. Can also be passed with the default slot | string | — | — |
| closable | If closable or not | boolean | — | true |
| center | Whether to center the text | boolean | — | false |
| close-text | Customized close button text | string | — | — |
| show-icon | If a type icon is displayed | boolean | — | false |
| effect | Choose theme  | string | light/dark | light |

## Slot

| Name | Description |
|------|--------|
| — | description |
| title | content of the Alert title |

## Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | fires when alert is closed | — |
