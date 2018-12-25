<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer-bar line line-top">
        <ul>
          <router-link to="/" tag="li">
            <div class="icon icon-index"></div>
            <div class="name">首页</div>
          </router-link>
          <router-link to="/course" tag="li">
            <div class="icon icon-course"></div>
            <div class="name">发现</div>
          </router-link>
          <router-link to="/user" tag="li">
            <div class="icon icon-learn"></div>
            <div class="name">已购</div>
          </router-link>
          <router-link to="/user" tag="li">
            <div class="icon icon-me"></div>
            <div class="name">我的</div>
          </router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

/*重置属性*/
*{
    margin: 0;
    padding: 0;
}
html{
    font-size: 20px;
}
body {
	background: #f5f5f5
}
a{
    text-decoration: none;   
}
body,
a,
input,
textarea{
    color: #424242;
    font-size: .6rem
}
li{
    list-style: none
}

#app{
  padding-bottom: 2.45rem;
}

/*通用*/
.line{ position:relative;}
.line:after{
	display: block;
	content: " ";
	height: 0px;
	width: 100%;
	box-sizing: border-box;
	border-bottom:1px solid #ddd;
	-webkit-transform: scaleY(0.5);
	-ms-transform: scaleY(0.5);
	transform: scaleY(0.5);
	-webkit-transform-origin: 0 100%;
	-ms-transform-origin: 0 100%;
	transform-origin: 0 100%;
	position: absolute;
	bottom: 0px;
	left: 0;
	right: 0;
	z-index: 1;
}
.line-top:after{
    top:0;
    bottom:inherit;
    -webkit-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	transform-origin: 0 0;
}

.loading{
  width: 4rem;
  height: 4rem;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -2rem;
  margin-top: -2rem;
}

/*底部菜单*/
.footer-bar{
  width: 100%;
  height: 2.45rem;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
}
.footer-bar li{
  width: 25%;
  float: left;
  text-align: center;
}
.footer-bar .icon{
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  margin: 0 auto;
  margin-top: .25rem;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat
}
.footer-bar .icon-index{
  background-image: url(assets/common/nav_icon_index_n.png)
}
.footer-bar .icon-course{
  background-image: url(assets/common/nav_icon_lesson_n.png);
}
.footer-bar .icon-learn{
  background-image: url(assets/common/nav_icon_buy_n.png);
}
.footer-bar .icon-me{
  background-image: url(assets/common/nav_icon_me_n.png)
}
.footer-bar .name{
  line-height: 1rem;
  color: #999;
  font-size: .5rem
}
.footer-bar .router-link-exact-active .name{
  color:#424242;
}
.footer-bar .router-link-exact-active .icon-index{
  background-image: url(assets/common/nav_icon_index_s.png)
}
.footer-bar .router-link-exact-active .icon-course{
  background-image: url(assets/common/nav_icon_lesson_s.png)
}
.footer-bar .router-link-exact-active .icon-me{
  background-image: url(assets/common/nav_icon_me_s.png)
}
</style>
