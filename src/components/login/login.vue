<template>
  <div id="login">
    <div class="title">
      <h3>登录</h3>
    </div>
    <div class="loginMess">
      <input class="message" type="text" name="name" placeholder="请输入你的姓名" v-model="form.name">
      <div class="warn" v-show="issubmit && !form.name">姓名不能为空</div>
      <input class="message" type="text" name="pass" placeholder="请输入你的QQ号" v-model="form.qq">
      <div class="warn" v-show="issubmit && !form.qq">qq号不能为空</div>
    </div>
    <div class="button">
      <button @click="toQuit">取消</button>
      <!-- <button>取消</button> -->
      <button @click="toSubmit">确定</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        issubmit: false,
        form: {
          name: '',
          qq: '',
          hasLogin: false
        }
      }
    }
  }
</script>
