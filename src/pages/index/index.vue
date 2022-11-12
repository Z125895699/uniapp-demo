<!--
 * @Descripttion:
 * @version:
 * @Author: coderdashu
 * @Date: 2022-11-12 21:49:27
 * @LastEditors: Andy
 * @LastEditTime: 2022-11-12 22:41:17
-->
<template>
	<view class="text">
    <text> Hello World</text>
    <text @click="Click">Click Me</text>
  </view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
      Click(){
        uni.navigateTo({
          url:'../home/home'
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
$haha:red;
.text{
  width: 100vw;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $haha;
}
</style>
