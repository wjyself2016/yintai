<template lang="html">
  <div class="m-forgetpass">
    <Getbacknav></Getbacknav>
    <div class="warm-tips">
        请输入手机号进行验证和重置密码
    </div>
    <form class="reset-form" action="" method="post">
      <yt-field type="text" placeholder="请输入手机号" name="phonenum" :model="getInputValue"></yt-field>
      <yt-field type="text" placeholder="请输入验证码" name="captche" :model="getInputValue">
        <mt-button plain size="small" @click.prevent="getCaptche" style="width:1rem">{{text}}</mt-button>
      </yt-field>
      <yt-field type="password" placeholder="请设置或输入护照密码" name="password" :model="getInputValue"></yt-field>
      <p class="useExplain">请设置密码（6到12位，英文+数字）</p>
      <p class="useExplain redFont">如果您已关联银泰网和银泰护照账号，重置密码将同时重置两个账号的密码。</p>
      <p class="useExplain redFont">温馨提示：邮箱找回密码功能已下线，邮箱注册用户请通过已绑定手机号找回密码，如果未绑定手机，请联系客服找回400-119-1111</p>
      <div class="reset-button-box">
        <input :class="['reset-button', {'active':isShowBtn}]" type="button" name="" value="重置密码" @click="resetPass">
      </div>
    </form>
    <div class="mint-indicator" style="display: none;">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Indicator
} from 'mint-ui'
import Field from '../../components/Field.vue'
import MessageBox from "../../components/MessageBox"
import Getbacknav from '../../components/getbacknav.vue';
import axiosUtil from "../../utils/axios.util.js";
Vue.component('yt-field', Field)
export default {
  data() {
    return {
      title: '忘记密码',
      time: 0,
      phonenum:'',
      password:'',
      captche:'',
      checkcaptche:'',
      updatestatus:''
    }
  },
  beforemount() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
  },
  mounted() {
    Indicator.close()
  },
  methods: {
    getCaptche() {
      this.checkcaptche = '256422'
      MessageBox.alert('已发送验证码', '提示')
      this.run(60)
    },
    run: function(second) {
      this.time = second
      this.timer()
    },
    timer: function() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    getInputValue(name,val){
      switch (name){
        case 'password':this.password = val;break;
        case 'repassword':this.repassword = val;break;
        case 'phonenum':this.phonenum = val;break;
        case 'captche':this.captche = val;break;
      }
    },
    resetPass(){
      if(this.isShowBtn){
        if(this.phonenum === '' || this.phonenum === null){
          MessageBox.alert('请输入用户名','提示')
        }else{
          if(this.checkcaptche === this.captche){
            if(/[A-Za-z0-9]{6,9}/.test(this.password)){
              axiosUtil.update(this.phonenum, this.password, "/api/forgetpass", this)
            }else{
              MessageBox.alert('密码格式不正确','提示')
            }
          }else{
            MessageBox.alert('验证码输入有误','提示')
          }
        }
      }
    }
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + 's' : '获取验证码';
    },
    isShowBtn(){
      return this.phonenum !== '' && this.captche !== '' && this.password !== ''
    }
  },
  created() {
    this.$store.commit('navName', '忘记密码');
  },
  components:{
    Getbacknav
  },
  watch:{
    updatestatus(val) {
        console.log(val);
        if (val === 0) {
          MessageBox.alert("重置密码失败", "提示");
        } else {
          this.$router.push({ path: "/mine" });
        }
      }
    }
}
</script>
