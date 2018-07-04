<template>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 10}"
          placeholder="Enter your message"
          v-model="textarea3">
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input
          prefix-icon="el-icon-message"
          size="medium"
          placeholder="Enter ETH wallet recipient"
          v-model="input10"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileList3"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">Choose files with a size less than 64Go</div>
        </el-upload>
      </el-col>
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
      input10: '',
      textarea3: '',
      fileList3: [{
        name: 'photo.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'testament.pdf',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'movie.mp4',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  methods: {
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    }
  }
}
</script>