<template lang="html">
	<div>
		<div class="nav">
			<div class="left" @click="goback">
				<img src="https://r.ytrss.com/mobile/img/usercenter/backarrow.png" alt="" />
			</div>
			<div class="center">{{navName}}</div>
			<div class="right" @click="showNav"><span></span></div>
			<div class="verticalnav" v-if="isShow">
				<ul>
			        <router-link to="/index" tag="li">
			          <i class="index"></i>
			          <b>银泰首页</b>
			        </router-link>
			        <router-link to="/classify" tag="li">
			          <i class="category"></i>
			          <b>分类</b>
			        </router-link>
			        <router-link to="/shopping" tag="li">
			          <i class="shopcar"></i>
			          <b>购物车</b>
			        </router-link>
			       	<router-link to="/mine" tag="li">
			          <i class="mine"></i>
			          <b>我的首页</b>
			        </router-link>
		      	</ul>
			</div>
		</div>
		<div class="cover" v-if="isShow"></div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				navName:this.$store.state.navName
			}
		},
		methods: {
			showNav(){
				this.isShow = !this.isShow
			},
			goback(){
				window.history.back();
			}
		}
	}
</script>
