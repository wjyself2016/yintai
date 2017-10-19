<template lang="html">
	<div class="m-classify">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'classify...'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../../../styles/modules/common.scss";
	.m-classify{
		font-size:50px;
	}
</style>