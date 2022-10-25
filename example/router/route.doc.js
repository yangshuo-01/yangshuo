let route = [];
//获取context导入的所有文件对象
const files = require.context('@/docs', false, /\.md$/)
console.log(files)
files.keys().map(element => {
    // 获取到所有组件
    // console.log(element);
    let cot = element.replace('.md','')
    let path = cot.replace('./', '')
    let name = cot.replace('./', '')
    // let eachfile = files(element).default.__file.replace('example', '..')
    //这里有一个问题通过字符串导入懒加载路由出错：找不到module模块？？？
    let eachfile = files(element).default
    // console.log(eachfile);
    route = [...route, 
        {
            path: path,
            name: name,
            component: eachfile
        }
    ]

});
export default route