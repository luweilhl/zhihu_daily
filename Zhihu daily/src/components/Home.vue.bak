<template>
  <div class="app-home">
    <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
      
        
      <!--侧滑菜单部分-->
      <aside id="offCanvasSide" class="mui-off-canvas-left">
        <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <div class="canvas_title">
              <img class="canvas_img" src="../assets/img/banner1.png">
              <router-link to="" class="link">请登录</router-link>
            </div>
             <div class="canvas_subtitle" >
               <router-link to="" class="link"><span class="mui-icon mui-icon-star-filled"></span><span>我的收藏</span></router-link>
               <router-link to="" class="link"><span class="mui-icon mui-icon-pulldown"></span><span>离线下载</span></router-link>
             </div>
             <div class="canvas_list_container">
               <span>首页</span>
               <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                <li class="mui-table-view-cell">
                  <router-link to="" class="mui-navigate-right link">
                    Item 1
                  </router-link>
                </li>
                <li class="mui-table-view-cell">
                  <router-link to="" class="mui-navigate-right link">
                    Item 2
                  </router-link>
                </li>
                <li class="mui-table-view-cell">
                  <router-link to="" class="mui-navigate-right link">
                    Item 3
                  </router-link>
                </li>
                <li class="mui-table-view-cell">
                  <router-link to="" class="mui-navigate-right link">
                    Item 4
                  </router-link>
                </li>
                <li class="mui-table-view-cell">
                  <router-link to="" class="mui-navigate-right link">
                    Item 5
                  </router-link>
                </li>
                <li class="mui-table-view-cell">
                  <router-link to="" class="mui-navigate-right link">
                    Item 6
                  </router-link>
                </li>
              </ul> 
             </div>
            
          </div>
        </div>
      </aside>
      <!-- 主页面容器 -->
      <div class="mui-inner-wrap">
      <!-- 主页面标题 -->
        <header class="mui-bar mui-bar-nav">
          <router-link to="" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></router-link>
					<router-link to="/Setting" class=" mui-btn mui-btn-link mui-pull-right">设置</router-link>
          <h1 class="mui-title">首页</h1>
        </header>
        <div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
          <div class="mui-scroll">
            <!-- 主界面具体展示内容 -->
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="item in img_c" :key="item.cid">
                  <img :src="item.img" class="banner-img">
              </mt-swipe-item>                   
            </mt-swipe>
            <div v-for="(item,i) in list" :key="item.nid">            
              <p class="date">{{i}}</p>
              <div class="list" v-for="(content) in item" :key="content.nid">
                <ul class="mui-table-view">
                  <li class="mui-table-view-cell mui-media">
                    <router-link :to="'/NewsDetails/'+content.nid"  class="link">
                      <img class="mui-media-object mui-pull-right" :src="content.img">
                      <div class="mui-media-body">
                        <p class='mui-ellipsis' v-text="content.title"></p>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mui-off-canvas-backdrop"></div>
      </div>  
    </div>
  </div> 
