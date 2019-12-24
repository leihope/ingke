//index.js
//获取应用实例
const app = getApp()


Component({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      '/image/ad1.jpg',
      '/image/ad2.jpg',
      '/image/ad3.jpg',
      '/image/ad4.jpg',
      '/image/ad5.jpg',
      '/image/ad6.jpg',
      '/image/ad7.jpg'
    ],
    navList: [
      { icon: '/image/nav-icon/diantai.png', events: 'goToBangDan', text: '榜单' },
      { icon: '/image/nav-icon/diantai.png', events: 'goToBangDan', text: '听小说' },
      { icon: '/image/nav-icon/diantai.png', events: 'goToBangDan', text: '情感电台' },
      { icon: '/image/nav-icon/diantai.png', events: 'goToBangDan', text: '听相声' },
      { icon: '/image/nav-icon/diantai.png', events: 'goToBangDan', text: '儿童故事' },
    ],
    swiperCurrent: 0,
  },

  /* 加载时运行的方法 */
  ready: function (options) {
    //console.log("1aa")
  },
  //组件方法集
  methods: {
    //轮播改变事件
    swiperChange: function (e) {
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },


 

  
  /**
   * 组件监听
   */
  
 

})
