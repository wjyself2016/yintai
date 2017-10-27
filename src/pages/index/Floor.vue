<template lang="html">
	<div class="floor-list">
		<!--<div class="loading">
			<mt-spinner type="triple-bounce" color="#e5004f" :size="35" v-if="isShowloading"></mt-spinner>
		</div>-->
		<div class="brand" v-for="(list,i) in dataList" :key="i">
			<div v-if="list.items.length==1" class="floor-head">
				<img  :src="list.items[0].imgurl" />
			</div>
			<div v-if="list.items.length>1" class="TwoImgAverage">
				<router-link :to="{name:'goodsdetail',params:{id:12}}" tag="div" class="ImgAverage" v-for="(item,i) in list.items" :key="i">
					<img :src="item.imgurl"/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Spinner } from 'mint-ui';
    Vue.component(Spinner.name, Spinner);
    
	import axios from 'axios'
	export default{
		data(){
			return{
				dataList:[],
				isShowloading:true
			}
		},
		mounted(){
			axios.get('/Services/Proxy.ashx?r=201710241515&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
			.then((res)=>{
				const da=res.data.data.templatelist;
				const data=da.slice(6);
				this.dataList=data;
				this.isShowloading=false;
			})
		}
	}
</script>

<style lang="css">
	
</style>