</template>
<script>
export default {
  name: 'Home',
  data(){
    return {
      img_c:[],
      list:{}
    }
  },
  methods:{
    getImageList(){
      //获取图片轮播数据
      var url="http://127.0.0.1:3008/carousel";
      this.$http.get(url).then(result=>{
        this.img_c=result.data;
      })
    },
    getNewsList(){
      var url="http://127.0.0.1:3008/news";
      this.$http.get(url).then(result=>{
        this.list=result.data;     
      })
    }
  },
  created(){
    this.getImageList();
    this.getNewsList();
    var that=this;
    window.onscroll = function(){
   		//变量scrollTop是滚动条滚动时，距离顶部的距离
   		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
   		//变量windowHeight是可视区的高度
   		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
   		//变量scrollHeight是滚动条的总高度
   		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      //滚动条到底部的条件
      if(scrollTop!=0&&scrollTop+windowHeight==scrollHeight){
        //写后台加载数据的函数
        // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
        that.ntime=that.ntime-24*60*60*1000;
        // console.log(this.ntime)
         that.getNewsList();
      }   
    }
    this.mui.init();
			 //侧滑容器父节点
      var offCanvasWrapper = this.mui('#offCanvasWrapper');
			 //主界面容器
      var offCanvasInner = document.querySelector('.mui-inner-wrap');
			 //菜单容器
			var offCanvasSide = document.getElementById("offCanvasSide");
			// if (!this.mui.os.android) {
      //   document.getElementById("move-togger").classList.remove('mui-hidden');
			// 	var spans = document.querySelectorAll('.android-only');
			// 	for (var i = 0, len = spans.length; i < len; i++) {
			// 		spans[i].style.display = "none";
			// 	}
			// }
			 //移动效果是否为整体移动
			var moveTogether = false;
			 //侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
			var classList = offCanvasWrapper.classList;
			 //变换侧滑动画移动效果；
			this.mui('.mui-input-group').on('change', 'input', function() {
				if (this.checked) {
					offCanvasSide.classList.remove('mui-transitioning');
					offCanvasSide.setAttribute('style', '');
					classList.remove('mui-slide-in');
					classList.remove('mui-scalable');
					switch (this.value) {
						case 'main-move':
							if (moveTogether) {
								//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
								offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
							}
							break;
						case 'main-move-scalable':
							if (moveTogether) {
								//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
								offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
							}
							classList.add('mui-scalable');
							break;
						case 'menu-move':
							classList.add('mui-slide-in');
							break;
						case 'all-move':
							moveTogether = true;
							//整体滑动时，侧滑菜单在inner-wrap内
							offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
							break;
					}
					offCanvasWrapper.offCanvas().refresh();
				}
			});
			 //主界面和侧滑菜单界面均支持区域滚动；
			this.mui('#offCanvasSideScroll').scroll();
			this.mui('#offCanvasContentScroll').scroll();
			 //实现ios平台原生侧滑关闭页面；
			if (this.mui.os.plus && this.mui.os.ios) {
				this.mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
					plus.webview.currentWebview().setStyle({
						'popGesture': 'none'
					});
				});
			}
    
  },
  updated:function(){
    var gallery = this.mui('.mui-slider');
    gallery.slider({
      interval:1000
    });
  }
}
</script>
<style scoped>
  .app-home .mint-swipe{
    height:200px;
  }
  .banner-img{
    width:375px;
  }
  .mui-scroll,.mui-scroll-wrapper{
    position: relative;
  }
  .date{
    text-align:left;
    margin-left: 1rem;
    margin-top:0.5rem;
  }
  .mui-off-canvas-left {
    color: #fff;
  }
  .title {
    margin: 35px 15px 10px;
  }
  .mui-bar-nav>.link{
    position: relative;
    left:150px;
  }

  /**/
  .canvas_img{
    width:40px;
    height:40px;
    border-radius:50%;
    vertical-align: middle;
  }
  .mui-scroll .link{
    color:#fff;
    font-size: 16px;
  }
  .canvas_title{
    height:60px;
    line-height: 70px;
    text-align: left;
    margin:20px;
  }
  .canvas_subtitle.canvas_subtitle{
    height:40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .canvas_subtitle .link{
    font-size: 15px;
  }
  .canvas_list_container{
    text-align: left;
    margin:10px;
  }
  .canvas_list_container>.link{
    color:#007aff;
    display: inline-block;
  }
  .canvas_list_container>.link>span{
    padding:5px;
  }

  /* .span.mui-icon {
    font-size: 14px;
    color: #007aff;
    margin-left: -15px;
    padding-right: 10px;
  } */
  /* .title+.content {
    margin: 10px 15px 35px;
    color: #bbb;
    text-indent: 1em;
    font-size: 14px;
    line-height: 24px;
  } */

  /* .clear::after{
  content:"";
  display: block;
  clear: both;
  } */
</style>
