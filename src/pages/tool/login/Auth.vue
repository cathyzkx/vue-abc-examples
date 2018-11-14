<template>
    <div>
      <!--<a v-if="!signState" href="#" v-on:click="saveURL">登录</a>-->
      <!--<a v-else v-on:click="logout" href="#">注销</a>-->
    </div>
</template>

<script>
// const Qs = require('qs')

export default {
  name: 'Auth',
  data () {
    return {
      client_id: 'wx9a2703efefc55179',
      client_secret: 'b183737f133fc3cfad3ee702034ea60d',
      scope: 'read:user', // Grants access to read a user's profile data.
      state: 'your state',
      getCodeURL: 'https://github.com/login/oauth/authorize',
      getAccessTokenURL: '/github/login/oauth/access_token',
      getUserURl: 'https://api.github.com/user',
      redirectURL: null,
      code: null,
      accessToken: null,
      signState: false
    }
  }
  /*
  created: function () {
    this.getCode()
    // when code in url
    if (this.code) this.getAccessToken()
    else {
      // if no code in top, get accessToken from cookie
      this.accessToken = this.$cookie.get('accessToken')
      if (this.accessToken) this.getUser()
    }
  },
  methods: {
    // https://open.weixin.qq.com/connect/qrconnect?
    // appid=wx9a2703efefc55179&scope=snsapi_login&
    // redirect_uri=http://passport.panda-fa.com&
    // state=&login_type=jssdk&
    // self_redirect=true&style=black
    saveURL: function () {
      if (Qs.parse(location.search).state !== this.state) {
        this.$cookie.set('redirectURL', location.href, 1)
        location.href = this.getCodeURL
      }
    },
    // 获取地址栏携带的code参数的处理
    // http://passport.panda-fa.com/?code=0010cGf21OX9pP166Wh21nVvf210cGfQ&state=
    getCode: function () {
      this.getCodeURL += ('?' + Qs.stringify({
        client_id: this.client_id,
        scope: this.scope,
        state: this.state
      }))
      let parse = Qs.parse(location.search)
      if (parse.state === this.state) {
        this.code = parse.code
      }
    },
    // 利用code获取accesstoken的处理
    getAccessToken: function () {
      this.axios.post(this.getAccessTokenURL, {
        client_id: this.client_id,
        client_secret: this.client_secret,
        code: this.code,
        state: this.state
      }).then((response) => {
        this.accessToken = response.data.access_token
        if (this.accessToken) {
          // save to cookie 30 days
          this.$cookie.set('accessToken', this.accessToken, 30)
          this.redirectURL = this.$cookie.get('redirectURL')
          if (this.redirectURL) {
            location.href = this.redirectURL
          }
        }
      })
    }
  },
  // 利用accesstoken获取用户信息的处理
  getUser: function () {
    this.axios.get(this.getUserURl + '?access_token=' + this.accessToken)
      .then((response) => {
        let data = response.data
        this.signState = true
        // call parent login event
        this.$emit('loginEvent', {
          login: data.login,
          avatar: data.avatar_url,
          name: data.name
        })
      })
      // invaild accessToken
      .catch((error) => {
        console.log(error)
        this.$cookie.delete('accessToken')
      })
  },
  logout: function () {
    this.$cookie.delete('accessToken')
    this.signState = false
    this.$emit('logoutEvent')
  }
  */
}
</script>

<style scoped>

</style>
