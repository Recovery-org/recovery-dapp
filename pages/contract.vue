<template>
  <el-main>
    <el-form ref="form" :rules="rules" :model="form" label-position="top" label-width="120px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="Message" prop="message">
            <el-input
              type="textarea"
              :autosize="{ minRows: 10, maxRows: 10}"
              placeholder="Enter your message"
              v-model="form.message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Recipient Wallet" prop="recipientWallet">
            <el-input
              prefix-icon="el-icon-message"
              placeholder="Enter ETH recipient wallet"
              v-model="form.recipientWallet"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="Execution Mode" prop="mode">
            <el-radio-group v-model="form.mode">
              <el-radio label="1" border >Activation Date</el-radio>
              <el-radio label="2" border>Dead Man's Switch</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Create</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Documents">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="form.fileList"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
              <div class="el-upload__tip" slot="tip">Choose files with a size less than 64Go</div>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
import ethereumAddress from 'ethereum-address'

export default {
  data () {
    var valideWallet = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the ETH recipient wallet'))
      } else {
        if (value !== '' && ethereumAddress.isAddress(value)) {
          callback()
        } else {
          callback(new Error('Please input a valid ETH address wallet'))
        }
      }
    }
    return {
      form: {
        message: '',
        recipientWallet: '',
        mode: '',
        fileList: [{
          name: 'photo.jpeg'
        }, {
          name: 'testament.pdf'
        }, {
          name: 'movie.mp4'
        }]
      },
      rules: {
        message: [
          { required: true, message: 'Please input a message', trigger: 'blur' }
        ],
        recipientWallet: [
          { required: true, validator: valideWallet, trigger: 'blur' }
        ],
        mode: [
          { required: true, message: 'Please select an execution mode', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>