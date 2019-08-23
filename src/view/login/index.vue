<template>
  <div class="container">
    <el-card class="box-card">
      <img src="../../assets/image/logo_index.png" alt />
      <el-form ref="form" :model="form">
        <el-form-item>
            <el-input v-model="form.name" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.code" placeholder="请输入手机号" style="width:260px;margin-right:10px"></el-input>
            <el-button type="primary">验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox :value="true">已阅读并同意以上条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/image/login_bg.jpg) no-repeat center/cover;
  .box-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 350px;
    img {
      display: block;
      width: 200px;
      margin: 0 auto 20px;
    }
  }
}
</style>
