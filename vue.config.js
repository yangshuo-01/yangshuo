const path = require('path')
var md = require('markdown-it')();
var hljs = require('highlight.js')
const anchor = require('markdown-it-anchor')
// var DPfunction = require('./example/utils/DOMParser')
// var vue = require('vue-loader')();
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js', // 入口
      // template: 'public/index.html', // 模板
      // filename: 'index.html' // 输出文件
    }
  },
  //导入一些全局css变量、函数等
  css:{
    loaderOptions: {
      scss: {
        data: `@import "./packages/static/_color.scss";`
      }
    }
  },
  chainWebpack: config => {
    //一些自定义webpack解析路径
    config.resolve.alias
      .set('@', path.resolve('example')) // @ 默认指向 src 目录，这里要改成 docs
      .set('~', path.resolve('packages')) // ~ 指向 packages
      // 把 packages 和 example 加入编译，因为新增的文件默认是不被 webpack 处理的
      config.module
        .rule('js')
        .include.add(/packages/).end()
        .include.add(/example/).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
          return options
        })

      config.module
        .rule("md")
        .test(/\.md$/)
        .use("vue-loader")
        .loader("vue-loader")
        .end()
        .use("vue-markdown-loader")
        .loader("vue-markdown-loader/lib/markdown-compiler")
        .options({
          raw: true,
          wrapper: "div",
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                       hljs.highlight(lang, str, true).value +
                       '</code></pre>';
              } catch (__) {console.log('');}
            }
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          },
          use: [
            [require('markdown-it-container'), 'code',
              {
                validate: function(params){
                  return params.trim().match(/^code\s+(.*)$/)
                },
                render: function(tokens, idx){
                  var m = tokens[idx].info.trim().match(/^code\s+(.*)$/);
                  if (tokens[idx].nesting === 1) {
                    var descript = (m && m.length > 1) ? m[1] :''
                    var components = tokens[idx + 1].content
                    var descripHTML = descript ? md.render(descript) : ''
                    // opening code
                    return `<code-block>\n<div slot="showComp">${ components }</div>\n<div slot="descript" class="descript_wrap">${ descripHTML }</div>\n<div slot="mainDemo" class="mainDemo_wrap">\n`;
                  } else {
                    // closing tag
                    return '</div></code-block>\n';
                  }  
                }
              }
            ],
            [require('markdown-it-container'), 'tip' ,
              {
                validate: function(params){
                  // return params.trim().match(/^tip\s+(.*)$/)
                  return params.trim().match(/^tip/)
                },
                render: function(tokens, idx){
                  if (tokens[idx].nesting === 1) {
                    return `<tip-block><div>`;
                  } else {
                    return '</div></tip-block>\n';
                  }  
                }
              }
            ],
            [require('markdown-it-container'), 'warning' ,
              {
                validate: function(params){
                  return params.trim().match(/^warning/)
                },
                render: function(tokens, idx){
                  if (tokens[idx].nesting === 1) {
                    return `<warn-block><div>`;
                  } else {
                    return '</div></warn-block>\n';
                  }  
                }
              }
            ],
            [require('markdown-it-container'), 'error' ,
              {
                validate: function(params){
                  return params.trim().match(/^error/)
                },
                render: function(tokens, idx){
                  if (tokens[idx].nesting === 1) {
                    return `<err-block><div>`;
                  } else {
                    return '</div></err-block>\n';
                  }  
                }
              }
            ],
            [anchor, {
              permalink: true,
              permalinkBefore: true,
              permalinkSymbol: '#'
            }]
          ],
          // preprocess: function(MarkdownIt) {
          //   MarkdownIt.renderer.rules.table_open = function() {
          //     return '<table class="docTable">';
          //   };
          // }
        })
  }
}
