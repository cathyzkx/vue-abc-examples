/**
* 创建于 2018/7/4
* 作者: ZhangKaixi
* 功能: Vue基本指令测试
*/
<template>
<div class="bg">
  <h1>表单元素</h1>
  <hr>
  <div class="flex-column">
    <div class="my-form">
      <h2>示例1：用Vue进行插值：v-text / v-html / Mustache语法（双大括号法）</h2>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;v-text</h3>
          <!----------------- 示例1-1 ------------------>
          <span v-text="vText" class="test-box">这句话不会被显示</span>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;v-html</h3>
          <!----------------- 示例1-2 ------------------>
          <div v-html="vHTML" class="test-box">这句话也不会被显示</div>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;双大括号</h3>
          <!----------------- 示例1-3 ------------------>
          <span class="test-box">{{ mustache+'这句话会被显示哦!' }}</span>
        </div>
      </div>

      <h2>示例2：条件渲染：v-if / v-else / v-show</h2>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;v-if & v-else</h3>
          <span>v-if="&ensp;{{ vIf }}&ensp;"&ensp;&ensp;</span>
          <input type="radio" :value="true" v-model="vIf" checked/>true&ensp;
          <input type="radio" :value="false" v-model="vIf"/>false
          <br/><br/>
          <!----------------- 示例2-1 ------------------>
          <span v-if="vIf" class="test-box">v-if所作用的DOM被显示</span>
          <span v-else="" class="test-box" style="background-color: lightblue;">这是v-else显示的结果</span>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;v-show</h3>
          <span>v-show="&ensp;{{ vShow }}&ensp;"&ensp;&ensp;</span>
          <input type="radio" :value="true" v-model="vShow" checked/>true&ensp;&ensp;
          <input type="radio" :value="false" v-model="vShow"/>false
          <br/><br/>
          <!----------------- 示例2-2 ------------------>
          <span v-if="vShow" class="test-box">v-show所作用的DOM被显示</span>
        </div>
      </div>

      <h2>示例3：列表渲染：v-for</h2>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;v-for</h3>
          {{ vForItems }}<br/><br/>
          这是一个数组 ↑ ↑ ↑ 我们用v-for实现循环输出 ↓ ↓ ↓ <br/>
          <div class="test-box">
            <!----------------- 示例2-3 ------------------>
            <li v-for="(item,index) in vForItems" :key="index">
              <span style="color: skyblue;">{{ item }}</span> is the
              <span style="color: limegreen;">{{ index + 1 }}</span>th day of a week
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Directives1',
  data () {
    return {
      name: 'DirectivesTest',
      vText: '这句话是用v-text指令显示的',
      vHTML: '这段话是用v-HTML指令显示的，<br>字符串中的&nbsp;html&nbsp;标签能被正确解析。',
      mustache: '这句话是用双大括号显示的。',
      vIf: true,
      vShow: true,
      vForItems: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  }
}
</script>

<style scoped>
  @import '../styles/pages.css';
</style>
