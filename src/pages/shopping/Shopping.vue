<template lang="html">
	<div class="m-shopping">
		<shopping-head :isEmpty="isEmpty"></shopping-head>
		<shopping-section :isEmpty="isEmpty"></shopping-section>
	</div>
</template>

<script>
	import ShoppingHead from './Shoppinghead.vue';
	import ShoppingSection from './ShoppingSection.vue';
	export default {
		data() {
			return {
				isEmpty:''
			}
		},
		methods: {

		},
		components: {
    		ShoppingHead,
    		ShoppingSection
  		},
  		created(){
  			this.$store.commit('navName','购物车');
  			this.isEmpty = false;
  			if(this.$store.state.cart.added.length == 0){
  				this.isEmpty = true
  			}
  		}
  		
		
	}
</script>
