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
				<template tag="li" v-for="(list,i) in funcList" >
					<li v-for="(item,i) in list.items" :key="i">
						<img :src="item.imgurl"/>
						<p>{{item.imgname}}</p>
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
		<div class="pro-list">
			<ul class="inlist">
				<li v-for="(list,i) in snapList" :key="i">
					<router-link :to="{name:'goodsdetail',query:{itemCode:item.itemid}}" tag="dl" v-for="(item,i) in list.items" :key="i">
						<dt>
							<img :src="item.imgurl"/>
						</dt>
						<dd>
							<p>{{item.extra.productdetail.name}}</p>
							<span>{{"￥"+item.extra.productdetail.price}}</span>
						</dd>
						<template  v-for="(list,i) in item.extra.productdetail.prmotionlist" >
						    <div class="pro-prom">{{list.plabel}}</div>
				 		</template>
					</router-link>
			   </li>
			</ul>
		</div>
		<div class="message">
			<div class="anno" @click="">
				2017年10月北京地区发货通知
			</div>
		</div>
		<div class="floor">
			<Floor></Floor>
		</div>
		<div class="product">
			<Product></Product>
		</div>
	</div>
</template>

<script>
import Product from './Product.vue';
import Floor from './Floor.vue';
import axios from 'axios'
import Vue from 'vue'

import {Spinner, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Spinner.name, Spinner);

export default {
  //props:["id",'onButtonInfo'],
  data(){
  	return {
  		snapList:[],
  		swipeList:[],
  		funcList:[],
  		isShowloading:true,
  		//cityName:this.$route.push.cityName||'全国'
  	}
  },
  methods:{
  	showCityList() {
  		this.$router.push('/city');
  	}
  },
  components: {
    Product,
    Floor
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
		})
   }
}
</script>