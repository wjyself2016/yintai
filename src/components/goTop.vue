<template lang="html">
	<div class='page-component-up' v-show='isShow' @click='getTop'>
		<i class='tri'></i>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow:'true',
				target:''
			}
		},
		methods:{
			/*addClassHover(e){
				if(e.type==="mouseover"){
					this.$el.classList.add('hover');
				}else if(e.type==="mouseout"){
					this.$el.classList.remove('hover');
				}
			},
			showIcon(){
				if(this.target.scrollTop>100){
					this.isShow='true';
				}else if(this.target.scrollTop<100){
					this.isShow='false';
					
				}
			},
			getTop(){
				
			},
			needToTop(){
				console.log(0);
			}*/
		},
		mounted:{
			
		}
	}
</script>

<style lang="css">
	.page-component-up{
		width:.3rem;
		height:.3rem;
		background:#000;
		position:absolute;
		bottom:.7rem;
		right:.2rem;
		z-index: 99;
	}
	.hover{
		background:#ff3b7f;
	}
</style>