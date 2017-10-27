<template lang="html">
	<div class="m-search m-hot">
		<header></header>
			<section>
			<position :toplist="toplist"></position>
			</section>
		<footer>
		</footer>
	</div>
</template>

<script>
	import position from './position.vue'
	export default {
		data() {
			return {
				toplist:["默认","销量","价格","折扣","筛选"]
			}
		},
		methods: {
			repeat(){
				
			}
		},
		components: {
    		position
  		}
	}
</script>