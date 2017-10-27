<template lang="html">
	<div class="m-classify">
		<getbacknav></getbacknav>
		<Search></Search>
		<List></List>
	</div>
</template>

<script>
	import Getbacknav from '../../components/getbacknav.vue';
	import Search from './search.vue'
	import List from './list.vue'
	
	export default {
		data() {
			return {
				isShow:false
			}
		},
		methods: {
			
		},
		components: {
    		Getbacknav,
    		Search:Search,
    		List:List
  		},
  		created(){
  			this.$store.commit('navName','分类');
  		}
	}
</script>

