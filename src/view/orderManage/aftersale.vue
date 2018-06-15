<template>
  <div>
    <div class="page-header">
      <span class="header-title">{{ msg }}</span>
      <el-breadcrumb class="header-breadcrumb" separator="/">
        <el-breadcrumb-item>售后列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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
</template>

<style scoped>
  .page-header {
    margin-bottom: 15px;
  }
  .header-title {
    font-size: 30px;
  }
  .header-breadcrumb {
    float: right;
    padding-top: 15px;
  }
</style>

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
