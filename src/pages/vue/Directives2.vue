/**
* 创建于 2018/7/4
* 作者: ZhangKaixi
* 功能: Vue基本指令测试
*/
<template>
<div>
  <h1>表单元素</h1>
  <hr>
  <div class="flex-column">
    <div class="my-form">
      <h2>示例4：双向数据绑定：v-model</h2>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;v-model</h3>
          <div class="test-box">
            <!----------------- 示例4-1 ------------------>
            <input type="text" v-model="modelTest1"/><br/>
            <span v-text="modelTest1"></span>
          </div>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;v-model.lazy</h3>
          <div class="test-box">
            <!----------------- 示例4-2 ------------------>
            <input type="text" v-model.lazy="modelTest2"/><br/>
            <span v-text="modelTest2"></span>
          </div>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;v-model.number.trim</h3>
          <div class="test-box">
            <!----------------- 示例4-3 ------------------>
            <input type="text" v-model.number.trim="modelTest3"/><br/>
            <span v-text="modelTest3"></span>
          </div>
          <br/>
        </div>
        <div class="tips" style="margin-top: 30px;">
          <p style="text-align: center">Tips</p>
          <span>.number修饰符：将输入字符串转为数字。</span><br/>
          <span>.trim修饰符：去掉输入字符串首尾的空格。</span>
        </div>
      </div>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;单选框绑定数据</h3>
          <div class="test-box">
            <!----------------- 示例4-4 ------------------>
            <input type="radio" value="true" v-model="radioTest" checked/>true&ensp;&ensp;&ensp;&ensp;
            <input type="radio" value="false" v-model="radioTest"/>false&ensp;&ensp;
            <!-- 注意：直接赋值给value的true或false都将被解析为string，而非bool -->
            <!-- 要通过value属性向radioTest传bool值，用v-bind:value="true" -->
            <br/><br/>
            被选中的值是：<span v-text="radioTest"></span>
          </div>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;多选框绑定数据</h3>
          <div class="test-box">
            <!----------------- 示例4-5 ------------------>
            <input type="checkbox" value="喵星球" v-model="checkboxTest"/>喵星球&ensp;&ensp;&ensp;&ensp;
            <input type="checkbox" value="汪星球" v-model="checkboxTest"/>汪星球&ensp;&ensp;&ensp;&ensp;<br/>
            <input type="checkbox" value="地球" v-model="checkboxTest"/>地球&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <input type="checkbox" value="皮卡球" v-model="checkboxTest"/>皮卡球&ensp;&ensp;&ensp;&ensp;<br/><br/>
            被选中的星球是：<br/>
            <span v-text="checkboxTest"></span><br/>
          </div>
        </div>
      </div>

      <h2>示例5：绑定事件监听器：v-on（或写作@）</h2>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;按钮绑定事件</h3>
          &emsp;我的初始数组：<span v-text="arrayTest1" v-once></span>
          <div class="test-box">
            处理后的数组：<span v-text="arrayTest1"></span><br/><br/>
            <!----------------- 示例5-1 ------------------>
            <input type="button" value="反转数组"
                   @click="arrayTest1.reverse()"/>&emsp;
            <input type="button" value="从小到大排序"
                   @click="arrayTest1.sort(function(a,b) { return a-b })"/>&emsp;
            <input type="button" value="从大到小排序"
                   @click="arrayTest1.sort(function(a,b) { return b-a })"/>
          </div>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;表单绑定事件</h3>
          <!-- 知识点：v-once指令：只渲染一次 -->
          &emsp;我的初始数组：<span v-text="arrayTest2" v-once></span>
          <div class="test-box">
            处理后的数组：<span v-text="arrayTest2"></span><br/><br/>
            <!----------------- 示例5-2 ------------------>
            <input type="radio" value="reverse"
                   @click="arrayTest2=myArray().reverse()"
                   v-model="arrayOption"/>反转数组<br/>
            <input type="radio" value="up-order"
                   @click="arrayTest2=myArray().sort(function(a,b) { return a-b })"
                   v-model="arrayOption"/>从小到大排序<br/>
            <input type="radio" value="down-order"
                   @click="arrayTest2=myArray().sort(function(a,b) { return b-a })"
                   v-model="arrayOption"/>从大到小排序
          </div>
        </div>
        <div class="tips" style="margin-top: 30px;">
          <p style="text-align: center">Tips</p>
          补充知识点：数组的操作<br/><br/>
          <hr class="tips-hr"><br/>
          &diamond;例5-1中直接改变原始数组<br/>
          &diamond;例5-2中的操作则相互独立
        </div>
      </div>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;键盘事件</h3>
          <span>这是一个简单的to do list,试试看吧</span><br/>
          <div class="test-box">
            <!----------------- 示例5-3 ------------------>
            <input type="text" v-model="newItem" @keyup.enter="addItem" placeholder="请输入文字并按回车"/>
            <button @click="vForItems=[]">空所有项目</button><br/>
            <li v-for="item in vForItems" :key="item">{{ item }}</li>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Directives2',
  data () {
    return {
      newItem: '',
      vForItems: [],
      modelTest1: 'test',
      modelTest2: 'lazy test',
      modelTest3: 'trim test',
      radioTest: true,
      checkboxTest: ['喵星球'],
      arrayTest1: [1, 21, 3, 5, 34, 8, 55, 1, 2, 13],
      arrayTest2: this.myArray(),
      arrayOption: ''
    }
  },
  methods: {
    addItem: function () {
      this.vForItems.push(this.newItem)
      this.newItem = null
    },
    myArray: function () {
      var a = [1, 21, 3, 5, 34, 8, 55, 1, 2, 13]
      return a
    }
  }
}
</script>

<style scoped>
  @import '../../styles/pages.css';

  .tips-hr {
    border: #E6E6FA dotted 8px;
    border-bottom: none;
  }
</style>
