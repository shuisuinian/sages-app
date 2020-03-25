<template>
  <div>
    <div class="box">
      <div class="my-swipe">
        <swiper class="swiper" :style="{ height: len + 'px' }" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in movies" :index="index" :key="key">
              <swiper-item>
                  <image :src="item.url" class="slide-image" mode="widthFix" @load="imgLoad"/>
              </swiper-item>
          </block>
        </swiper>
      </div>

      <van-tabs :active="active" sticky ellipsis swipeable>
        <van-tab title="书籍详情897879">详情
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
          1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
        </van-tab>
        <van-tab title="评论">评论</van-tab>
        <van-tab title="推荐">推荐</van-tab>
        <van-tab title="相关书籍">相关书籍</van-tab>
      </van-tabs>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <!-- <van-goods-action-icon icon="shop-o" text="店铺" /> -->
        <van-goods-action-button class="test" color="linear-gradient(to right, #4bb0ff, #6149f6)" text="加入购物车" type="warning" />
        <van-goods-action-button color="#7232dd" text="立即购买" @click="showPopup"/>
      </van-goods-action>


      <van-popup :show="show" position="bottom" round closeable="true"
          close-icon="close"
          custom-style="height: 70%"
          @close="onClose"
        >
        <van-card
          num="2"
          centered
          tag="热卖"
          price="2.00"
          origin-price="10.00"
          desc="描述信息"
          title="商品标题"
          :thumb="imageURL"
          lazy-load
        />
        <van-radio-group value="1" @change="onChange">
          <van-cell-group title="书籍类型">
            <van-cell 
            title="电子书"
            clickable
            data-name="1"
            @click="onClick"> 
              <van-radio slot="right-icon" name="1"/>
            </van-cell>

            <van-cell 
            title="实体书"
            clickable
            data-name="2"
            @click="onClick"> 
              <van-radio slot="right-icon" name="2"/>
            </van-cell>
          </van-cell-group>
        </van-radio-group>

        
        <van-radio-group value="1" @change="onChange">
          <van-cell-group title="版本选择">
            <van-cell 
            title="第一版"
            clickable
            data-name="1"
            @click="onClick"> 
              <van-radio slot="right-icon" name="1"/>
            </van-cell>

            <van-cell 
            title="第一版"
            clickable
            data-name="2"
            @click="onClick"> 
              <van-radio slot="right-icon" name="2"/>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-cell title="购买数量" icon="location-o" ><van-stepper value="1" step="1" @change="onChange" /></van-cell>
        <van-goods-action>
          <van-goods-action-button  round type="warning" text="加入购物车"/>
          <van-goods-action-button  round type="danger"  text="立即购买"/>
        </van-goods-action>
        
        <!-- <van-button hairline round  icon="cross" type="danger" size="small" @click="onClose" /> -->
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585024119208&di=1dde667ba4a3901c30d460e1fdcc0285&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201511%2F28%2F103918vab1bzzgblhvd4s4.jpg',
      movies: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585024119208&di=1dde667ba4a3901c30d460e1fdcc0285&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201511%2F28%2F103918vab1bzzgblhvd4s4.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585024119208&di=1dde667ba4a3901c30d460e1fdcc0285&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201511%2F28%2F103918vab1bzzgblhvd4s4.jpg'
        }
      ],
      len: 300
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    onClose () {
      this.show = false
    },
    imgLoad (e) {
      var winWid = wx.getSystemInfoSync().windowWidth
      var imgh = e.mp.detail.height
      var imgw = e.mp.detail.width
      var swiperH = winWid * imgh / imgw
      if (swiperH > 500) {
        swiperH = 500
      }
      this.len = swiperH
      console.log(this.len)
    },
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
      title: '书籍详情'
    })
    let id = options.id
    console.log(id)
  }
}
</script>

<style>
.slide-image {
  width: 100%;
}
/* .swiper {
  height: 500rpx;
} */
</style>
