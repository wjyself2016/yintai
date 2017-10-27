<template lang="html">
	<div class="shopping_list">
		<div class="scroll_box">
			<div class="module">
				<div class="head"><span>普通商品</span></div>
				<div class="body">
					<ul>
						<li>
							<div class="left checkbtn"><span></span></div>
							<div class="left_img"><img src="https://p10.ytrss.com/product/21/467/4421/normalimage/53654.jpg" /></div>
	
							<div class="right">
								<p class="title" v-if="!isEdit">【新品】【自营】SUNCOO米白色混合材质镶金丝设计女士套头毛衣, H17M01355 01-BLANC CASSE WOMEN PULL PELAGIA T1</p>
								<p class="description" v-if="!isEdit">
									<span>颜色分类：<b>米白色</b></span>
									<span>尺码：<b>1</b></span>
								</p>
								<div class="money">
									<p class="price">
										<strong>￥<b>1450.00</b></strong>
									</p>
									<div class="number" v-if="!isEdit">
										×<span>1</span>
									</div>
								</div>
							</div>
	
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="clc">
			<div class="clc_left checkbtn">
				<span></span>
				<p>全选</p>
			</div>
			<div class="clc_middle">
				<p class="word1">合计：<b>￥</b><i>1200.00</i></p>
				<p class="word2">已满199元，免运费</p>
			</div>
			<div class="clc_right">去结算</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isEdit:false
			}
		},
		methods: {

		},
		components: {

		}
	}
</script>