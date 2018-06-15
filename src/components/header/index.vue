<template>
  <div>
    <div class="header">
      <div class="logo" :class="{'collapse': isCollapse}">
        <span v-if="!isCollapse">Admin</span>
        <span v-else>A</span>
      </div>
      <div class="right-option">
        <div class="avatar">
          <img src="../../assets/img/userdefault.jpg" alt="">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: #fff;cursor: pointer;">
              UserName<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    line-height: 60px;
    background-color: #409EFF;
    padding-right: 40px;
    color: #fff;
  }
  .logo {
    float: left;
    width: 200px;
    text-align: center;
    font-size: 30px;
    -webkit-transition: width 1s;
    -moz-transition: width 1s;
    -ms-transition: width 1s;
    -o-transition: width 1s;
    transition: width 1s;
  }
  .right-option {
    float: right;
  }
  .avatar {
    padding: 0 20px;
  }
  .avatar img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    padding: 8px;
    float: left;
  }
  .collapse {
    width: 64px!important;
  }
</style>
