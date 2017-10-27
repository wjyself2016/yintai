<template lang="html">
	<ul>
		<li class="hot-select-two" v-for="value in datathree">
			<dl>
				<dd>
					<img :src="value.image" width="90" height="120">
				</dd>
				<dt>
					<p>{{value.name}}</p>
					<div><span>{{value.promotionlist[0].name}}</span></div>
					<p><span class="line">¥{{value.price}}</span></p>
					<p><span class="shichang">¥{{value.yt_price}}</span>
					</p>
				</dt>
			</dl>
		</li>
	</ul>
</template>

<script>
	export default{
		props:{
			datathree:{
				type:Array,
				require:true
			}
		},
		data(){
			return {
				r:Math.random(),
				page_index:1
			}
		},
		mounted(){
			console.log();
		}
	}
</script>

<style>
</style>