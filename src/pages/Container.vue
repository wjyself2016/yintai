<template lang="html">
	<div class="m-container">
		<router-view></router-view>
		<footer>
			<Tablebar></Tablebar>
		</footer>
	</div>
</template>

<script>
import Tablebar from '../components/tablebar.vue';
export default {
	data() {
		return {

		}
	},
	components: {
		Tablebar
	}
}
</script>
