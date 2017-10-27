<template lang="html">
	<div  class="no-product list-div">
		<div class="empty-img">
		</div>
		<p>没有找到您要的内容~</p>
		<div class="cover" v-if="isShow">
			<div class="alert-div">
				<p>温馨提示</p>
				<p>暂无商品信息</p>
				<p @click="changeTab">确定</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:true
			}
		},
		methods:{
			changeTab(){
				this.isShow=false
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>