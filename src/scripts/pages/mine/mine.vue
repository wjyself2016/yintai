<template lang="html">
	<div class="m-mine">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'mine...'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../../../styles/modules/common.scss";
	.m-mine{
		font-size:50px;
	}
</style>