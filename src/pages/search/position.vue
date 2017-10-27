<template lang="html">
		<div>
			<ul class="template-ul">
				<li v-for="(value,index) in toplist" @click="selectDiv(index)" :class="{active:isActive(index)}"><b>{{value}}</b></li>
			</ul>
			<!--<list></list>-->
			<no-pro></no-pro>
			<commonFooter></commonFooter>
		</div>
</template>

<script>
	import commonFooter from '../hot/common-footer.vue'
	import list from './list.vue'
	import noPro from './noproduct.vue'
	export default{
		props:{
			toplist:{
				type:Array
			}
		},
		data(){
			return{
				currentlist:0,
				datatree:null
			}
		},
		methods:{
			selectDiv(index){
				this.currentlist = index;
			},
			isActive(index){
				return index == this.currentlist;
			},
			repeat(){
				axios.get('api/Services/Proxy.ashx?r='+this.r+'&type='+this.typearr[this.divdata]+'&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1')
					.then((res)=>{
					this.datathree = res.data.data.productlist;
				})
				axios.
			}
		},
		computed:{
			
		},
		components:{
			list,
			commonFooter,
			noPro
		}
		
	}
</script>
