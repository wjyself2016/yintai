<template lang="html">
  <div class="m-detail">
    <section>
      <Getbacknav></Getbacknav>
      <div class="yt-dl-swipe">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="imgurl in imgList" class="yt-swipe-box">
            <img :src="imgurl" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <span class="yt-dl-miao"></span>
      </div>
      <div class="yt-dl-info">
        <div class="yt-dl-tle">
          <p class="yt-dl-name">{{name}}</p>
          <div class="yt-dl-like" @click="getLike">
            <span :class="{'liked':isliked}"></span>
          </div>
        </div>
        <div class="yt-dl-pirce">
          <p class="yt-dl-currentprice">
            ￥
            <span>{{ytprice}}</span>
          </p>
          <span class="yt-dl-marketprice">￥ {{marketprice}}</span>
          <span class="yt-dl-itemcode">商品编号:{{itemcode}}</span>
        </div>
      </div>
      <div class="yt-dl-classify">
        <ul>
          <li class="yt-dl-checkselected">
            <span class="yt-dl-classify-tle">已选:</span>
            {{choosedColor}} {{choosedSize}}  {{goodsnum}}  件
          </li>
          <li class="yt-dl-color">
            <span class="yt-dl-classify-tle">颜色分类:</span>
            <ul class="yt-dl-options">
              <li :class="['yt-dl-option',{'active' :colorid === i}]" @click="chooseColor(i,color)" v-for="(color,i) in colorclassify" :key="i">{{color}}</li>
            </ul>
          </li>
          <li class="yt-dl-size">
            <span class="yt-dl-classify-tle">尺码:</span>
            <ul class="yt-dl-options">
              <li :class="['yt-dl-option',{'active' :sizeid === j}]" @click="chooseSize(j,size)" v-for="(size,j) in sizeclassify" :key="j">{{size}}</li>
            </ul>
          </li>
          <li class="yt-dl-num">
            <span class="yt-dl-classify-tle">数量:</span>
            <div class="yt-dl-opnum">
              <span class="yt-dl-option opnum-size" @click="reduceGoodsNum">-</span>
              {{goodsnum}}
              <span class="yt-dl-option opnum-size" @click="addGoodsNum">+</span>
            </div>
            <span v-if="instock < 10" class="yt-dl-stocktips">库存紧张，仅剩{{instock}}件</span>
          </li>
        </ul>
      </div>
      <div class="yt-dl-brand">
        <mt-cell :title="`品牌:${brandname}`" to="" is-link value="">
          <img :src="brandurl" alt="" class="yt-brand-img">
        </mt-cell>
      </div>
      <div class="yt-dl-moretitle">
        <span class="title-text">图文介绍</span>
      </div>
      <div class="yt-dl-desc">
        <ul>
          <li>
            <h2 class="yt-desc-title">
              <span class="yt-zh-title">商品参数</span>
              <span class="yt-en-title">Product Parameters</span>
            </h2>
            <div class="yp-argu-det">
              <span title="2017-Q1">上市时间：2017-Q1</span>
              <span title="39.5">尺码：39.5</span>
              <span title="白色">色系：白色</span>
              <span title="牛皮革">鞋面材质：牛皮革</span>
              <span title="男士">适用性别：男士</span>
              <span title="四季">销售季节：四季</span>
            </div>
            <img src="//p10.ytrss.com//BlockImages/21/416/4763//yintai_27a62175-d1d8-423e-9418-882d9dab7783.jpg" alt="">
          </li>
          <li>
            <h2 class="yt-desc-title">
              <span class="yt-zh-title">价格说明</span>
              <span class="yt-en-title">Price Description</span>
            </h2>
            <p>
              银泰价：银泰价为商品的销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。
            </p>
            <p>
              划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在银泰网平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
            </p>
            <p>
              折扣：银泰网上展示的折扣为银泰价与参考价的对比（该值四舍五入后采小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。
            </p>
            <p>
              促销：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系银泰网客服进行咨询。
            </p>
          </li>
          <li>
            <h2 class="yt-desc-title">
              <span class="yt-zh-title">品牌故事</span>
              <span class="yt-en-title">Brand Story</span>
            </h2>
            <div class="yt-dl-story">
              <div class="yt-dl-story-brandimg">
                <img :src="brandurl" alt="">
              </div>
              <p class="brand-cn-name">
                {{brandname}}
              </p>
              <p>
                LACOSTE的传奇始于1933年．凭借其纯正的体育血统，如今的LACOSTE象征着一种舒适、优雅的生活态度，独特的设计和高品质的产品涵盖了男装，女装和童装。LACOSTE SA旗下在全球特许的9家合作厂商构成了其高质量的产品线，包括配饰、鞋包、香水、皮具、眼镜、手表、家纺、皮带以及手机等各个......
              </p>
              <img src="https://p10.ytrss.com/Brand/1545/pp.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="m-hot">
			     <commonFooter></commonFooter>
      </div>
    </section>
    <footer class="yt-dl-bar">
      <ul>
        <router-link to="/shopping" tag="li">
          <i class="yo-ico yt-cart-icon">&#xe606;</i>
          <span>购物车</span>
        </router-link>
        <li @click="joinToCart">加入购物车</li>
        <li>立即购买</li>
      </ul>
    </footer>
    <div class="mint-indicator" style="display: none;"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Indicator
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '../../assets/images/miao-cat-max.png'
import '../../assets/images/bai-08.png'
import '../../assets/images/p-long.gif'

