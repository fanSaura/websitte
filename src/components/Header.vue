<template>
  <div class="header">
    
    <div v-if="headShow">
        <el-row  class="container">
          <div class="fr nav-top ">
              <el-col class="" v-if="loginn">  
                <div  class="nav-bar fr">      
                    <router-link to="/main/studentHome"  class="person1">
                       <span class="iconfont icon-user active"></span>
                       <span class="person-info">  您好， {{loginn}}</span>
                    </router-link>
                    <el-button type="danger" @click="loginout()">退出</el-button>
                </div>
              </el-col>
              <el-col class="nav-bar" :span='24'  v-else>
                <div class="">
                    <el-col :offset="4" :span="14" class="user-nologin">
                        <span>杭州青少年宫欢迎您！</span>
                        <el-button type="danger" @click="$router.push({path:'/login'})">登录</el-button>
                        <router-link to="/register" >   &nbsp;注册</router-link>
                    </el-col>
                    <el-col :span="6">
                        <ul class="footer-transmit">
                          <li class="fl">
                            <div class="code">
                              <div class="img-contain">
                                <img src="static/images/code1.png" alt="" class="we-code">
                              </div>
                            </div>
                              <a href="" class="we-default"><img src="static/images/wechat.png" alt="" class="icon-png" ></a>
                              <a href="" class="we-active"><img src="static/images/we-active.png" alt="" class="icon-png"></a>
                          </li>
                          <li class="fl">
                            
                            <div class="hover-content">
                              <div class="clearix">
                                <el-col :span="5">
                                  <a href="https://weibo.com/u/2208418714">杭州青少年宫</a>
                                </el-col>
                                <el-col :span="5" :offset="1">
                                  <a href="http://blog.sina.com.cn/u/2715647180">美术部</a>
                                </el-col>
                                <el-col :span="5" :offset="1">
                                  <a href="http://ggjjfwd.blog.163.com/">哥哥 姐姐</a>
                                </el-col>
                                <el-col :span="5" :offset="1">
                                  <a href="http://ggjjfwd.blog.163.com/">智能机械人社团</a>
                                </el-col>
                              </div>
                              <div class="clearix">
                                <el-col :span="5">
                                  <a href="http://weibo.com/u/2257501512">杭州少年文学院</a>
                                </el-col>
                                <el-col :span="5" :offset="1">
                                  <a href="https://weibo.com/u/3199059147">杭州少儿艺术团</a>
                                </el-col>
                                <el-col :span="5" :offset="1">
                                  <a href="http://blog.sina.com.cn/swb86510130">青少年国际交流</a>
                                </el-col>
                                <el-col :span="5" :offset="1">
                                  <a href="http://blog.sina.com.cn/u/2069879972">杭州少年通讯社</a>
                                </el-col>
                              </div>
                              </div>
                              <a href="" class="default"><img src="static/images/microblog.png" class="icon-png" alt=""></a>
                              <a href="" class="active"><img src="static/images/weibo.png" alt="" class="icon-png"></a>
                          </li>
                        </ul>
                    </el-col>
                    
                </div>
              </el-col>          
          </div>
        </el-row >        
        <div class="nav">
           <el-row class="container">
              <el-col class="nav-logo">
                  <img src="static/images/logo-sng.png" alt="" class="logo-text">
              </el-col>
              <el-menu :default-active="$route.path" class="el-menu-demo" :router="true" mode="horizontal"  @select="handleSelect"> 
                  <el-menu-item index="/">首页</el-menu-item>
                  <el-submenu index="/c4r">
                      <template slot="title">中心介绍</template>
                      <el-menu-item index="/center/centerHome">中心概况</el-menu-item>
                      <el-menu-item index="/center/centerInstallation">中心设施</el-menu-item>
                      <el-menu-item index="/center/centerMap">中心地图</el-menu-item>
                      <el-menu-item index="/center/centerHonor">中心荣誉</el-menu-item>
                      <el-menu-item index="/center/subordinateBody">下属机构</el-menu-item>
                      <el-menu-item index="/center/legalNotice">法律申明</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/3">
                      <template slot="title">兴趣培训</template>
                      <el-menu-item index="/training/trainingNotice">培训通知</el-menu-item>
                      <el-menu-item index="/training/projectIntro">项目介绍</el-menu-item>
                      <el-menu-item index="/training/researchTeach">科研教学</el-menu-item>
                      <el-menu-item index="/training/communityStyle">社团风采</el-menu-item>
                      <el-menu-item index="/training/onlineExhibition">网上展厅</el-menu-item>
                      <el-menu-item index="/training/teachers">教师风采</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/t">
                      <template slot="title">中心新闻</template>
                      <el-menu-item index="/news/notice">中心通知</el-menu-item>
                      <el-menu-item index="/news/report">中心报道</el-menu-item>
                      <el-menu-item index="/news/vedioClip">视频剪辑</el-menu-item>
                      <el-menu-item index="/news/mediaReport">媒体报道</el-menu-item>
                      <el-menu-item index="/news/careGuide">关怀指导</el-menu-item>
                      <el-menu-item index="/news/exchange">对外交流</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/act4y">
                      <template slot="title">阵地活动</template>
                      <el-menu-item index="/activity/klbActivity">康乐部阵地活动</el-menu-item>
                      <el-menu-item index="/activity/sportActivity">体育部阵地活动</el-menu-item>
                      <el-menu-item index="http://www.doducity.com/">“Do都城”少儿体验活动馆</el-menu-item>
                      <el-menu-item index="6">5S杭州（国际）青少年洞桥营地</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/thtr4etme">
                      <template slot="title">主题活动</template>
                      <el-menu-item index="/theme/educationNotice">主题教育活动通知</el-menu-item>
                      <el-menu-item index="/theme/traditionalActivities">传统活动项目介绍</el-menu-item>
                      <el-menu-item index="7">主题教育活动报道</el-menu-item>
                  </el-submenu>
                  
                  <el-submenu index="/btt">
                      <template slot="title">品牌窗口</template>
                      <el-menu-item index="/brand/comicGame">国际漫画比赛</el-menu-item>
                      <el-menu-item index="/brand/cocialPractice">杭州市中学生社会实践活动</el-menu-item>
                      <el-menu-item index="/brand/artsFestival">杭州市中小学生艺术节</el-menu-item>
                      <el-menu-item index="8">杭州市中小学生科技节</el-menu-item>
                      <el-menu-item index="/brand/artGrade">美术水平等级考试</el-menu-item>
                      <el-menu-item index="/brand/creativeSpeech">“天堂儿歌”创作和演唱比赛</el-menu-item>
                      <el-menu-item index="/brand/auditorium">成长大讲堂</el-menu-item>
                      <el-menu-item index="/brand/internationalExchange">国际交流</el-menu-item>
                      <el-menu-item index="/brand/cultureIndustry">中华文化创意少年奖</el-menu-item>
                  </el-submenu>
                  <el-submenu index="/tettrrt">
                      <template slot="title">中心团队</template>
                      <el-menu-item index="/team/volunteerGrace">志愿者风采</el-menu-item>
                      <el-menu-item index="/team/volunteerService">志愿服务</el-menu-item>
                      <el-menu-item index="/team/registrationService">报名志愿者服务</el-menu-item>
                      <el-menu-item index="/team/jobs">人才招聘</el-menu-item>
                  </el-submenu>
              </el-menu>
         
            </el-row>  
        </div>
        <slot></slot>
    
      </div>
		  <router-link to="/index" class="header2" v-else>
          <el-row class="container">			
            <el-col :span="12">				
              <a href="#" class="logo-img">
                <img src="static/images/logo.png" alt="">
                <span class="logo-text">{{text}}</span>
            	</a>			
            </el-col>  			
            <el-col :span="4" class="fr" v-if="buttonShow"> 
                <router-link to="/" >返回首页  |</router-link>
                <router-link to="/login" >登录</router-link>
            </el-col>
          </el-row>

      </router-link>    
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
         loginn:window.sessionStorage.getItem('key'),
    }
  },
  props:['headShow','text','buttonShow'],
  methods:{
    handleSelect(key,keypath){

    },
    loginout(){
      sessionStorage.removeItem('key');
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" > 
@import '../assets/style/variable.scss';
.header{
  .el-button--danger{
    font-size: 14px;
  }
  .nav-top.fr{
    width:40%;
  }
  .person1{
    color:$gcolor;
    margin-right: 10px;
    line-height: 10px;
    .person-info{
      margin-top:10px;
    }
  }
  .footer-transmit{
			overflow: hidden;
			li{
        .icon-png{
          width:80%;
          height:80%;
        }
				&:first-child:hover .code{
					display: block;

				}
				&:first-child:hover .we-active{
					display: block
				}
				&:first-child:hover .we-default{
					display: none;
				}
				.code{
					display: none;
					position:absolute;
					top:60px;
					right:80px;
					z-index: 100;
					padding:5px;
					width:184px;
					height:204px;
					border-radius:8px;
					background:url('../../static/images/xin-code.png') no-repeat center;
                   .img-contain{
                   	width:174px;
                   	height:176px;
                   }
				}
				.we-code{
					width:100%;
					height:100%;
          margin-top:17px;
				}
				.we-active{
					display:none;
				}
				.hover-content{
          
					width:575px;
					height: 114px;
					position:absolute;
					top:60px;
				  display: none;
					padding:20px 15px;
          padding-top:35px;
					right:80px;
					line-height: 30px;
					z-index:1000; 
					background:url('../../static/images/wei-pao.png') no-repeat center;
					a{
						color:#333;
						&:hover{
							color:#cf261f;
						}
					}
				}
				&:first-child{
					margin-right:5px;
				}
				&:last-child{
					.active{
						display: none;
					}
					&:hover{
						.active{
							display: block;
						}
						.default{
							display: none;
						}
						.hover-content{
							display: block;
						}
					}
				}
			}
		}
    .nav-bar{
      .user-nologin{
        margin-top:10px;
      }
      margin: 10px 0;
      .el-button{
        padding: 5px 14px;
        border-radius: 0;
      }
      .el-button--text{
        color:#333;
         padding: 6px 14px;
      }
       .el-button--text:hover{
        background: $gcolor;
        color:#fff;
       }
    }
      .nav-logo{
      
        width:248px;
        height: 150px;
        position: absolute;
        background-size:contain;
       
       top:-48px;
        z-index: 100;
        .logo-text{
          margin-top: 7px;
        }
      }
      
      .nav{   
            background:$gcolor;  
            .el-menu{
                background:$gcolor;                
                color:#fff;
                padding-left:230px;
                box-shadow:none;
                -webkit-shadow:none;
                &.el-menu--horizontal .el-submenu .el-submenu__title:hover{
                    background:#ac150f
                }
                  >.el-menu-item:nth-child(2){
                    padding:0;
                  }
                .el-submenu{

                  .el-submenu__title{
                    font-size: 16px;
                    color:#fff;
                    i{
                      color:#fff;
                    }
                  }
                  .el-menu{
                      padding:0;
                      top:60px;
                      background:$Mcolor;
                    .el-menu-item{
                        min-width: auto;
                        padding: 0 10px;
                        height: 44px;
                        line-height: 44px;
                        background: #e4e4e4;
                        color: #666;
                        border-top: 1px solid #d1d1dd;
                        border-bottom: 1px solid #f1f1f1;
                        text-align: center;
                        &.el-menu-item:nth-child(2){
                           padding:0;
                        }
                        &.is-active{
                          color:$gcolor;
                        }
                        &:hover{
                          background:#ebebeb;
                          color:$gcolor;
                        }
                    }
                  }
              }
            }
            .el-menu--horizontal,.el-menu--horizontal .el-menu-item{
              color:#fff;
              font-size: 16px;
              border:none;
            }
            
            
        }
        .header2{
          display: block;
          padding-top:40px;
          padding-bottom:20px;
          line-height: 50px;
          border-bottom:1px solid #bfbfbf;
          .logo-text{
            display: inline-block;
            border-left:1px solid #afafaf;
            font-size: 28px;
           
            padding:0 14px;
            font-size: 26px;
            position: relative;
            top: -10px;
            margin-left: 15px;
          }
        }
        .el-menu-item:focus, .el-menu-item:hover,.el-menu--horizontal>.el-menu-item.is-active{
            background:$activeColor;
            border-bottom-color:$activeColor;
        }
        
       .el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
            border-bottom-color:$activeColor;
            background:$activeColor;
       }
        .el-button--danger.is-plain {
            color: #333;
            background: #fff;
            border-color: #fff;
        }
        .el-button--danger:focus, .el-button--danger:hover{
           background: $gcolor;
           border-color: $gcolor;
           color:#fff;
        }
        
}
.el-menu--horizontal .el-menu-item:ntn-child(2){
              padding:0;
            }
</style>
