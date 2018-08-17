/**
* 创建于 2018/7/6
* 作者: ZhangKaixi
* 功能: Vue全局API示例
*/
<template>
<div>
  <h1>全局API用法示例</h1>
  <hr>
  <div class="flex-column">
    <div class="my-form">

      <h2>示例1----Vue.directive：自定义指令</h2>
      <div class="flex-row">
        <div class="box">
          <h3>&hearts;&nbsp;自定义v-focus指令：用于页面加载后自动获得焦点</h3>
          <div class="test-box">
            这是一个普通的文本框：
            <input type="text"/><br/>
            v - focus 作用的文本框：
            <input type="text" v-focus placeholder="（默认获得焦点）"/>
          </div>
        </div>
        <div class="box">
          <h3>&hearts;&nbsp;自定义v-fontColor指令，用于指定字体颜色</h3>
          <input type="radio" v-model="setColor" value="red"/>红色&emsp;
          <input type="radio" v-model="setColor" value="blue"/>蓝色&emsp;
          <input type="radio" v-model="setColor" value="orange"/>橙色&emsp;
          <input type="radio" v-model="setColor" value="purple"/>紫色&emsp;
          <br/>
          <div class="test-box">
            <span :v-fontColor="setColor">请选择文字颜色：v-fontColor="{{ setColor + (typeof setColor)}}"</span>
          </div>
        </div>
      </div>
      <hr>
      <h2>示例2----Vue.extend：构造器的延伸</h2>
      <div class="flex-row">
        <div class="box">
          <div id="myTemp1"></div> <!-- 挂载方法1： new MyExtend().$mount('#myTemp1') -->
          <myTemp2></myTemp2> <!-- 挂载方法2：new MyExtend().$mount('myTemp2') -->
        </div>
      </div>

      <hr>
      <h2>示例3----Vue.set：全局操作</h2>
      <div class="flex-row">
        <div class="box">
          <input type="button" value="-" @click="setData.setCount--"/>&ensp;&ensp;
          {{ setData.setCount }}&ensp;&ensp;
          <input type="button" @click="setAdd" value="+"/><br/><br/>
          {{ setData.setArr[0] + setData.setArr[1] + setData.setArr[2]}}<br/>
          <input type="button" @click="setChange" value="改变数组"/>
        </div>
        <div class="box">
          为什么要有Vue.set的存在?<br/>
          由于Javascript的限制，Vue不能自动检测以下变动的数组。<br/>
          *当你利用索引直接设置一个项时，vue不会为我们自动更新。<br/>
          *当你修改数组的长度时，vue不会为我们自动更新。
        </div>
      </div>

      <hr>
      <h2>示例4----Vue.component：全局化注册组件</h2>
      <div class="flex-row">
        <div class="box">
          <h3>这是一个被全局注册的组件：
            <portal></portal>
          </h3>
          <span>组件portal可被全局引用。</span><br/>
          <span>（页面顶端的“回到主页”是在App.vue中被挂载的）</span>
        </div>
        <div class="box">
          <!--localComponent是一个被局部注册的组件-->
          <local-component info="这是在组件内用props选项定义的属性"></local-component>
        </div>
        <div class="box">
          <component :is="componentToShow"></component>
        </div>
      </div>

      <hr>
      <h2>模板标题</h2>
      <div class="flex-row">
        <div class="box">
          模板内容
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

// ------------------------------------------------------------------------
// 组件挂载示例：通过<component>标签的is属性来挂载组件
// outComponent的代码放在了这个位置，因为组件的定义需放在被使用之前（它在组件GlobalAPI中的component中被使用）
// ------------------------------------------------------------------------
var outComponent = {
  template: '<div>' +
  '<span>组件是可以嵌套的,不信你看：</span>' +
  '<portal></portal><br/>' +
  '<span>我在组件outComponent里嵌套了组件portal</span>' +
  '</div>'
}

// ------------------------------------------------------------------------
// -------------- GlobalAPI -----------------------------------------------
// ------------------------------------------------------------------------
export default {
  name: 'GlobalAPI',
  data () {
    return {
      setData,
      setColor: 'red',
      componentToShow: 'outComponent'
    }
  },
  mounted () {
    // Vue.extend：创建 MyExtend 实例，并挂载到 myTemp 元素上。
    new MyExtend().$mount('#myTemp1') // 方法1 ↑ ↑ ↑ 对应于<div id="myTemp1"></div>
    new MyExtend().$mount('myTemp2') // 方法2 ↑ ↑ ↑ 对应于<myTemp2></myTemp2>
  },
  methods: {
    setAdd: function () { // Vue.set用法示例1
      Vue.set(setData, 'setCount', setData.setCount + 1)
    },
    setChange: function () {
      setChange() // Vue.set用法示例2 ↓ ↓ ↓ (见函数setChange())
    }
  },
  components: { // 这是一种局部注册组件的方法
    'localComponent': {
      template: '<div><h3>对比：这是一个被局部注册的组件</h3><br/><span>{{ info }}</span></div>',
      props: ['info']
    },
    'outComponent': outComponent
  }
}

// ------------------------------------------------------------------------
// -------------- Vue.directive：自定义指令 ---------------------------------
// ------------------------------------------------------------------------
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('fontColor', {
  bind: function () {
    console.log('1: bind----只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。')
  },
  inserted: function (el, binding) {
    el.style = 'color:' + binding.value // 设定文字颜色
    console.log('2: inserted----被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。')
    console.log('typeof bind value:' + typeof binding.value)
  },
  update: function () {
    console.log('3: update----所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。')
  },
  componentUpdated: function () {
    console.log('4: componentUpdated----指令所在组件的 VNode 及其子 VNode 全部更新后调用。')
  },
  unbind: function () {
    console.log('5: unbind----只调用一次，指令与元素解绑时调用。')
  }
})

// ------------------------------------------------------------------------
// -------------- Vue.extend：构造器的延伸 ----------------------------------
// ------------------------------------------------------------------------
var MyExtend = Vue.extend({ // 需要被挂载才能显示效果 ↑ ↑ ↑（见mounted()）
  template: '<p>{{ extendString }}</p>',
  data: function () {
    return {
      extendString: 'Vue.extend在这里'
    }
  }
})

// ------------------------------------------------------------------------
// -------------- Vue.set：全局操作 ----------------------------------
// ------------------------------------------------------------------------
var setData = {
  setCount: 1,
  flag: false,
  setArr: ['Vue.set：', '全局操作：', '在这里']
}
function setChange () {
  if (setData.flag === false) {
    Vue.set(setData.setArr, 1, '改变后：')
    Vue.set(setData.setArr, 2, '去吧皮卡丘')
  } else {
    Vue.set(setData.setArr, 1, '变回来了：')
    Vue.set(setData.setArr, 2, '皮卡丘又变回了原来的样子')
  }
  setData.flag = !setData.flag
}

// ------------------------------------------------------------------------
// -------------- Vue.component：全局化注册组件 ---------------------------------
// ------------------------------------------------------------------------
Vue.component('portal', {
  template: '<span style="text-align: left;"><a href="..">回到主页</a></span>'
})

</script>

<style scoped>
  @import '../../styles/pages.css';
</style>
