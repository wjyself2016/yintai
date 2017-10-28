<template>
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
</template>

<script>
	export default{
		props: {
		    snapList: {
		      type: Array,
		      required: true
		    }
		}
	}
</script>

<style>
</style>