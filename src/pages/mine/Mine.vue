<template lang="html">
	<div>
		<getbacknav></getbacknav>
		mine...
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
  			this.$store.commit('navName','我的银泰');
  		}
	}
</script>
