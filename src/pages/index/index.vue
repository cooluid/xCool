<template>
  <div class="wrapper">
    <div class="icon">
      <img :src="user.avatarUrl">
    </div>
    <span>{{user.nickName}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        user: {}
      }
    },
    created () {
      this.$wxp.getUserInfo().then(res => {
        this.user = res.userInfo
        console.log(this.user)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    color: #cc
    text-align: center

  .icon
    text-align: center
</style>
