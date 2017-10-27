<template lang="html">
  <div class="loginbyhu">
    <form class="huform" method="post" action="/api/loginbyhz">
      <div class="phonenum-box">
        <img src="https://h5.yintai.com/m/images/ueser-img-75da284743.png" alt="">
        <input type="text" name="phonenum" value="" placeholder="请输入银泰护照号(手机号)" v-model="phonenum">
      </div>
      <div class="password-box">
        <img src="https://h5.yintai.com/m/images/pass-img-c8ba68915f.png" alt="">
        <input type="password" name="password" value="" placeholder="请输入密码" v-model="password">
      </div>
      <div class="loginbtn-box">
        <input type="button" name="" value="登录" @click="toLogin()">
      </div>
    </form>
    <div class="findpwd-reg">
      <router-link to="/forgetpass" tag="a" class="findpwd">忘记密码?</router-link>
      <router-link to="/signup" tag="a" class="reg">注册</router-link>
    </div>
    <p class="ythz-desc">
      银泰护照即银泰门店会员账号，一般为手机号，如未设置过密码或忘记密码可点击“忘记密码”进行找回。
    </p>
    <p class="ythz-desc">
      <span>推荐您使用银泰护照进行登录。</span>使用银泰护照登录，将可在线享受银泰会员的一些权益，并与您线上账号进行关联，确保您的会员权益最大化。
    </p>
    <div class="mint-indicator" style="display: none;">
    </div>
  </div>
</template>
<script>
// import '../../../media/images/ueser-img.png'
// import '../../../media/images/pass-img.png'
import { Indicator } from "mint-ui";
import axiosUtil from "../../utils/axios.util.js";
import MessageBox from "../../components/MessageBox";
export default {
  data() {
    return {
      phonenum: "",
      password: "",
      loginstatus: ""
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
    toLogin() {
      axiosUtil.login(this.phonenum, this.password, "/api/loginbyhz", this)
    }
  },
  watch: {
    loginstatus(val) {
      console.log(val)
      if (val === 0) {
        MessageBox.alert("用户名或密码错误", "提示")
      } else {
        this.$router.push({path:"/mine"})
      }
    }
  }
};
</script>
