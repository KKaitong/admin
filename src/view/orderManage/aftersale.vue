<template>
  <section>
    <div class="page-header">
      <el-breadcrumb class="header-breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
        <el-breadcrumb-item>售后列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-inner">
      <div class="container">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      msg: '售后列表',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
