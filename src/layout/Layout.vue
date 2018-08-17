<template>
  <el-container class="bg" style="min-width: 1480px;">
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
  @import '../styles/pages.css';

</style>
