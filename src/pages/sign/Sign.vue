<template>
<div class="m-login">
  <Getbacknav></Getbacknav>
  <section>
    <div class="logintab">
      <ul>
        <router-link to="/loginbyhu" tag="li">{{tabname_hu}}<b></b></router-link>
        <router-link to="/loginbyacc" tag="li">{{tabname_acc}}</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </section>
  <footer class="login-footer">
    <p>
      客服电话：
      <a href="#">400-119-1111</a> （8:00-24:00）
    </p>
  </footer>
</div>
</template>

<script>
import Vue from 'vue'
import { Header,Button} from 'mint-ui'
import Getbacknav from '../../components/getbacknav.vue';

Vue.component(Header.name, Header)
Vue.component(Button.name,Button)
export default {
  data() {
    return {
      title: '登录',
      tabname_hu: '银泰护照',
      tabname_acc: '银泰网账号'
    }
  },
  methods: {

  },
  components:{
    Getbacknav
  },
  created() {
    this.$store.commit('navName', '登录');
  }
}
</script>
