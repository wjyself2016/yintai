<template lang="html">
  <div class="loginbyhu">
    <form class="huform" action="/api/loginbyhz" method="post">
      <div class="phonenum-box">
        <img src="https://h5.yintai.com/m/images/ueser-img-75da284743.png" alt="">
        <input type="text" name="phonenum" value="" placeholder="请输入银泰护照号(手机号)">
      </div>
      <div class="password-box">
        <img src="https://h5.yintai.com/m/images/pass-img-c8ba68915f.png" alt="">
        <input type="password" name="password" value="" placeholder="请输入密码">
      </div>
      <div class="loginbtn-box">
        <input type="submit" name="" value="登录">
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
import {Indicator} from 'mint-ui'
export default{
  data(){
    return {

    }
  },
  beforemount(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
  },
  mounted() {
    Indicator.close()
  }
}
</script>
