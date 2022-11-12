<!--
 * @Descripttion:
 * @version:
 * @Author: coderdashu
 * @Date: 2022-11-12 21:49:27
 * @LastEditors: Andy
 * @LastEditTime: 2022-11-12 22:01:39
-->
<template>
  <view>
    <!-- 只在H5上有哈 -->
    <!-- #ifdef H5 -->
    	<view class="h5-text">
    		我只会出现在h5上
    	</view>
    <!-- #endif -->

    <!-- 只在小程序上有哈 -->
    <!-- #ifdef MP-WEIXIN -->
    	<view>
    		我只会出现在小程序上
    	</view>
    <!-- #endif -->

    <!-- #ifndef H5 -->
    <view>
           除了H5平台,其他的平台都存在的哈
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    onLoad() {
      // #ifdef H5
      console.log("只有h5平台才有console方法")
      // #endif

      // #ifdef MP-WEIXIN
      console.log("只有微信平台才有的console方法")
      // #endif
    },
    methods: {

    }
  }
</script>

<style>
.h5-text{
  font-size: 16px;
}
</style>
