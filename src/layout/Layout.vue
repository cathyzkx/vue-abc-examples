<template>
  <el-container>
    <el-aside style="width: auto;">
      <SideBar></SideBar>
    </el-aside>
    <el-main>
      <MainPage></MainPage>
    </el-main>
  </el-container>
</template>

<script>
import { SideBar, MainPage } from '@/layout'

export default {
  name: 'Layout',
  components: {
    SideBar,
    MainPage
  }
}
</script>

<style scoped>
.el-main {
  padding: 0;
  margin: 0;
}
</style>
