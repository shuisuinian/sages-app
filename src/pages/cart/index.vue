<template>
  <div>
    <div class="box">
      <van-card
        num="2"
        tag="标签"
        price="10.00"
        origin-price="99.00"
        desc="描述信息"
        centered
        title="商品标题"
        thumb-link=""
        :thumb="imageURL" >
        <view slot="footer">
          <div>
            <van-button size="mini"><van-icon name="arrow-up" /></van-button>
          </div>
          <div>
            <van-button size="mini"><van-icon name="arrow-down" /></van-button>
          </div>
        </view>
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
  },
  created () {
  }
}
</script>

<style>
</style>
