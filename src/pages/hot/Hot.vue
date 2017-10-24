<template lang="html">
	<div class="m-hot">
		<getbacknav></getbacknav>
		hot...
		<tablebar></tablebar>
		
	</div>
</template>

<script>
	import Tablebar from '../../components/tablebar.vue';
	import Getbacknav from '../../components/getbacknav.vue';
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		components: {
    		Tablebar,
    		Getbacknav
  		},
  		created(){
  			this.$store.commit('navName','抢先');
  		}
	}
</script>
