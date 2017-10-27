<template lang="html">
	<div class="item_box" :data="listId">
		<div class="item_box_up">
			<div class="title"><span>推荐类目</span></div>
			<div class="body">
				<dl v-for="value in categoryrecommend">
					<dd><img :src="value.imageurl"></dd>
					<dt>{{value.name}}</dt>
				</dl>
			</div>
		</div>
		<div class="item_box_middle">
			<div class="title"><span>推荐品牌</span></div>
			<div class="body">
				<ul>
					<li v-for="value in brandrecommend"><img :src="value.imageurl"></li>
					
				</ul>
			</div>
		</div>
		<div class="item_box_down">
			<div class="title"><span>更多类目</span></div>
			<div class="body">
				<ul>
					<li v-for="value in morerecommend">{{value.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		data() {
			return {
				brandrecommend:[],
				morerecommend:[],
				categoryrecommend:[],
				num:0
			}
		},
		methods: {
				
		},
		props:['listId'],
		updated(){
			if(this.listId != this.num){
				axios.get('/Services/Proxy.ashx?r=0.11611530010057813&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid='+this.listId)
			      	.then((res)=>{
			        	const data = res.data.data;
			        	this.brandrecommend = data.brand.brandrecommend;
			        	this.morerecommend = data.more.morerecommend;
			        	this.categoryrecommend = data.recommend.categoryrecommend;
			        	this.num = this.listId;
			      	})
			}
		}
	}
</script>