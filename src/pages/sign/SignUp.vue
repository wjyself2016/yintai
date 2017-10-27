<template lang="html">
  <div class="m-signup">
  <Getbacknav></Getbacknav>
    <form class="reg-form" action="/api/register" method="post">
      <yt-field type="text" placeholder="请输入手机号" name="phonenum" :model="getInputValue"></yt-field>
      <yt-field type="text" placeholder="请输入验证码" name="captche" :model="getInputValue">
        <mt-button plain size="small" @click.prevent="getCaptche" style="width:1rem">{{text}}</mt-button>
      </yt-field>
      <yt-field type="password" placeholder="请设置银泰护照密码" name="password" :model="getInputValue"></yt-field>
      <yt-field type="password" placeholder="请再次确认银泰护照密码" name="repassword" :model="getInputValue"></yt-field>
      <p class="useExplain">请为护照设置密码（6到12位，英文+数字）</p>
      <p class="useExplain">注册关联银泰护照后您可使用护照直接登录银泰网。银泰护照即银泰百货会员，注册后，在银泰百货商场可享受会员待遇，并可共享积分等。</p>
      <div class="reg-button-box">
        <input :class="['reg-button',{'active':isSamePwd}]" type="button" value="创建银泰护照" @click="toRegister">
      </div>
    </form>
    <div class="mint-indicator" style="display: none;"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { Indicator } from "mint-ui";
import Field from "../../components/Field.vue";
import MessageBox from "../../components/MessageBox";
import Getbacknav from "../../components/getbacknav.vue";
import axiosUtil from "../../utils/axios.util.js";
Vue.component("yt-field", Field);
Vue.component("yt-msgbox", MessageBox);
export default {
  data() {
    return {
      title: "注册护照",
      time: 0,
      phonenum: "",
      password: "",
      repassword: "",
      captche: "",
      checkcaptche: "",
      registerstatus: ""
    };
  },
  beforemount() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
  },
  mounted() {
    Indicator.close();
  },
  methods: {
    getCaptche() {
      this.checkcaptche = "256422";
      MessageBox.alert("已发送验证码", "提示");
      this.run(60);
    },
    run: function(second) {
      this.time = second;
      this.timer();
    },
    timer: function() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    getInputValue(name, val) {
      switch (name) {
        case "password":
          this.password = val;
          break;
        case "repassword":
          this.repassword = val;
          break;
        case "phonenum":
          this.phonenum = val;
          break;
        case "captche":
          this.captche = val;
          break;
      }
    },
    toRegister() {
      if (this.isSamePwd) {
        if (this.phonenum === "" || this.phonenum === null) {
          MessageBox.alert("请输入用户名", "提示");
        } else {
          if (this.checkcaptche === this.captche) {
            if (this.isSamePwd) {
              if (/[A-Za-z0-9]{6,9}/.test(this.password)) {
                axiosUtil.register(
                  this.phonenum,
                  this.password,
                  "/api/register",
                  this
                );
              } else {
                MessageBox.alert("密码格式不正确", "提示");
              }
            } else {
              MessageBox.alert("两次密码输入不一致", "提示");
            }
          } else {
            MessageBox.alert("验证码输入有误", "提示");
          }
        }
      }
    }
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s" : "获取验证码";
    },
    isSamePwd: function() {
      return this.password !== "" ? this.password === this.repassword : false;
    }
  },
  created() {
    this.$store.commit("navName", "注册");
  },
  components: {
    Getbacknav
  },
  watch: {
    registerstatus(val) {
      console.log(val);
      if (val === 0) {
        MessageBox.alert("注册失败", "提示");
      } else {
        this.$router.push({ path: "/mine" });
      }
    }
  }
};
</script>
