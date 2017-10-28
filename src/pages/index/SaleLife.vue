<template lang="html">
	<div class="classdetail">
		<header>
			<Getbacknav></Getbacknav>
		</header>
		<section>
			<!--<top :topli="toplist"></top>-->
			<ul>
				<li v-for="list in getfloorList" class="vipimg">
					<dl v-if="list.templateid==20019045" class="classnav">
						<NewProduct :snapList='getsnapList'></NewProduct>
					</dl>
					<dl v-if="list.templateid==20019046" class="classnav">
						<NewProduct :snapList='getsnapList2'></NewProduct>
					</dl>
					<template v-for="item in list.items"  v-else>
						<!--惠生活-->
						<dl v-if="list.templateid==20019035" class="pro-nav">
							<p>
								{{item.extra.navigationname}}
						    </p>
						</dl>
						
						<dl class="pro-classnav" v-else>
							<img :src="item.imgurl" />
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
	import NewProduct from './NewProduct.vue'
	
	export default{
		data(){
			return{
				pagetitle:'',
				navList:[],
				dataList:[],
				floorList:[],
				snapList:[],
				snapList2:[],
				goodList:[],
				jumpurl:this.$route.query.jumpurl
			}
		},
		methods:{
			
		},
		computed:{
			getfloorList(){
				this.floorList=this.dataList.slice(0,9);
				return this.floorList
			},
			getnavList(){
				this.navList=this.dataList.slice(8,9);
				return this.navList
			},
			getgoodList(){
				this.goodList=this.dataList.slice(9,24);
				return this.goodList
			},
			getsnapList(){
				this.snapList=this.dataList.slice(4,5);
				return this.snapList
			},
			getsnapList2(){
				this.snapList2=this.dataList.slice(6,7);
				return this.snapList2
			}
		},
		mounted(){
	        axiosUtil.getClassDetail(this,`/Services/Proxy.ashx?r=201710272136&os=HTML5&client_v=1.0.0&pageid=${this.jumpurl}&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`);
			/*this.$store.commit('navName',this.pagetitle);*/
		},
		components:{
			Getbacknav,
			Product,
			NewProduct
		},
		created(){
			this.$store.commit('navName','活动');
		}
	}
</script>
