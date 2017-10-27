<template lang="html">
		<div>
			<ul class="template-ul">
				<li v-for="(value,index) in toplist" @click="selectDiv(index)" :class="{active:isActive(index)}"><b>{{value}}</b></li>
			</ul>
			<list :divdata="currentlist"></list>
			<commonFooter></commonFooter>
		</div>
</template>

<script>
	import commonFooter from './common-footer.vue'
	import list from './list.vue';

	
	export default{
		props:{
			toplist:{
				type:Array
			} 
		},
		data(){
			return{
				currentlist:0
			}
		},
		methods:{
			selectDiv(index){
				this.currentlist = index;
			},
			isActive(index){
				return index == this.currentlist;
			}
		},
		computed:{
			
		},
		components:{
			list,
			commonFooter,
		}
		
	}
</script>
