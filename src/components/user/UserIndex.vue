<template>
  <div>
      会员主页
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[]
    }
  },
  methods:{
    open(courseid){
      this.$router.push('/course',{
        id:courseid
      })
    }
  },
  mounted(){
    
   this.$post(`/Json/index.php?act=Microportal.allnewList`,{
      type:2,
      courseType:4,
      from:1,
      p:1,
      maxperpage:10
    })
    .then(res=>{
      let allnewList = res.data.allnewList;
      allnewList.list[0].defaultpic = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545482022229&di=e7c86aaafa7e5a2cae975c5367d0febb&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181221%2F0c8dcae3a20e4ef082189e9e7f5c60eb.jpeg';
      allnewList.list[1].defaultpic = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545482099948&di=c6cd6162b49062bfb1f96f30af8774bd&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140613%2FImg400819036.jpg'
      this.list = allnewList.list;
    })
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >
 .course-item {
    cursor: pointer;
    margin-left: 21px;
    padding-right: 21px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
}
 .course-item .logo-con {
    padding-top: 20px;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -moz-box-flex: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
}
.course-item .logo-con .logo {
    height: 74px;
    width: 120px;
}
 .course-item .logo-con .logo {
    margin: 0 21px 21px 0;
    background-color: #cab7a8;
    overflow: hidden;
    -webkit-border-radius: .3px;
    border-radius: 3px;
    position: relative;
}
 .course-item .logo-con .logo img {
    width: 120px;
}
 .course-item .logo-con .is-relay {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    letter-spacing: 0;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 0 0 .053333rem 0;
    border-radius: 0 0 .053333rem 0;
    padding: .093333rem;
}
 .course-item .logo-con .is-relay {
    font-size: 11px;
}
 .course-item .main-con {
    padding-top: 18px;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
}
 .course-item .main-con .course-name {
    margin-bottom: 21px;
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
    position: relative;
}
 .course-item .main-con .course-name .left .title {
    font-weight: 700;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    vertical-align: middle;
    height: 35px;
    font-size: 13px;
    text-align: left
}
 .course-item .main-con .last-con {
    margin-bottom: 21px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    height: 17px
}
 .course-item .main-con .last-con .learning-num {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    color: #b2b2b2;
    font-size: 12px
}
 .course-item .main-con .last-con .charge {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    color: #f73657;
    font-size: 11px
}
 .abandon {
  margin-right:3px;
  color: #b3b3b3;
    text-decoration: line-through;
}

.course-list-container {
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
    background: #fff
}

</style>
