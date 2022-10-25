
/*
    eachComponent 每个组件默认导入的文件
*/
import '~/static/_color.scss'

var exportDefault = { }

const requireAll = function(ins){
    const files = require.context('./components', true, /\.js$/)
    files.keys().map(element => {
        // 获取到所有组件
        let eachfile = files(element).default
        if(ins){
            //全局注册所有组件
            ins.component(eachfile.name,eachfile)
            return
        }else{
            exportDefault[`${eachfile.name}`] = eachfile
            return
        }
    });
    return ''
}
// 集成按需导入的模块
requireAll()

const install = function(Vue){
    // 判断是否可以安装
    if (install.installed) return
    // 工程化导入组件库
    requireAll(Vue)
}
exportDefault['install'] = install

export default exportDefault