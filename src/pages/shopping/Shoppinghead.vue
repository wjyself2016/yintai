<template lang="html">
	<div class="shopping_nav">
		<div class="icon1" @click="goback">
			<img src="https://r.ytrss.com/mobile/img/usercenter/backarrow.png" alt="" />
		</div>
		<router-link to="/index" class="icon2" tag="div">
			<i></i>
		</router-link>
		<div class="center">{{navName}}</div>
		<div v-if="!isEmpty" class="icon3" @click="changeOperate">
			<span v-if="!isOperate">编辑</span>
			<span v-if="isOperate">完成</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navName:this.$store.state.navName,
				isOperate:false
			}
		},
		methods: {
			goback(){
				window.history.back();
			},
			changeOperate(){
				this.isOperate = !this.isOperate;
			}
		},
		props: {
			isEmpty:{
				type:Boolean,
				required:true
			}
		}
	}
</script>
