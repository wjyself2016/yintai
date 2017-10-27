<template lang="html">
	<div class="m-shopping">
		<shopping-head></shopping-head>
		<shopping-section></shopping-section>
	</div>
</template>

<script>
	import ShoppingHead from './Shoppinghead.vue';
	import ShoppingSection from './ShoppingSection.vue';
	export default {
		data() {
			return {
				
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
  		}
		
	}
</script>
