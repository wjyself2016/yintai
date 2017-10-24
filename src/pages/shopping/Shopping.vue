<template lang="html">
	<div>
		<getbacknav></getbacknav>
		shopping...
	</div>
</template>

<script>
	import Getbacknav from '../../components/getbacknav.vue';
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		components: {
    		Getbacknav
  		},
  		created(){
  			this.$store.commit('navName','购物车');
  		}
		
	}
</script>
