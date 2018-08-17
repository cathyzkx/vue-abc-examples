<template>
<div :class="isCollapse ? 'close' : 'open'">
  <div class="sidebar">
    <div class="switch center-layout" @click="isCollapse = !isCollapse">
      <img v-if="isCollapse === true"
           src="@/assets/icon/hide.svg" width="30px" style="transform:rotate(180deg); margin: 0;"/>
      <img v-if="isCollapse === false"
           src="@/assets/icon/hide.svg" height="30px"/>
      <span v-if="isCollapse === false">&nbsp;CLOSE</span>
    </div>
    <el-menu default-active="1-1"
             class="el-menu-vertical-demo"
             text-color="green"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">
      <el-submenu v-for="(chief, chiefInd) in menuList"
                  :key="chiefInd"
                  :index="(chiefInd+1).toString()">
        <template slot="title">
          <img :src="chief.icon" width="30px"/>&nbsp;
          <span slot="title"
                class="my-title"
                v-text="chief.title1"></span>
        </template>
        <el-submenu v-for="(vice, viceInd) in chief.subList"
                    :key="viceInd"
                    :index="(chiefInd+1)+'-'+(viceInd+1)">
            <span slot="title">
              <img src="@/assets/icon/title2.svg" width="30px"/>&nbsp;
              <span v-text="vice.title2"></span>
            </span>
            <router-link v-for="(child, childInd) in vice.childList"
                         :key="childInd"
                         :to="child.link">
              <el-menu-item :index="(chiefInd+1)+'-'+(viceInd+1)+'-'+(childInd+1)">
                <img src="@/assets/icon/title3.svg" width="20px" />
                {{ child.title3 }}
              </el-menu-item>
            </router-link>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      isCollapse: false,
      menuList: [{
        icon: require('../assets/icon/v.svg'),
        title1: 'Vue.js',
        subList: [
          {
            title2: 'Vue指令',
            childList: [
              {
                link: '/vue/directives/1',
                title3: 'v-text / v-html / {{ }}'
              }, {
                link: '/vue/directives/1',
                title3: 'v-if / v-else / v-show'
              }, {
                link: '/vue/directives/1',
                title3: 'v-for'
              }, {
                link: '/vue/directives/2',
                title3: 'v-model'
              }, {
                link: '/vue/directives/2',
                title3: 'v-on'
              }, {
                link: '/vue/directives/3',
                title3: 'v-bind'
              }]
          },
          {
            title2: '全局API',
            childList: [
              {
                link: '/vue/globalAPI/1',
                title3: '全局API'
              }]
          }]
      },
      {
        icon: require('../assets/icon/tool.svg'),
        title1: '工具包',
        subList: [{
          title2: 'JsBarcode',
          childList: [
            {
              link: '/tool/JsBarcode',
              title3: '条码生成'
            }]
        },
        {
          title2: '第三方登录',
          childList: [
            {
              link: '/tool/login',
              title3: '微信'
            }]
        }]
      },
      {
        icon: require('../assets/icon/doc.svg'),
        title1: '指南',
        subList: [{
          title2: '',
          childList: [
            {
              link: '',
              title3: ''
            }]
        }]
      }
      /*
      , {
          icon: require('../assets/icon/star.svg'),
          title1: '',
          subList: [{
            title2: '',
            childList: [{
              link: '',
              title3: ''
            }]
          }]
        }
      */
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles/pages.css';

  .sidebar {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    border: rgb(216, 191, 216) solid 1px;
  }
  .switch {
    background-color: rgba(216, 191, 216, 1);
    height: 56px;
    font-size: 24px;
    color: #ffffff;
  }
  .open {
    width: 240px;
    transition: width 0.5s;
  }
  .close {
    width: 70px;
    transition: width 0.5s;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 100vh;
  }
  .el-menu--collapse {
    width: 70px;
  }
  .my-title {
    color: thistle;
    font-size: 26px;
  }
  a {
    text-decoration: none;
  }
  .el-menu-item {
    padding-left: 78px !important;
    img {
      display: none;
    }
  }
  .el-menu-item:focus, .el-menu-item:hover, .el-menu-item.is-active{
    outline: 0;
    padding-left: 46px !important;
    font-size: 16px;
    background-color: rgba(216, 191, 216, 0.2);
    img {
      display: inline;
      margin-right: 8px;
    }
  }
  .el-menu-item.is-active {
    color: green;
    font-size: 16px;
    background-color: rgba(216, 191, 216, 0.6);
  }
</style>
