<template>
  <div class="index-container">
    <el-container style="height: 100%">
      <el-header style="border-bottom: 1px solid #dfdfdf;padding: 0">
        <Header :isCollapse="isCollapse"></Header>
      </el-header>
      <el-container style="height: calc(100% - 100px)">
        <el-aside class="side-menu" :class="{'collapse': isCollapse}">
          <el-scrollbar class="page-component__scroll">
            <side-menu :menulist="menuList"></side-menu>
          </el-scrollbar>
        </el-aside>
        <el-main style="padding: 0;margin-bottom: -17px;background-color: #f2f2f2">
          <el-scrollbar class="page-component__scroll">
            <div>
              <div class="page-header">
                <el-breadcrumb class="header-breadcrumb" separator="/">
                  <el-breadcrumb-item v-if="i.name !== '首页'" v-for="(i,k) in breadMenu" :key="k" :to="{ path: i.path }">{{ i.name ?  i.name : '首页'}}</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div style="padding: 0 17px 17px">
                <router-view/>
              </div>
            </div>
          </el-scrollbar>
        </el-main>
      </el-container>
      <!--<el-footer style="background-color: #f2f2f2;height: 40px;z-index: 1">-->
        <!--<Footer></Footer>-->
      <!--</el-footer>-->
    </el-container>
  </div>
</template>

<script>
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import SideMenu from '../components/menu/index'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'index',
  components: {Footer, Header, SideMenu},
  data () {
    return {
      menuList: [],
      breadMenu: []
    }
  },
  created () {
    let vue = this
    document.body.style.backgroundImage = 'none'
    vue.getPath()
    if (vue.$localStorage.fetch('userInfo')) {
      vue.getMenu()
    } else {
      // vue.needLogin()
    }
  },
  mounted () {
    let vue = this
    window.onresize = () => {
      if (document.body.clientWidth < 768) {
        vue.updateCollapse(true)
      } else {
        vue.updateCollapse(false)
      }
    }
  },
  computed: {
    ...mapState(['isCollapse']),
    title () {
      return this.$route.name
    }
    // ,
    // breadMenu () {
    //   console.log(this.$route.matched)
    //   return this.$route.matched
    // }
  },
  watch: {
    '$route': 'getPath'
  },
  methods: {
    ...mapActions(['updateCollapse']),
    getPath () {
      this.breadMenu = this.$route.matched
    },
    needLogin () {
      let vue = this
      vue.$alert('需要登陆', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          if (action === 'confirm') {
            vue.$router.push({path: 'login'})
          }
          this.$message({
            type: 'info',
            message: `action:${action}`
          })
        }
      })
    },
    getMenu () {
      console.log('get menu')
    }
  },
  updated () {
    // console.log(this.$route)
  }
}
</script>

<style scoped lang="scss">
 .index-container {
   height: 100%;
 }
 .page-header {
   margin-bottom: 15px;
 }
 .header-breadcrumb {
   padding: 17px;
   background-color: #fff;
 }
 .side-menu {
   background-color: #545c64;
   width: 200px!important;
   margin-bottom: -17px;
   -webkit-transition:width .8s;
 }
 .collapse {
   width: 64px!important;
 }
  .page-component__scroll {
    height: 100%;
  }
 .page-component__scroll .el-scrollbar__wrap {
   overflow-y: auto;
 }
</style>
