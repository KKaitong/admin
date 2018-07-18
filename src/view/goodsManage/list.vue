<template>
  <section>
    <div class="page-header">
      <el-breadcrumb class="header-breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goods/list' }">商品管理 </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-inner">
      <div class="container">
        <el-row :gutter="10" style="margin: 20px 0">
          <el-col :span="6"><el-input v-model="keyword" placeholder="关键字"></el-input></el-col>
          <el-col :span="6"><el-input v-model="name" placeholder="商品名称"></el-input></el-col>
          <el-col :span="6">
            <el-button type="primary"><i class="fa fa-plus"></i> 查询</el-button>
            <el-button type="primary"><i class="fa fa-plus"></i> <router-link to="/goods/add">添加</router-link></el-button>
          </el-col>
        </el-row>
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="日期">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      msg: '商品管理',
      keyword: '',
      name: '',
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
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