import axiosUtil from '../../utils/axios.util.js'
import Getbacknav from '../../components/getbacknav.vue';
import commonFooter from '../hot/common-footer.vue'
export default {
  data() {
    return {
      title: '商品详情',
      imgList: [],
      productCode: this.$route.query.itemCode || '21-416-4764',
      name:'',
      longname: '',
      ytprice: '',
      marketprice: '',
      itemcode: '',
      colorclassify: [],
      colorid: '',
      sizeclassify: [],
      sizeid: '',
      instock: '',
      brandname: '',
      brandurl: '',
      choosedColor: '',
      choosedSize: '',
      goodsnum: 1,
      isliked:false
    }
  },
  methods: {
    getColorClassify(productsList) {
      var colorClassify = []
      productsList.forEach(function(item, index, arr) {
        if (colorClassify.indexOf(item.skuproperty[0].value) < 0) {
          colorClassify.push(item.skuproperty[0].value)
        }
      })
      return colorClassify
    },
    getSizeClassify(productsList) {
      var sizeClassify = []
      productsList.forEach(function(item, index, arr) {
        if (sizeClassify.indexOf(item.skuproperty[1].value) < 0) {
          sizeClassify.push(item.skuproperty[1].value)
        }
      })
      return sizeClassify
    },
    chooseColor(colorid, color) {
      this.colorid = colorid
      this.choosedColor = '"' + color + '"'
    },
    chooseSize(sizeid, size) {
      this.sizeid = sizeid
      this.choosedSize = '"' + size + '"'
    },
    joinToCart(){
      var goodsInCart = {
        itemcode:this.itemcode,
        title:this.name,
        color:this.colorclassify[this.colorid],
        size:this.sizeclassify[this.sizeid],
        ytprice:this.ytprice,
        goodsnum:this.goodsnum,
        imgurl:this.imgList[0]
      }
      this.$store.commit('setGoodsInCart',goodsInCart)
      console.log(this.$store.state.goodsList)
    },
    addGoodsNum(){
      if(this.goodsnum >= this.instock){
        this.goodsnum = this.instock
      }else{
        this.goodsnum += 1
      }
    },
    reduceGoodsNum(){
      if(this.goodsnum<=1){
        this.goodsnum = 1
      }else{
        this.goodsnum -= 1
      }
    },
    getLike(){
      this.isliked = !this.isliked
    }
  },
  mounted() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    // console.log(this.$route.query);
    // this.productCode = this.$route.query.itemCode
    axiosUtil.loadMoreData(`/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%22${this.productCode}%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=201710252202`, function(res) {
      var productsList = res.data.data.products
      var product = {}

      productsList.forEach(function(item, index, arr) {
        if (item.itemcode == this.productCode) {
          product = item
        }
      }.bind(this))

      this.imgList = product.largeimgurls
      this.longname = product.longname
      this.name = product.name
      this.ytprice = product.ytprice + ".00"
      this.marketprice = product.marketprice + ".00"
      this.itemcode = product.itemcode
      this.instock = product.instock
      this.colorclassify = this.getColorClassify(productsList)
      this.sizeclassify = this.getSizeClassify(productsList)
      this.brandname = res.data.data.brandname
      this.brandurl = res.data.data.brandurl
      this.chooseColor(0,this.colorclassify[0])
      this.chooseSize(0,this.sizeclassify[0])
      Indicator.close()
    }.bind(this))
  },
  components:{
    Getbacknav,
    commonFooter
  },
  created(){
    this.$store.commit('navName', '商品详情');
  }
}
</script>
