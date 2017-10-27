<template lang="html">
	<div class="m-mine">
		<getbacknav></getbacknav>
		<div class="yt-user-info">
			<div class="yt-user-img">
				<!-- <img src="https://h5.yintai.com/m/images/user-head-72656860b5.png" alt=""> -->
				<img src="../../assets/images/user-head.png" alt="">
			</div>
			<div class="yt-user-name">
				{{username}}
			</div>
			<p class="yt-user-level">
				{{userlevel}}
			</p>
		</div>
		<div class="yt-user-order">
			<ul>
				<li>
					<span class="iconfont">&#xe89a;</span>
					<span>全部订单</span>
				</li>
				<li>
					<span class="iconfont">&#xe89e;</span>
					<span>待付款</span>
				</li>
				<li>
					<span class="iconfont">&#xe671;</span>
					<span>待收货</span>
				</li>
				<li>
					<span class="iconfont">&#xe885;</span>
					<span>退换货</span>
				</li>
			</ul>
		</div>
		<div class="yt-user-money">
			<ul>
				<li>
					<span>0</span>
					<span>积分</span>
				</li>
				<li>
					<span>0.00</span>
					<span>银元</span>
				</li>
				<li>
					<span>0.00</span>
					<span>余额</span>
				</li>
			</ul>
		</div>
		<div class="yt-user-other">
			<ul>
				<li class="yt-card">
					<i class="yt-card-icon"></i>
					<div>
						<span>银泰卡</span>
						<span>已登记0张</span>
					</div>
				</li>
				<li class="yt-youhui">
					<i class="yt-card-icon"></i>
					<div>
						<span>优惠券</span>
						<span>0张有效</span>
					</div>
				</li>
				<li class="yt-huzhao">
					<i class="yt-card-icon"></i>
					<div>
						<span>银泰护照</span>
						<span>185*****205</span>
					</div>
				</li>
				<li class="yt-phone">
					<i class="yt-card-icon"></i>
					<div>
						<span>手机号</span>
						<span>185*****205</span>
					</div>
				</li>
			</ul>
		</div>

		<div class="yt-user-other">
			<ul>
				<li class="yt-card">
					<i class="iconfont yt-other-icon">&#xe669;</i>
					<div>
						<span >收藏</span>
					</div>
				</li>
				<li class="yt-youhui">
					<i class="iconfont yt-other-icon">&#xe64d;</i>
					<div>
						<span>浏览记录</span>
					</div>
				</li>
				<li class="yt-huzhao">
					<i class="iconfont yt-other-icon">&#xe637;</i>
					<div>
						<span>支付密码</span>
					</div>
				</li>
				<li class="yt-phone ">
					<i class="iconfont yt-other-icon">&#xe885;</i>
					<div>
						<span>收货地址</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="yt-user-common">
			<mt-cell title="帮助中心" to="" is-link value=""></mt-cell>
			<mt-cell title="客服电话" to="" is-link value=""><i class="pink">400-119-1111</i>(8:00-24:00)</mt-cell>
		</div>
		<div class="yt-user-common">
			<mt-cell title="下载银泰网客户端" to="" is-link value=""></mt-cell>
		</div>
		<div class="yt-user-logout">
			<div class="yt-user-logoutbtn">
				退出登录
			</div>
		</div>
	</div>
</template>

<script>
import Getbacknav from '../../components/getbacknav.vue';
import TableBar from '../../components/tablebar.vue'

import '../../assets/images/user-center-img.png'
import '../../assets/images/user-center-img-1.png'
import '../../assets/images/user-center-img-2.png'
import '../../assets/images/user-center-img-4.png'
import '../../assets/images/user-head.png'

import '../../assets/iconfont/mine.ttf'
import '../../assets/iconfont/mine.woff'

import Vue from 'vue'
import {
  Cell
} from 'mint-ui';

Vue.component(Cell.name, Cell);

export default {
	data() {
    return {
      title: '我的银泰',
      username: 'Artorias',
      userlevel: '普卡会员'
    }
  },
  methods: {

  },
  components: {
    Getbacknav,
		TableBar
  },
  created() {
    this.$store.commit('navName', '我的银泰');
  }
}
</script>
