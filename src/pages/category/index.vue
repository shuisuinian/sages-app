<template>
  <div>
     <van-tree-select class="tree"
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        :max="max"
        @click-nav="onClickNav"
        @click-item="onClickItem"
      />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: '浙江',
          children: [
            {
              text: '温州',
              id: 1
            },
            {
              text: '温州',
              id: 1
            }
          ],
          dot: true
        },
        {
          text: '江苏',
          children: [
            {
              text: '温州',
              id: 1
            },
            {
              text: '温州',
              id: 1
            }
          ],
          badge: 5
        }
      ],
      mainActiveIndex: 0,
      activeId: [],
      max: 2
    }
  },
  methods: {
    onClickNav ({ detail = {} }) {
      this.setData({
        mainActiveIndex: detail.index || 0
      })
    }
  },
  created () {
  }
}
</script>

<style>
</style>
