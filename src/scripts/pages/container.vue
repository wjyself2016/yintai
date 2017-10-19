<template lang="html">
	<div class="container">
		<index></index>
	</div>
</template>

<script>
	import Index from './index/index.vue'
	
	export default {
		data() {
			return {
				msg: 'container...'
			}
		},
		methods: {

		},
		components: {
    		Index:Index,
  		}
	}
</script>

<style lang="scss">
	@import "../../styles/app.scss";
	@import "../../styles/modules/common.scss";
	.m-shopping{
		font-size:50px;
	}
</style>