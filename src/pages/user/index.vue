<template>
  <div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <!-- <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" /> -->

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <van-cell-group title="信息管理">
      <van-cell title="订单" value="查看" icon="balance-list-o" is-link  url="/pages/addr/main"/>
      <van-cell title="我的地址" value="编辑" icon="location-o" is-link  url="/pages/addr/main"/>
    </van-cell-group>
    <van-cell-group title="其他设置">
      <van-cell title="订单" value="查看"  @click="test" icon="balance-list-o" is-link  url="/vant/mobile.html"/>
      <van-cell title="我的地址" value="编辑"  @click="test" icon="location-o" is-link  url="/vant/mobile.html"/>
    </van-cell-group>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>

    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Vue from 'vue'
import card from '@/components/card'
import { login } from '@/utils/login'
import WXrequest from '@/utils/request'
import Toast from 'vant-weapp/dist/toast/toast'
Vue.prototype.$httpWX = WXrequest

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785414303&di=635131caebe2cc297d31aca25cd1eca6&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F78%2F52%2F01200000123847134434529793168.jpg'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    test () {
      Toast('111')
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    this.$httpWX.get({
      url: '/login'
    })
    login()
  }
}
</script>

<style>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  /* width: 128rpx;
  height: 128rpx; */
  width: 256rpx;
  height: 256rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}
</style>
