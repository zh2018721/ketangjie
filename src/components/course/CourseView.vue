<template>
  <div class="courserview">
      <div class="course_container">
          <div class="course_content">
              <div class="share-tag">
                  <div class="final-tag"></div>
              </div>
              <!--main-->
                <div class="course_header">
                    <div class="head-icon-wrap"><img class="head-icon" src="https://img.qlchat.com/qlLive/channelLogo/KFULIUY4-PW16-2QC9-1496373754417-MNRI1F1Q32KZ.jpg@750w_469h_1e_1c_2o"></div>
                    <div class="header-bg"></div>
                    <div class="head-bottom-box">
                        <div class="course_count">
                            <div class="joined-wrap">
                                <div class="pics">
                                    <div class="pic" style="background-image: url(&quot;https://img.qlchat.com/qlLive/liveCommon/normalLogo.png@42w_42h_1e_1c_2o&quot;); left: 0px;"></div>
                                    <div class="pic" style="background-image: url(&quot;https://img.qlchat.com/qlLive/userHeadImg/A7F85B01-DED5-41D2-B057-9AE0ECAA49A7-V8NEHIZK93.jpg@42w_42h_1e_1c_2o&quot;); left: -10px;"></div>
                                    <div class="pic" style="background-image: url(&quot;https://img.qlchat.com/qlLive/userHeadImg/BF70D893-C109-4BB5-8AB7-10D71F33E34E-IXAEKNAQXP.jpg@42w_42h_1e_1c_2o&quot;); left: -20px;"></div>
                                </div>
                                <div class="num-tip">
                                    <span class="people-logo"></span><span class="num">5353次</span><span class="tip">学习</span>
                                </div>
                             </div>
                         </div>
                     </div>
                </div>

                <!-- pcrice -->
             

                <!-- info -->
                <div class="course_info">
                    <div class="title">
                        <span class="is-relay">转载</span> 【报名送高坚滤镜】全面学习photoshop，带你成为摄影后期高手
                    </div>
                    <div class="flex-con">
                        <div class="left">
                            <div class="topic-count">
                                更新完结<span>  |  共4节课</span>
                            </div>
                            <div class="course-price-box">
                                <div class="price-wrap"><div class="price">￥139</div></div>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="live-info">
                    <a href="/wechat/page/live/2000002946399178" class="on-log" data-log-name="进入直播间" data-log-region="live-info" data-log-status="">
                        <div class="live-info-wrap icon_enter">
                            <div class="live-desc">
                                <div class="live-icon" style="background-image: url(&quot;https://img.qlchat.com/qlLive/liveCommon/normalLogo.png@62w_62h_1e_1c_2o&quot;);"></div>
                                <div class="title">庄镇坤的直播间qtfkej</div>
                                <div class="symbol-list"><i class="real-name-n"></i></div>
                            </div>
                            <span class="link-icon icon_enter"></span>
                        </div>
                    </a>
               </div>
                <!-- info -->

                <!-- tab -->
                <div class="tab">
                    <div class="tab-item on-log active" data-log-name="简介" data-log-region="tab-item" data-log-pos="intro" data-log-status="">课程介绍</div>
                    <div class="tab-item on-log" data-log-name="课程" data-log-region="tab-item" data-log-pos="course" data-log-status="">听课列表</div>
                    <div class="tab-item on-log" data-log-name="用户评价" data-log-region="tab-item" data-log-pos="evaluate" data-log-status="">用户评价</div>
                </div>
                <!-- tab -->

                <!-- Anchor -->
                <div class="introAnchor">
                    <div class="intro">
                        content
                        <div class="intro-unfold on-log" data-log-name="展开内容" data-log-region="course_intro" data-log-type="unfold-intro-info">
                            <div class="jianbian"></div>
                            <div class="white-block">展开内容 <span class="icon_down"></span></div>
                        </div>
                    </div>
                </div>    
                <!-- Anchor -->

              <!--main-->
          </div>
      </div>
      
  </div>
</template>



