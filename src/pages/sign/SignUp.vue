<template lang="html">
  <div class="m-signup">
  <Getbacknav></Getbacknav>
    <form class="reg-form" action="/api/register" method="post">
      <yt-field type="text" placeholder="请输入手机号" name="phonenum"></yt-field>
      <yt-field type="text" placeholder="请输入验证码">
        <mt-button plain size="small" @click.prevent="getCaptche" style="width:1rem">{{text}}</mt-button>
      </yt-field>
      <yt-field type="password" placeholder="请设置银泰护照密码" name="password"></yt-field>
      <yt-field type="password" placeholder="请再次确认银泰护照密码"></yt-field>
      <p class="useExplain">请为护照设置密码（6到12位，英文+数字）</p>
      <p class="useExplain">注册关联银泰护照后您可使用护照直接登录银泰网。银泰护照即银泰百货会员，注册后，在银泰百货商场可享受会员待遇，并可共享积分等。</p>
      <div class="reg-button-box">
        <input class="reg-button" type="submit" value="创建银泰护照">
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
Vue.component('yt-msgbox', MessageBox)
export default {
  data() {
    return {
      title: '注册护照',
      time:0
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
    this.$store.commit('navName', '注册');
  },
  components:{
    Getbacknav
  }
}
</script>
