<template>
  <div>
    <div class="toggle-container" :class="{'iscollapse': isCollapse}" @click="toggleMenu">
      <i class="el-icon-caret-left"  ></i>
    </div>
    <el-menu class="el-menu-vertical"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :default-active="activeMenu"
             router
             :collapse="isCollapse">
      <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/admin/goodslist">
        <i class="el-icon-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-submenu  index="/admin/order">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item index="/admin/orderlist">订单管理</el-menu-item>
        <el-menu-item index="/admin/aftersale">售后管理</el-menu-item>
      </el-submenu>
      <!--<el-menu-item index="4">-->
        <!--<i class="el-icon-news"></i>-->
        <!--<span slot="title">店铺管理</span>-->
      <!--</el-menu-item>-->
      <!--<el-submenu index="5">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-location"></i>-->
          <!--<span slot="title">邮费管理</span>-->
        <!--</template>-->
        <!--<el-menu-item index="5-1">包邮设置</el-menu-item>-->
        <!--<el-menu-item index="5-2">运费设置</el-menu-item>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="6">-->
        <!--<i class="el-icon-bell"></i>-->
        <!--<span slot="title">专题活动</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="7">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">首页设置</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="8">-->
        <!--<i class="el-icon-picture"></i>-->
        <!--<span slot="title">轮播图设置</span>-->
      <!--</el-menu-item>-->
      <!--<el-submenu index="9">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-star-off"></i>-->
          <!--<span slot="title">优惠券管理</span>-->
        <!--</template>-->
        <!--<el-menu-item index="9-1">普通优惠券</el-menu-item>-->
        <!--<el-menu-item index="9-2">Vip优惠券</el-menu-item>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="10">-->
        <!--<i class="el-icon-edit"></i>-->
        <!--<span slot="title">店员管理</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="11">-->
        <!--<i class="el-icon-info"></i>-->
        <!--<span slot="title">储值卡管理</span>-->
      <!--</el-menu-item>-->
      <el-menu-item index="/admin/user">
        <i class="el-icon-info"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SideMenu',
  props: {
    menulist: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapState(['isCollapse']),
    activeMenu () {
      // console.log(this.$route)
      return this.$route.path
    }
  },
  methods: {
    ...mapActions(['updateCollapse']),
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    toggleMenu () {
      this.updateCollapse(!this.isCollapse)
    }
  }
}
</script>

<style scoped lang="scss">
  .toggle-container {
    text-align: center;
    background-color: #545c64;
    height: 34px;
    line-height: 34px;
    color: #fff;
    border-bottom: 1px solid #3f3f3f;
  }
  .toggle-container i {
    transition: transform .3s;
    -webkit-transition: transform .3s;
  }
  .iscollapse i {
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu-vertical{
    height: 100%;
  }
  .el-menu {
    border-right: none;
  }
</style>
