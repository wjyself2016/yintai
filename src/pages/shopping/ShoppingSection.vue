<template lang="html">
	<div class="section">
		<div class="empty" v-if="isEmpty">
			<div><img src="https://r.ytrss.com/mobile/img/clearcart2.png"/></div>
			<p>购物车空空哒！</p>
			<p>快去随便逛逛吧~</p>
			<router-link to="/index" class="empty_btn" tag="div">
				随便逛逛
			</router-link>
		</div>
		<div class="has_product" v-if="!isEmpty">
			<shopping-list></shopping-list>
		</div>
	</div>
</template>

<script>
	
	import ShoppingList from './ShoppingList';
	
	export default {
		data() {
			return {
				ishave:false
			}
		},
		methods: {

		},
		components: {
			ShoppingList
  		},
		props: {
			isEmpty:{
				type:Boolean,
				required:true
			}
		}
  	
	}
</script>