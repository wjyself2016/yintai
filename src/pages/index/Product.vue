<template lang="html">
	<div class="list">
		<div class="loading">
			<mt-spinner type="triple-bounce" color="#e5004f" :size="35" v-if="isShowloading"></mt-spinner>
		</div>
		<ul class="pro-show">
            <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
			<li v-for="(list,i) in dataList" :key="i">
				<router-link :to="{name:'goodsdetail',query:{itemCode:item.itemid}}" tag="dl" v-for="(item,i) in list.items" :key="i">
					<dt>
						<img :src="item.imgurl"/>
					</dt>
					<dd v-if="item.extra.productdetail.name">
						<p class="pro-name">{{item.extra.productdetail.name}}</p>	
						<p class="pro-price"><span>{{"￥"+item.extra.productdetail.price}}</span><b>{{"￥"+item.extra.productdetail.marketprice}}</b></p>
					</dd>
			    </router-link>
		    </li>
			</mt-loadmore>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import { Loadmore,Spinner } from 'mint-ui';
    Vue.component(Spinner.name, Spinner);
    Vue.component(Loadmore.name, Loadmore);
    
	export default{
		data(){
			return{
				dataList:[],
				isShowloading:true,
				
				allLoaded: false,

		        bottomStatus: '',
		        wrapperHeight: 0,
		
		        topStatus: '',
		        //wrapperHeight: 0,
		        translate: 0,
		        moveTranslate: 0
			}
		},
		methods: {
		    gotoDetail(positionId) {
		      this.$router.push({name: 'detail', params: { id: positionId}})
		    },
		    loadTop(){
		      axios.get('/Services/Proxy.ashx?r=201710222127&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2')
		        .then((res)=>{
					const da=res.data.data.templatelist;
					const data=da.slice(10,20);
					this.dataList=data.concat(this.dataList);
					this.isShowloading=false;
				})
		    },
		
		    handleBottomChange(status) {
		      this.bottomStatus = status;
		    },
		
		    loadBottom() {
		      axios.get('/Services/Proxy.ashx?r=201710222127&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2')
		        .then((res)=>{
					const da=res.data.data.templatelist;
					const data=da.slice(11,20);
					this.dataList = this.dataList.concat(data);
					this.isShowloading=false;
				})
		    },
		
		    handleTopChange(status) {
		      this.moveTranslate = 1;
		      this.topStatus = status;
		    },
		
		    translateChange(translate) {
		      const translateNum = +translate;
		      this.translate = translateNum.toFixed(2);
		      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
		    }
		  },
		mounted(){
			axios.get('/Services/Proxy.ashx?r=201710222127&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2')
			.then((res)=>{
				const da=res.data.data.templatelist;
				const data=da.slice(10,17);
				this.dataList=data;
				this.isShowloading=false;
			})
		}
	}
</script>
