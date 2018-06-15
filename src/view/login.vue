<template>
  <div>
    <div class="login-box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  created () {
    document.body.style.backgroundImage = 'url(./static/img/bg.jpg)'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>

<style scoped>
 .login-box {
   position: absolute;
   width: 600px;
   height: 400px;
   background-color: #fff;
   border-radius: 10px;
   margin: 260px auto 0;
   right: 0;
   left: 0;
 }
</style>
