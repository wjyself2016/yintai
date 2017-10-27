<template lang="html">
  <div class="m-detail">
    <section>
      <mt-header :title="title">
        <router-link to="/login" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
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
          <p class="yt-dl-name">{{longname}}</p>
          <div class="yt-dl-like">
            <span></span>
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
            "{{choosedColor}}" "{{choosedSize}}" 1 件
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
              <span class="yt-dl-option opnum-size">-</span>
              {{instock}}
              <span class="yt-dl-option opnum-size">+</span>
            </div>
            <span v-if="instock < 10" class="yt-dl-stocktips">库存紧张，仅剩{{instock}}件</span>
          </li>
        </ul>
      </div>
      <div class="yt-dl-brand">
        <mt-cell :title="`品牌:${brandname}`" to="" is-link value=""></mt-cell>
      </div>

    </section>
    <footer class="yt-dl-bar">
      <ul>
        <li>
          <i></i>
          <span>购物车</span>
        </li>
        <li>加入购物车</li>
        <li>立即购买</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '../../assets/images/miao-cat-max.png'
import '../../assets/images/bai-08.png'

import axiosUtil from '../../components/axios.util.js'
export default {
  data() {
    return {
      title: '商品详情',
      imgList: [],
      productCode: '21-416-4764',
      longname: '',
      ytprice: '',
      marketprice: '',
      itemcode: '',
      colorclassify: [],
      colorid:'',
      sizeclassify: [],
      sizeid:'',
      instock: '',
      brandname:'',
      choosedColor:'',
      choosedSize:''
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
    chooseColor(colorid,color){
      this.colorid = colorid
      this.choosedColor = color
    },
    chooseSize(sizeid,size){
      this.sizeid = sizeid
      this.choosedSize = size
    }
  },
  mounted() {
    axiosUtil.loadMoreData('/vip/goodsdetail.action', function(res) {
      var productsList = res.data.data.products
      var product = {}
      productsList.forEach(function(item, index, arr) {
        if (item.itemcode == this.productCode) {
          product = item
        }
      }.bind(this))

      this.imgList = product.largeimgurls
      this.longname = product.longname
      this.ytprice = product.ytprice + ".00"
      this.marketprice = product.marketprice + ".00"
      this.itemcode = product.itemcode
      this.instock = product.instock
      this.colorclassify = this.getColorClassify(productsList)
      this.sizeclassify = this.getSizeClassify(productsList)
      this.brandname = res.data.data.brandname
    }.bind(this))
  }
}
</script>
