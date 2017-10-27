<template lang="html">
  <div class="m-forgetpass">
  <Getbacknav></Getbacknav>
    <div class="warm-tips">
        请输入手机号进行验证和重置密码
    </div>
    <form class="reset-form" action="" method="post">
      <yt-field type="text" placeholder="请输入手机号"></yt-field>
      <yt-field type="text" placeholder="请输入验证码">
        <mt-button plain size="small" @click.prevent="getCaptche" style="width:1rem">{{text}}</mt-button>
      </yt-field>
      <yt-field type="text" placeholder="请设置或输入护照密码"></yt-field>
      <p class="useExplain">请设置密码（6到12位，英文+数字）</p>
      <p class="useExplain redFont">如果您已关联银泰网和银泰护照账号，重置密码将同时重置两个账号的密码。</p>
      <p class="useExplain redFont">温馨提示：邮箱找回密码功能已下线，邮箱注册用户请通过已绑定手机号找回密码，如果未绑定手机，请联系客服找回400-119-1111</p>
      <div class="reset-button-box">
        <input class="reset-button" type="button" name="" value="重置密码">
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
Vue.component('yt-field', Field)
export default {
  data() {
    return {
      title: '忘记密码',
      time: 0
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
    }
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + 's' : '获取验证码';
    }
  },
  created() {
    this.$store.commit('navName', '忘记密码');
  },
  components:{
    Getbacknav
  }
}
</script>
