<template lang="html">
	<div class="m-index">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'index...'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../../../styles/modules/common.scss";
	.m-index{
		font-size:50px;
	}
</style>