<template lang="html">
	<div class="container">
		<Classify></Classify>
	</div>
</template>

<script>
	import Index from './index/index.vue'
	import Classify from './classify/classify.vue'
	
	export default {
		data() {
			return {
				msg: 'container...'
			}
		},
		methods: {

		},
		components: {
    		Classify:Classify,
  		}
	}
</script>

<style lang="scss">
	@import "../../styles/app.scss";
	@import "../../styles/modules/common.scss";
	.container{
		width:100%;
		height:100%;
	}
</style>