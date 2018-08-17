<template>
  <div class="flex-column">
    <div class="my-form">
      <div class="flex-row">
        <div class="box">
          <input type="button" value="打印全部" @click="printAll()"/>&emsp;
          <input type="checkbox" v-model="dividePage"/> 分页打印：{{ dividePage }}
        </div>
      </div>

      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;JsBarcode：生成一个&lt;SVG&gt;条码&emsp;
            <input type="button" value="打印" @click="printMe('printName')"/>
          </h3>
          <!-- 打印起始位置 -->
          <div id="printName" > <!-- 单独弄一个div标签来存放要打印的dom并设置id。若该div上设置的其他属性，在打印时可能失效 -->
            <div class="print-box" :class="{ 'print-divide' : dividePage }" style="width: 340px;"> <!-- 单独设置要打印元素的样式，因为在打印时，从父组件继承的样式会失效。 -->
              <!--JsBarcode使用方式1: 这是一段SVG代码-->
              <svg id="name"></svg>
              <br/>
              <span>测试一下：这句话要打印</span>
            </div>
          </div>
          <!-- 打印结束位置 -->
        </div>
        <div class="box">
          <div class="tips">
            &hearts;&nbsp;单独弄一个div标签来存放要打印的dom并设置id。<br/>若该div上设置的其他属性，在打印时可能失效。
          </div>
          <div class="tips">
            &hearts;&nbsp;单独设置要打印元素的样式，因为在打印时，<br/>从父组件继承的样式会失效。
          </div>
        </div>
      </div>

      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;JsBarcode：生成一个&lt;canvas&gt;条码&emsp;
            <input type="button" value="打印" @click="printCanvas('description')"/>
          </h3>
          <!-- 打印起始位置 -->
          <div id="printSlogan">
            <div class="print-box" :class="{ 'print-divide' : dividePage }" style="width: 550px;">
              <!--JsBarcode使用方式2：这是一个canvas图形（HTML5标签）-->
              <canvas id="description"></canvas>
            </div>
          </div>
          <!-- 打印结束位置 -->
        </div>
        <div class="box">
          <div class="tips">
            &hearts;&nbsp;注意：&lt;canvas&gt;元素不能直接被正确打印，<br/>打印前需要先用js将其转换为&lt;img&gt;<br/>
            （↑ ↑ ↑ 以上方法对chrome仍然无效）
          </div>
        </div>
      </div>

      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;JsBarcode：生成一个&lt;img&gt;（图片）条码&emsp;
            <input type="button" value="打印" @click="printMe('printNumber')"/>
          </h3>
          <!-- 打印起始位置 -->
          <div id="printNumber">
            <div class="print-box" :class="{ 'print-divide' : dividePage }" style="width: 250px;">
              <!--JsBarcode使用方式3：这是一张图片-->
              <img id="test"/>
              <br/>
            </div>
          </div>
          <!-- 打印结束位置 -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// 可以在main.js中全局引用JsBarcode
// 也可以在Vue组件中局部引用： import JsBarcode from 'jsbarcode'
// 或者也可以这样写： var JsBarcode = require('jsbarcode')
var JsBarcode = require('jsbarcode')

export default {
  name: 'myTest',
  data () {
    return {
      dividePage: false
    }
  },
  mounted () {
    JsBarcode('#name', 'CathyZhang')
    JsBarcode('#description', 'I come from Catopia!')
    JsBarcode('#test', '463571952')
  },
  methods: {
    // printMe：普通打印，传入DOM元素的id
    printMe: function (printDom) {
      var oldstr = document.body.innerHTML
      var newstr = document.getElementById(printDom).innerHTML
      document.body.innerHTML = newstr
      window.print()
      document.body.innerHTML = oldstr
      window.location.reload()
    },
    // printCanvas：打印canvas元素，将canvas转换成了img，但在chrome中仍无法打印
    printCanvas: function (printDom) {
      var oldstr = document.body.innerHTML
      var canvas = document.getElementById(printDom)
      var newstr = "<img src= '" + canvas.toDataURL() + "' />"
      document.body.innerHTML = newstr
      window.print()
      document.body.innerHTML = oldstr
      window.location.reload()
    },
    // printAll：一次打印多个标签
    printAll: function () {
      var oldstr = document.body.innerHTML
      var newstr = document.getElementById('printName').innerHTML
      newstr = newstr + document.getElementById('printSlogan').innerHTML
      newstr = newstr + document.getElementById('printNumber').innerHTML
      document.body.innerHTML = newstr
      window.print()
      document.body.innerHTML = oldstr
      window.location.reload()
    }
  }
}

</script>

<style scoped>
@import '../../styles/pages.css';

  .print-box {
    background-color: #FFF5EE;
    border-radius: 5px;
    border: black solid 2px;
    margin: 10px;
    padding: 15px;
    text-align: center;
  }

  /* 设置分页打印（一个条码独占一页，由变量dividePage控制） */
  .print-divide {
    page-break-after: always;
  }
</style>
