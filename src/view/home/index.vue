<template>
  <section>
    <div class="page-header">
      <el-breadcrumb class="header-breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-inner">
      <div class="container"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '首页'
    }
  },
  computed: {

  },
  created () {
  }
}
</script>

<style lang="scss">
  @import "../../style/style";
  .label-self {
    padding: 10px;
    background-color: $warning;
    color: $default;
  }
</style>
