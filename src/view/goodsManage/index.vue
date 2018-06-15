<template>
  <div>
    <el-row :gutter="10" style="margin: 20px 0">
      <el-col :span="6"><el-input v-model="input" placeholder="关键字"></el-input></el-col>
      <el-col :span="6"><el-input v-model="input" placeholder="商品名称"></el-input></el-col>
      <el-col :span="3"><el-button type="primary">添加</el-button></el-col>
    </el-row>
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

<script>
export default {
  name: 'GoodsManage',
  data () {
    return {
      msg: '商品管理',
      input: '',
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
