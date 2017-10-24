<template lang="html">
	<div>
		<getbacknav></getbacknav>
		classify...
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
  			this.$store.commit('navName','分类');
  		}
	}
</script>

