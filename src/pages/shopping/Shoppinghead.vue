<template lang="html">
	<div class="shopping_nav">
		<div class="icon1" @click="goback">
			<img src="https://r.ytrss.com/mobile/img/usercenter/backarrow.png" alt="" />
		</div>
		<router-link to="/index" class="icon2" tag="div">
			<i></i>
		</router-link>
		<div class="center">{{navName}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navName:this.$store.state.navName
			}
		},
		methods: {
			goback(){
				window.history.back();
			}
		}
	}
</script>
