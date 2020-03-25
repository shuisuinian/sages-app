<template>
  <div>
    <div class="box">
      <van-search :value="value" placeholder="请输入搜索关键词" @search="onSearch" />
      <van-card
        tag="标签"
        price="10.00"
        origin-price="99.00"
        desc="描述信息"
        centered
        title="商品标题"
        thumb-link="/pages/book-info/main?id="
        :thumb="imageURL"  >
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1,
      tag: '标签',
      price: 10.00,
      originPrice: 99,
      desc: '描述信息',
      title: '商品标题',
      imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg'
    }
  },
  methods: {
    showDetail () {
      console.log('ds')
      wx.navigateTo({
        url: '/pages/logs/main?id=' + 1
      })
    }
  },
  created () {
  },
  onLoad (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    let id = options.id
    console.log(id)
  }
}
</script>

<style>
</style>
