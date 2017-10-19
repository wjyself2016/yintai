<template lang="html">
	<div class="m-shopping">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'shopping...'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../../../styles/modules/common.scss";
	.m-shopping{
		font-size:50px;
	}
</style>