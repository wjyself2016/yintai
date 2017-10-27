<template lang="html">
	<div class="section">
		<div class="empty" v-if="!ishave">
			<div><img src="https://r.ytrss.com/mobile/img/clearcart2.png"/></div>
			<p>购物车空空哒！</p>
			<p>快去随便逛逛吧~</p>
			<div class="empty_btn">
				
			</div>
		</div>
		<div class="has_product" v-if="ishave">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ishave:false
			}
		},
		methods: {

		},
		components: {
			
  		}
	}
</script>