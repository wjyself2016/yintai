<template lang="html">
	<div class="classdetail">
		<header>
			<Getbacknav></Getbacknav>
		</header>
		<section>
			<!--<top :topli="toplist"></top>-->
			<ul>
				<li v-for="list in getfloorList" class="vipimg">
					<template v-for="item in list.items">
						<!--商场同款栏目-->
				        <dl v-if="list.templateid==20016712" class="classnav">
							<dt><img :src="item.imgurl"/></dt>
							<dd>{{item.imgname}}</dd>
						</dl>
						<dl v-else>
							<img :src="item.imgurl"/>
						</dl>
					</template>
				</li>
				<Product :data-list="getgoodList"></Product>
			</ul>
		</section>
	</div>
</template>

<script>
	import Getbacknav from '../../components/getbacknav.vue';
	import axiosUtil from '../../utils/axios.util.js'
	import Product from './Product.vue'
	
	export default{
		data(){
			return{
				pagetitle:'',
				dataList:[],
				floorList:[],
				goodList:[],
				jumpurl:this.$route.query.jumpurl
			}
		},
		methods:{
			
		},
		computed:{
			getfloorList(){
				this.floorList=this.dataList.slice(0,14);
				return this.floorList
			},
			getgoodList(){
				this.goodList=this.dataList.slice(14,24);
				return this.goodList
			}
		},
		mounted(){
	        axiosUtil.getClassDetail(this,`/Services/Proxy.ashx?r=201710272136&os=HTML5&client_v=1.0.0&pageid=${this.jumpurl}&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`);
			this.$store.commit('navName',this.pagetitle);
			
		},
		components:{
			Getbacknav,
			Product
		},
		created(){
			this.$store.commit('navName','活动');
		}
	}
</script>

<style lang="css">
	
</style>