<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" class="label-self">{{ msg }}</el-col>
      <el-col :span="6" class="label-self">内容</el-col>
      <el-col :span="6" class="label-self">内容</el-col>
      <el-col :span="6" class="label-self">内容</el-col>
    </el-row>
    <i class="iconfont icon-check-circle"></i>
  </div>
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
