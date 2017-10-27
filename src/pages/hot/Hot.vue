<template lang="html">
	<div class="m-hot">
		<header>
			<getbacknav></getbacknav>
		</header>
		<section>
			<!--<top :topli="toplist"></top>-->
			<position :toplist="toplist">
			</position>	
		</section>
	</div>
</template>

<script>
	import position from './position.vue'
	import Getbacknav from '../../components/getbacknav.vue';
	export default {
		data() {
			return {
				toplist:["推荐","最新","特卖爆推","倒计时","预告"]
			}
		},
		methods: {

		},
		components: {
    		position,
    		Getbacknav
  		},
  		created(){
  			this.$store.commit('navName','抢先');
  		}
	}
</script>
