<template lang="html">
	<div>
		<div class="shuf-list">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="(list,i) in swipeList" :key="i">
			    	<img :src="list.imgurl"/></mt-swipe-item>
			    </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="nav-list">
			<ul>
				<template v-for="(list,i) in funcList" >
					<li @click.native="chooseId(j,cutpageid(item.jumpurl))"   v-for="(item,j) in list.items" :key="i">
						<router-link :to="{name:'classdetail',query:{jumpurl:cutpageid(item.jumpurl)}}" v-if="j!=4">
							<img :src="item.imgurl"/>
							<p>{{item.imgname}}</p>
					    </router-link>
					    <router-link :to="{name:'salelife',query:{jumpurl:cutpageid(item.jumpurl)}}" v-else>
							<img :src="item.imgurl"/>
							<p>{{item.imgname}}</p>
					    </router-link>
					</li>
					
				</template>
			</ul>
		</div>
		<div class="recommend">
			<p>爆款专区，每日十点推荐</p>
			<span>更多<i class="yo-ico">&#xe503;</i></span>
		</div>
		<div class="loading">
			<mt-spinner type="triple-bounce" color="#e5004f" :size="35" v-if="isShowloading"></mt-spinner>
		</div>
		<NewProduct :snap-list="snapList"></NewProduct>
		<div class="message">
			<div class="anno" @click="">
				2017年10月北京地区发货通知
			</div>
		</div>
		<div class="floor">
			<Floor></Floor>
		</div>
		<div >
			<Product :data-list="getdatalist()"></Product>
			<!--<Product></Product>-->
		</div>
	</div>
</template>

<script>
import Product from './Product.vue';
import Floor from './Floor.vue';
import NewProduct from './NewProduct.vue';
import axios from 'axios'
import Vue from 'vue'
import axiosUtil from '../../utils/axios.util.js'

import {Spinner, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Spinner.name, Spinner);

export default {
	props:["id",'onButtonInfo'],
	data(){
	  	return {
	  		snapList:[],
	  		swipeList:[],
	  		dataList:[],
	  		funcList:[],
	  		jumpurl:'',
	  		isShowloading:true
	  	}
	},
  methods:{
  	showCityList() {
  		this.$router.push('/city');
  	},
  	cutpageid(url){//截取pageid
  		const value = url.replace(/[^0-9]/ig,''); 
  		const jumpurl=value.slice(8,16);
  		return jumpurl;
  	},
  	getdatalist(){
		const data=this.dataList.slice(9,17);
		return data;
	},
	chooseId(index,pageid){
		if(index==4){
			this.$router.push({ name: 'salelife', query: { jumpurl: pageid }});
		}
	}
  },
  components: {
    Product,
    Floor,
    NewProduct
  },
  mounted(){
	axios.get('/Services/Proxy.ashx?r=201710230824&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			const da=res.data.data.templatelist;
			const data=da.slice(3,4);
			const funcdata=da.slice(0,1);
			this.snapList=data;
			this.funcList=funcdata;
			this.isShowloading=false;
	});
	
   	axios.get('/Services/Proxy.ashx?r=201710231422&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			const da=res.data.data.bannerlist;
			this.swipeList=da;
	});
	axiosUtil.getClassDetail(this,'/Services/Proxy.ashx?r=201710222127&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2');
	
/*	axiosUtil.getClassDetail(this,'/Services/Proxy.ashx?r=201710230824&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1');
*/	
  }
  
}
</script>