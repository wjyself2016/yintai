<template>
  <div class="hello">
     <ul>
      <router-link to="/index" tag="li">
        <i class="yo-ico">&#xe62e;</i>
        <b>首页</b>
      </router-link>
      <router-link to="/hot" tag="li">
        <i class="yo-ico">&#xe626;</i>
        <b>抢先</b>
      </router-link>
      <router-link to="/classify" tag="li">
        <i class="yo-ico">&#xe603;</i>
        <b>分类</b>
      </router-link>
      <router-link to="/shopping" tag="li">
        <i class="yo-ico">&#xe606;</i>
        <b>购物车</b>
      </router-link>
      <router-link to="/mine" tag="li">
        <i class="yo-ico">&#xe601;</i>
        <b>我的银泰</b>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
    
    }
  }
}
</script>


