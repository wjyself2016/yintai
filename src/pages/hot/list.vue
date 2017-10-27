<template lang="html">
	<div class="hot-inner">
		<ul v-if="0 == divdata||1 == divdata||3 == divdata||4 == divdata" >
			<template v-for="val in data">
				<li class="hot-select-one" v-for="value in val.activitylist">
					<a href="#">
						<img :src="value.imgurl" alt="" />
					</a>
					<span class="pos-img">{{value.discount}}</span>
					<p>
						<span>{{value.name}}</span>
						<span class="allday" v-if="Math.floor((value.leftsecond)/3600/24)>0">剩<b>{{Math.floor((value.leftsecond)/3600/24)}}</b>天</span>
						<span class="allday" v-if="Math.floor((value.leftsecond)/3600/24)==0 && divdata!=4">剩<b>{{Math.floor((value.leftsecond)/3600)}}</b>小时</span>
						<span class="allday" v-if="divdata==4">{{dateTime(val.starttime)}}</span>
					</p>
				</li>
			</template>
		</ul>
		<div v-if="2 == divdata">
			<search :datathree="datathree"></search>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import search from './product.vue'
	export default{
		props:{
			divdata:{
				type:Number,
				require:true
			}
		},
		components:{
			search
		},
		data(){
			return{
				data:null,
				r:Math.random(),
				page_index:1,
				num:0,
				typearr:[5,1,3,4,2],
				datathree:null
			}
		},
		updated(){
			if(this.num!=this.divdata){
				if(this.divdata!=2){
					this.repeat();
				}else{
					this.threeAxios();
				}
				
			}
		},
		methods:{
			repeat(){
				axios.get('Services/Proxy.ashx?r='+this.r+'&type='+this.typearr[this.divdata]+'&page_index='+this.page_index+'&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1')
				.then((res)=>{
				this.data = res.data.data.activityinfo;
				this.num = this.divdata;
				})
			},
			threeAxios(){
				axios.get('Services/Proxy.ashx?r='+this.r+'&type='+this.typearr[this.divdata]+'&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1')
				.then((res)=>{
				this.datathree = res.data.data.productlist;
				this.num = this.divdata;
				})
			},
			dateTime(value){
				const dateArr = value.split('').splice(9,6);
				let str = '';
				for(let i in dateArr){
					str += dateArr[i];
				}
				return str;
			}
		},
		mounted(){
			this.repeat();
		}
	}
</script>
<style>
	
</style>
