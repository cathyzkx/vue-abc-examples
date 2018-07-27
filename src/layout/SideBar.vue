<template>
<div :class="isCollapse ? 'close' : 'open'">
  <div class="sidebar">
    <el-menu default-active="1-1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <img src="../assets/logo.png" height="30px"/>
          <span slot="title" class="my-title">&nbsp;Vue.js</span>
        </template>
        <el-submenu index="1-1">
          <span slot="title">Vue指令</span>
          <router-link to="/vue/directives/1">
            <el-menu-item index="1-1-1" v-text="'v-text / v-html / {{ }}'"></el-menu-item>
          </router-link>
          <router-link to="/vue/directives/1">
            <el-menu-item index="1-1-2">v-if / v-else / v-show</el-menu-item>
          </router-link>
          <router-link to="/vue/directives/1">
            <el-menu-item index="1-1-3">v-for</el-menu-item>
          </router-link>
          <router-link to="/vue/directives/2">
            <el-menu-item index="1-1-4">v-model</el-menu-item>
          </router-link>
          <router-link to="/vue/directives/2">
            <el-menu-item index="1-1-5">v-on</el-menu-item>
          </router-link>
          <router-link to="/vue/directives/3">
            <el-menu-item index="1-1-6">v-bind</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="1-2">
          <span slot="title">全局API</span>
          <router-link to="/vue/globalAPI/1">
            <el-menu-item index="1-2-1">全局API</el-menu-item>
          </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span slot="title" class="my-title">&nbsp;Vue插件</span>
        </template>
        <el-submenu index="2-1">
          <span slot="title">JsBarcode</span>
          <router-link to="/plugin/JsBarcode">
            <el-menu-item index="1-1-1">JsBarcode</el-menu-item>
          </router-link>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="switch center-layout" @click="isCollapse = !isCollapse">
      <i v-if="isCollapse === true" class="el-icon-arrow-right" style="color: white;"></i>
      <i v-if="isCollapse === false" class="el-icon-arrow-left" style="color: white;"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  @import '../styles/pages.css';

  .sidebar {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    background-color: lavender;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
  }
  .el-menu--collapse {
    width: 72px;
    min-height: 400px;
  }
  .switch {
    background-color: #DCDFE6;
    width:20px;
    height: 100vh;
    min-height: 400px;
  }
  .open {
    width: 240px;
    transition: width 0.5s;
  }
  .close {
    width: 80px;
    transition: width 0.5s;
  }
  .my-title {
    color: green;
    font-size: 26px;
  }
  a {
    text-decoration: none;
  }
</style>
