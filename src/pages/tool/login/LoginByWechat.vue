<template>
  <div class="center-layout" style="height: 500px;">
    <!--<wxlogin :appid="wechatLogin.appid" :scope="wechatLogin.scope" :redirect_uri="wechatLogin.redirect_uri" :theme="wechatLogin.style" class="wx-login-box"></wxlogin>-->
  </div>
</template>

<script>
// import wxlogin from 'vue-wxlogin'
const Qs = require('qs')

export default {
  name: 'LoginByWechat',
  // components: { wxlogin },
  data () {
    return {
      wechatLogin: {
        appid: 'wx9a2703efefc55179',
        scope: 'snsapi_login',
        redirect_uri: 'http://passport.panda-fa.com',
        state: '',
        style: 'black',
        href: ''
      },
      requestAccessTokenURL: 'https://api.weixin.qq.com/sns/oauth2/access_token?'
    }
  },
  mounted () {

  },
  methods: {
    // 获取地址栏携带的code参数的处理
    // http://passport.panda-fa.com/?code=0010cGf21OX9pP166Wh21nVvf210cGfQ&state=
    getCode: function () {
      this.requestAccessTokenURL += ('?' + Qs.stringify({
        client_id: this.client_id,
        scope: this.scope,
        state: this.state
      }))
      let parse = Qs.parse(location.search)
      if (parse.state === this.state) {
        this.code = parse.code
      }
    }
  }
}
</script>

<style scoped>
  @import '../../../styles/pages.css';

  .wx-login-box {
    height: 300px;
    width: 300px;
  }
</style>
