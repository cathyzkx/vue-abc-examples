import Vue from 'vue'

// 创建构造器
export var Profile = Vue.extend({
  template: '<p>{{myString}}</p>',
  data: function () {
    return {
      myString: '构造器已被挂载'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
