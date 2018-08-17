/**
* 创建于 2018/7/4
* 作者: ZhangKaixi
* 功能: Vue基本指令测试
*/
<template>
<div>
  <h1>V-bind（可省略，即直接写作:）</h1>
  <hr>
  <div class="flex-column">
    <div class="my-form">
      <h2>示例6：用v-bind绑定元素属性</h2>
      <div class="flex-row">
        <div class="box" style="width: 100%">
          <h3>&hearts;&nbsp;绑定元素属性：v-bind</h3>
          <p>v-bind指令可用于绑定元素的各种属性，比如 :src&emsp;:class&emsp;:value&emsp;:style&emsp;:key 等等</p>
          <div class="center-layout show-bg2">
            <span>请设置皮卡丘的高度：&emsp;</span>
            <el-slider v-model="setHeight" :min="80" :max="250" style="width: 80%;"></el-slider>
          </div>
          <div class="flex-row">
            <!----------------- 示例6-1 : 绑定元素属性 ------------------>
            <div v-for="(item, index) in picList" :key="index" style="margin: 10px;">
              <img :src="item.pic" :height="setHeight+'px'" :style="'border-radius: '+ setHeight/2 +'px'"/>
              <div style="text-align: center" v-text="item.description"></div>
            </div>
          </div>
        </div>
      </div>
      <h2>示例7：v-bind:class详解</h2>
      <div class="flex-row">
        <div class="box" style="width: 500px;">
          <h3>&hearts;&nbsp;数组语法：v-bind:class="classVar"</h3>
          <p>classVar为存储样式名称的变量（可以被写为三元表达式）：</p>
          <!----------------- 示例7-1 ：样式绑定：三元表达式写法 ------------------>
          <input type="radio" v-model="setStyle1" value=""/>
          <span :class="(setStyle1==='') ? 'active-class' : 'inactive-class'">无样式</span>&emsp;
          <input type="radio" v-model="setStyle1" value="tips"/>
          <span :class="(setStyle1==='tips') ? 'active-class' : 'inactive-class'">便签主题(tips)</span>&emsp;
          <input type="radio" v-model="setStyle1" value="test-box"/>
          <span :class="(setStyle1==='test-box') ? 'active-class' : 'inactive-class'">黄色主题(test-box)</span>
          <br/><br/>
          <!----------------- 示例7-2 ：样式绑定：数组语法 ------------------>
          <div :class="[setStyle1, setStyle2, setStyle3, setStyle4]">
            这句话的样式： class="<span style="color: green;">{{ styleString1 }}</span> "
          </div>
          <p>classVar也可以是包含多个样式变量的数组：</p>
          <input type="checkbox" v-model="setStyle2"/>蓝色字体(blue)<br/>
          <input type="checkbox" v-model="setStyle3"/>居中布局(center-layout)<br/>
          <input type="checkbox" v-model="setStyle4"/>背景图片(show-bg)
          <br/>
        </div>
        <div class="box" style="width: 500px;">
          <h3>&hearts;&nbsp;对象语法：v-bind:class=“{ activeClass : isActive }”</h3>
          <p>可以控制单个样式（例如test-box）是否被显示：</p>
          test-box:
          <input type="radio" v-model="showStyle1" :value="false"/>false&emsp;
          <input type="radio" v-model="showStyle1" :value="true"/>true&emsp;<br/><br/>
          <!----------------- 示例7-3 ：样式绑定：对象语法 ------------------>
          <div :class="{ 'test-box': showStyle1, 'blue': showStyle2, 'center-layout': showStyle3, 'show-bg': showStyle4 }">
            这句话的样式： class="<span style="color: green;">{{ styleString2 }}</span> "
          </div>
          <p>也可以控制多个样式：</p>
          <input type="checkbox" v-model="showStyle2"/>蓝色字体(blue)<br/>
          <input type="checkbox" v-model="showStyle3"/>居中布局(center-layout)<br/>
          <input type="checkbox" v-model="showStyle4"/>背景图片(show-bg)
          <br/>
        </div>
        <div class="tips" style="margin-left: 40px;">
          <!----------------- 示例7-4 ：样式绑定：普通用法 ------------------>
          <div class="test-box" :class="setStyle5" style="outline: lightpink dotted 10px;">
            class 和 v-bind:class 和 style三个属性可以共存
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Directives3',
  data () {
    return {
      name: 'Directives3',
      setStyle1: 'test-box',
      setStyle2: '',
      setStyle3: '',
      setStyle4: '',
      showStyle1: true,
      showStyle2: false,
      showStyle3: false,
      showStyle4: false,
      setStyle5: 'show-bg',
      setHeight: 120,
      picList: [
        { pic: require('../../assets/img/pikachu1.jpg'),
          description: '包在我身上' },
        { pic: require('../../assets/img/pikachu2.jpeg'),
          description: '快看那里有个丑八怪' },
        { pic: require('../../assets/img/pikachu3.gif'),
          description: '哇！智障！' },
        { pic: require('../../assets/img/pikachu4.jpeg'),
          description: '身边都是SB' },
        { pic: require('../../assets/img/pikachu5.gif'),
          description: '气到发电' },
        { pic: require('../../assets/img/pikachu6.gif'),
          description: '好！我滚！' }
      ]
    }
  },
  watch: {
    setStyle2: function (val) {
      this.setStyle2 = val ? 'blue' : ''
    },
    setStyle3: function (val) {
      this.setStyle3 = val ? 'center-layout' : ''
    },
    setStyle4: function (val) {
      this.setStyle4 = val ? 'show-bg' : ''
    }
  },
  computed: {
    styleString1: function () {
      return (this.setStyle1 + '  ' + this.setStyle2 + '  ' + this.setStyle3 + '  ' + this.setStyle4)
    },
    styleString2: function () {
      var str = ''
      str = str + (this.showStyle1 ? 'test-box ' : '')
      str = str + (this.showStyle2 ? 'blue ' : '')
      str = str + (this.showStyle3 ? 'center-layout ' : '')
      str = str + (this.showStyle4 ? 'show-bg ' : '')
      return str
    }
  }
}
</script>

<style scoped>
  @import '../../styles/pages.css';

  .blue {
    color: skyblue;
    font-family: "Comic Sans MS";
  }
  .show-bg {
    background-image: url("../../assets/img/carrotbg.jpg");
    background-size: cover;
  }
  .show-bg2 {
    background-color: white;
    border-radius: 10px;
  }
  .active-class {
    padding: 5px;
    color: green;
    background-color: lightyellow;
    border: green solid 1px;
    border-radius: 3px;
  }
  .inactive-class {
    padding: 5px;
    color: red;
    border: red solid 1px;
    border-radius: 3px;
  }

</style>
