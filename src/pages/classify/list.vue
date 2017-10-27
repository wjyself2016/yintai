<template lang="html">
	<div class="list">
		<div class="list_left">
			<ul>
				<li v-for="(value,index) in leftList" @click="getId(value,index)" :class="{active:isActive(index)}">{{value.name}}</li>
			</ul>
		</div>
		<div class="list_right">
			<Items :listId="id"></Items>
		</div>
	</div>
</template>

<script>
	import Items from './items.vue';
	import axios from 'axios';
	
	export default {
		data() {
			return {
				leftList:[],
				id:0,
				currentIndex:0
			}
		},
		methods: {
			getId(value,index){
				this.id = value.id;
				this.currentIndex = index;
				
			},
			isActive(index){
				return this.currentIndex === index;
			}
		},
		mounted(){
			axios.get('/Services/Proxy.ashx?r=0.9151882441887185&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0')
		      	.then((res)=>{
		        	const data = res;
		        	this.leftList = res.data.data.data;
		        	this.id = res.data.data.data[0].id;
		        	
		      	})
		    
		},
		components:{
			Items
		}
	}
</script>
