<template lang="html">
	<div class="m-hot">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hot...'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../../../styles/modules/common.scss";
	.m-hot{
		font-size:50px;
	}
</style>