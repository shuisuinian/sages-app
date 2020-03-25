<template>
  <div>
    <div class="box">
      <van-cell-group title="基本信息">
        <van-field :value="name" required clearable placeholder="收货人姓名"  label="姓名"
          :border="false" bind:change="onChange" />
        <van-field :value="phoneNum" required clearable
          placeholder="收货人联系方式" label="电话"
          :border="false" bind:change="onChange"/>
      </van-cell-group>
      <van-cell-group title="地址设置">
        <van-cell title="地区" is-link :value="carmodel" arrow-direction="down" @click="showAddrPopup"></van-cell>
        <van-field :value="address" required clearable placeholder="街道门派房间号等信息" label="详细地址"
          :border="false" bind:change="zip" />
        <van-field :value="address" required clearable placeholder="邮政编码" label="邮政编码"
          :border="false" bind:change="onChange" />
      </van-cell-group>
      <van-cell-group title=" ">
        <van-cell title="是否设置为默认地址">
          <van-switch
            :checked="addrInfo.isDefault !== 0"
            active-color="#07c160"
            inactive-color="#ee0a24"
            @change="onSwitchChange"
          />
        </van-cell>
      </van-cell-group>

      <van-button class="b" round type="danger" block @click="submit">保存</van-button>
      <van-button class="b" round type="default" block @click="del">删除</van-button>
      


      <van-toast id="van-toast" />
      <van-popup :show="show" position="bottom" round="true" closeable="true"
          close-icon="close"
          custom-style="height: 50%"
          @close="onClose"
        >
        <van-area :area-list="areaList" @confirm="arerConfirm" />
        <!-- <van-button hairline round  icon="cross" type="danger" size="small" @click="onClose" /> -->
      </van-popup>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import WXrequest from '@/utils/request'
import areaList from './area'
import Toast from 'vant-weapp/dist/toast/toast'
Vue.prototype.$httpWX = WXrequest

export default {
  data () {
    return {
      show: false,
      carmodel: '选择地区',
      obj: null,
      addrInfo: {
        id: 1,
        name: '张三',
        phoneNum: '12313131',
        address: 'asdfasdfasdfsssssssssssssssssasdfasdf',
        isDefault: 0
      },
      areaList: areaList
    }
  },
  methods: {
    showAddrPopup () {
      this.show = true
    },
    onClose () {
      this.show = false
    },
    test (id) {
      Toast(id)
    },
    arerConfirm (val) {
      var list = val.target.values
      console.log(JSON.stringify(list))
      this.carmodel = list[0].name + '/' + list[1].name + '/' + list[2].name
      this.show = false
    },
    onSwitchChange () {
      if (this.addrInfo.isDefault === 0) {
        this.addrInfo.isDefault = 1
      } else {
        this.addrInfo.isDefault = 0
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
      this.show = false
    }
  },

  created () {
  }
}
</script>

<style>
.box {
  width: 96%;
  margin: auto;
}
.b {
  margin-top: 5rpx;
}
.swipe-cell-button {
  height: 63rpx;
}
</style>
