<template>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input
          prefix-icon="el-icon-message"
          size="medium"
          placeholder="Enter ETH wallet recipient"
          v-model="input10"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </el-main>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
      margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
export default {
  data () {
    return {
      input10: ''
    }
  }
}
</script>