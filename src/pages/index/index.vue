<template>
  <div>
    <div class="my-swipe">
        <swiper class="swiper" :style="{ height: 200 + 'px' }" indicator-dots="false" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in movies" :index="index" :key="key">
              <swiper-item>
                  <image :src="item.url" class="slide-image" mode="aspectFill" />
              </swiper-item>
          </block>
        </swiper>
      </div>
    <div class="box">
      
      <!-- <header>
        先贤显现，属于你的智窗
      </header> -->

      
      
      <van-search :value="value" placeholder="请输入搜索关键词" @search="onSearch" />

      
      <van-tabs :active="active" sticky ellipsis>
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
        <van-tab title="标签 5">内容 5</van-tab>
        <van-tab title="标签 6">内容 6</van-tab>
      </van-tabs>
    </div>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div> -->
    
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue'
        // avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      movies: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584933386746&di=7c9147d67b779214fa323c180d049126&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585022943144&di=f4e34b1d7194c2c69fff2fc2af522ff3&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F25%2F195151szk8umd8or8fmfa5.jpg'
        }
      ]
    }
  },

  components: {
    card
  },

  methods: {
    onSearch (val) {
      var keyword = val.mp.detail
      console.log(keyword)
      wx.navigateTo({
        url: '/pages/search/main?id=' + keyword
      })
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
header {
  display: inline-block;
}
.my-swipe {
  /* background-color: #fff; */
  margin: auto;
  width: 100%;
  /* padding: 10rpx 50rpx; */
}
.slide-image {
  width: 100%;
}
.swiper {
  height: 480rpx;
}
.box {
  width: 98%;
  margin: auto;
  padding: 5rpx;
  /* background-color: #576b95; */
  border: 1rpx solid red;
  overflow: hidden;
}
</style>
