<template>
  <div>

  </div>
</template>

<script>
// import DPfunction from '@/utils/DOMParser'
var DPfunction = require('@/utils/DOMParser')
console.log(DPfunction);
export default {
  components:{

  },
  data(){
    return{
      testMd:'sdsd',
      test:''
    }
  },
  mounted(){
    // var str="<div>"
    //         +"<div id='div1'>"
    //             +"<div id='div1_1'>div1-1</div>"
    //             +"<div id='div1_2'>div1-2</div>"
    //             // +"<sdl-button></sdl-button>"
    //         +"</div>"
    //         +"<div id='div2'>"
    //             +"<div id='div2_1'>div2-1</div>"
    //             +"<div id='div2_2'>div2-2</div>"
    //         +"</div>";
    //       +"/div>";
    // console.log(DPfunction(str));
    var hljs = require('highlight.js')
    var md = require('markdown-it')({
    // highlight: function (str, lang) {
    //   // 此处判断是否有添加代码语言
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       // 得到经过highlight.js之后的html代码
    //       const preCode = hljs.highlight(lang, str, true).value
    //       // 以换行进行分割
    //       const lines = preCode.split(/\n/).slice(0, -1)
    //       // 添加自定义行号
    //       let html = lines.map((item, index) => {
    //         return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
    //       }).join('')
    //       html = '<ol>' + html + '</ol>'
    //       // 添加代码语言
    //       if (lines.length) {
    //         html += '<b class="name">' + lang + '</b>'
    //       }
    //       return '<pre class="hljs"><code>' +
    //         html +
    //         '</code></pre>'
    //     } catch (__) {console.log('错误');}
    //   }
    // // 未添加代码语言，此处与上面同理
    //   const preCode = md.utils.escapeHtml(str)
    //   const lines = preCode.split(/\n/).slice(0, -1)
    //   let html = lines.map((item, index) => {
    //     return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
    //   }).join('')
    //   html = '<ol>' + html + '</ol>'
    //   return '<pre class="hljs"><code>' +
    //     html +
    //     '</code></pre>'
    // }
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {console.log('');}
    }
  }
    });
    md.use(require('markdown-it-container'), 'code', {
      validate: function(params) {
        return params.trim().match(/^code\s+(.*)$/);
      },
      render: function (tokens, idx) {
        console.log(tokens,idx);
        var m = tokens[idx].info.trim().match(/^code\s+(.*)$/);
        // var com = tokens[2].children[0].content
        // console.log('com',md.render(com));
        if (tokens[idx].nesting === 1) {
          // opening tag
          if(md.utils.escapeHtml(m[1])){
            return '<details><summary>' + md.render(m[1]) + '</summary>\n';
          }
        } else {
          // closing tag
          return '</details>\n';
        }
      }
    });
    console.log(md.render('::: code sddds\n```html\n<div>sdds<div>dssd</div></div>```\n:::'));
  }
}
</script>


<style>

</style>