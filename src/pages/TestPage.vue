<script src="../../../vue-abc/src/pages/index.js"></script>/**
* 创建于 2018/7/4
* 作者: ZhangKaixi
* 功能: 演示页面首页
* 知识点：
* 1. .vue文件的结构：
*    ① template标签：放HTML
*    ② script标签：放js
*    ③ style标签：放css/scss
* 2. 注释方法
*/

<template>
<!-- template标签内只能存在唯一的根节点 -->
<div>
  <h1 v-text="title"></h1>
  <hr>
  <div>
    <ul>
      <li v-for="(item,index) in contentList" :key="index">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
// JavaScripts放在这里
export default {
  name: 'TestPage',
  data () {
    return {
      title: 'Vue语法测试程序',
      contentList: [
        { title: '指令1',
          url: '#/directives1'
        },
        { title: '指令2',
          url: '#/directives2'
        },
        { title: '指令3',
          url: '#/directives3'
        },
        { title: '全局API',
          url: '#/globalapi'
        },
        { title: '用JsBarcode制作条形码',
          url: '#/barcode'
        }
      ]
    }
  }
}
</script>

<style scoped>
  /* 可以通过 @import 来引入样式表 */
  @import '../styles/pages.css';

  li {
    text-align: left;
  }
</style>
