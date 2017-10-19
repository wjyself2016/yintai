<template lang="html">
	<div class="m-classify">
		<Navg></Navg>
		<Search></Search>
		<List></List>
	</div>
</template>

<script>
	import Navg from './nav.vue'
	import Search from './search.vue'
	import List from './list.vue'
	
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		components: {
    		Navg:Navg,
    		Search:Search,
    		List:List
  		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../../../styles/modules/common.scss";
	.m-classify{
		width:100%;
		height:100%;
		@include flexbox();
		@include flex-direction(column);
		background:white;
	}
</style>