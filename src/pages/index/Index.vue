<template lang="html">
	<div class="m-index">
		<header>
			<div class="logo">
				<img src="../../assets/images/newlogo.png" />
			</div>
			<div class="search">
				<input value="" placeholder="搜索商品或品牌" />
				<span><i class="yo-ico">&#xe60b;</i></span>
			</div>
			<div class="my">
				<i class="yo-ico">&#xe644;</i>
			</div>
		</header>
		<section>
			<Position></Position>
		</section>
	</div>
</template>

<script>
	import '../../assets/iconfont/iconfont.ttf';
	import '../../assets/iconfont/iconfont.woff'

	import Position from './Position.vue'
	import VueRouter from 'vue-router'
	import axios from 'axios'

	export default {
		data() {
			return {

			}
		},
		components: {
			Position,
		}
	}
</script>
