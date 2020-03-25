<template>
  <div>
    <block v-for="(item, index) in addrList" :key="index" >
      <van-swipe-cell :right-width="120" :left-width="0">
        <view slot="left"></view>
        <van-cell-group>
          <van-cell :value="item.phoneNum" :label="item.address">
            <view slot="title">
              <view class="van-cell-text">{{item.name}}
                <van-tag v-if="item.isDefault != 0" mark type="danger">默认</van-tag>
              </view>
            </view>
          </van-cell>
        </van-cell-group>
        <view slot="right">
          <a href="/pages/addr-edit/main" style="display: inline-block "><van-button square type="primary" class="swipe-cell-button">编辑</van-button></a>
          <!-- <van-button square type="primary" class="swipe-cell-button" url="/pages/counter/main">编辑</van-button> -->
          <van-button square type="danger" class="swipe-cell-button" @click="test(item.id)">删除</van-button>
        </view>
      </van-swipe-cell>
    </block>
    
    <a href="/pages/counter/main" class="counter"><van-button square type="primary" class="swipe-cell-button">编辑</van-button></a>

    <van-swipe-cell :right-width="65" :left-width="65">
      <view slot="left">选择</view>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <view slot="right">删除</view>
    </van-swipe-cell>

    <van-cell-group title="分组1">
      <block v-for="(item, index) in addrList" :key="index" >
        <van-cell value="内容" is-link>
          <view slot="title">
            <view class="van-cell-text">单元格</view>
            <van-tag type="danger">标签</van-tag>
          </view>
        </van-cell>
      </block>
    </van-cell-group>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Vue from 'vue'
import WXrequest from '@/utils/request'
import Toast from 'vant-weapp/dist/toast/toast'
Vue.prototype.$httpWX = WXrequest

export default {
  data () {
    return {
      addrList: [
        {
          id: 1,
          name: '张三',
          phoneNum: '12313131',
          address: 'asdfasdfasdfsssssssssssssssssasdfasdf',
          isDefault: 0
        },
        {
          id: 2,
          name: '李四',
          phoneNum: '222222',
          address: 'asdfasdfasdfasdfasdf',
          isDefault: 1
        }
      ]
    }
  },
  methods: {
    test (id) {
      Toast(id)
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
  }
}
</script>

<style>
.swipe-cell-button {
  height: 63rpx;
}
</style>