<script>
export default {
  name: 'courserview',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
      console.log(this.$route.params.id)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >

 .course_container {
     position: relative
 }
 .share-tag {
    cursor: pointer;
    width: 40px;
}
.share-tag .final-tag {
    position: absolute;
    width:40px;
    height: 40px;
    background: url(../../assets/course/images/share.png);
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    left: 0;
    z-index: 2;
}
.course_header {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 62.5%;
}
.course_header .head-icon-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
}
.course_header .head-icon-wrap .head-icon {
    width: 100%;
    height: 100%;
}
.header-bg {
   position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
}
.head-bottom-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
}
.course_count {
    width: 100%;
    padding: .213333rem 0;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
}

 .joined-wrap {
     -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    flex: auto;
    margin-left: .4rem;
   display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
 }
 .joined-wrap .pic  {
     display: inline-block;
    width: .666667rem;
    height: .666667rem;
    -webkit-border-radius: 1.333333rem;
    border-radius: 1.333333rem;
    border: 2px solid #fff;
    -webkit-background-size: 100% 100%;
    background-size: 100%;
    position: relative;
 }
 .joined-wrap .num-tip {
     margin-left: .133333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
    font-weight: 700;
    color: #fff;
    font-size: 12px
 }
 .joined-wrap .num-tip .people-logo {
     width: .346667rem;
    height: .32rem;
     background: url(../../assets/course/images/count.png);
    -webkit-background-size: 100% 100%;
    background-size: 100%;
    margin-right: .133333rem;
 }
 .specials-count-down {
    background: url(//static.qianliaowang.com/frontend/rs/wechat-react/img/price.1a3a2d5….png) 100% no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    height: 1.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    padding: 0 .373333rem;
}
.specials-count-down .sale {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    color: #f63657;
    margin-right: .213333rem;
    font-weight: 700;
    font-size: 31px;
}
.specials-count-down .price-box .price {
    font-size: 11px;
    line-height: 15px;
    text-decoration: line-through
}
.specials-count-down .price-box .title {
    font-weight: 500;
    border: .013333rem solid #f63657;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -webkit-border-radius: .08rem;
    border-radius: .08rem;
    padding: 0 .133333rem;
    margin-bottom: .026667rem;
    font-size: 10px;
    height: 16px;
}
.specials-count-down .right.special-price {
    background: url(../../assets/course/images/price.png) no-repeat 100%;
    -webkit-background-size: 2.186667rem .533333rem;
    background-size: 2.186667rem .533333rem;
    height: .8rem;
    display: block;
    margin-right: .466667rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    text-align: right;
}
.course_info {
    background-color: #fff;
    padding: .4rem;
}
.course_info .title {
    color: #424242;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight: 700;
    margin-bottom: .213333rem;
    font-size: 16px;
    text-align: left;
}
.course_info .title .is-relay {
    font-size: 14px;
    margin-right: 10px;
    padding: 0 4px;
    color: #fff;
    background: #f64a66;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-weight: 400;
}
.course_info .flex-con {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    margin-bottom: 0;
}
.course_info  .topic-count {
    color: #b8b0b0;
    margin-bottom: .213333rem;
    max-height: 13.333333rem;
    font-size: 12px;
    margin-bottom: 15px
}
.course_info .price-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
}
.price-wrap .price {
    font-size: 16px;
    margin-right: 10px;
    color: #f73657;
    font-weight: 700;
}
 .live-info .live-info-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    background: #fff;
    padding: .266667rem .4rem;
    position: relative;
    overflow: hidden;
}
.live-info .live-info-wrap .live-desc .live-icon {
    width: .826667rem;
    height: .826667rem;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .213333rem;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
}
 .live-info .live-info-wrap .live-desc {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    color: #4c4c4c;
    margin-right: .533333rem;
    overflow: hidden;
}


 .live-info .live-info-wrap .live-desc {
    font-size: 14px;
}
.live-info .live-info-wrap .symbol-list i {
    width: 25px;
    height: 30px;
    background: url(../../assets/course/images/price.png) no-repeat 50%;
    -webkit-background-size: 80% auto;
    background-size: 80% auto;
    margin-left: .08rem;
    vertical-align: middle;
    cursor: pointer;
    display: inline-block
}
.live-info .live-info-wrap .live-desc .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    line-height: .826667rem;
}
.live-info .live-info-wrap .link-icon {
    position: absolute;
    right: .4rem;
    color: #ccc8c8;
    font-size: .32rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-top: .026667rem;
}
 body {
  background: #f5f5f5;
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
    background: #fff
}
html {
    font-size: 41.4px
}
</style>
