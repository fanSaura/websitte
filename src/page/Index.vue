<template>
	<div class="index">
		<m-Header :headShow="headShow"></m-Header>
		<div class=" main-c">
			<div class="container">
				<div class="rel headNav">
					<div  class="big-banner">
						<div class="container">
							<div class="banner-bg">
								<el-row class="flex ">   
										<swiper :img="imgn" type="navs">
											<slot name="navs" ></slot>
										</swiper>
								</el-row>
							</div>
						</div>
					</div>
			    </div>
				<el-row class="mt20" >
					<div class="white-bg" style="width:710px;float: left;">
						<div class="clearfix item-title">
							<div class="fl title-bar">
								<span>中心报道</span>
								<i class="English">
									Central Report
								</i>
							</div>
							<router-link class="fr" to="/news/report">
								更多
								<i class="el-icon-arrow-right"></i>
							</router-link>
						</div>
						<div class="item-content">
							<el-row class="card">
								<el-col :span="13"  class="center-img">
									<img src="static/images/index1.png" class="hover-scale" width="320">
								</el-col>
								
								<el-col :span="11">
									<a href="#" style="display: block;">
										<h4 class="article-tit">2017年杭州青少年科学考察活动圆满结束</h4>
										<p class="article">
											     8月17日下午，2017杭州青少年“生态治水”科学考察活动汇报仪式在杭州青少年活动中心联欢厅顺利结束。本次科考活动由杭州市科委、杭州市青少年活动中心联合主办，杭州市环保局进行指导本次科考以“生态治水”为主题……   
										</p>
										<p class="clearfix article mt10">
											<span class="t-9f">发布时间 2017-03-04</span>
											<router-link to="/center/centerHome" class="active fr"> 查看详情></router-link>
										</p>
									</a>
								</el-col>
							</el-row>
							<el-row class="index-list">
								<ul>
									<li v-for="item in list1">
										<p class="fl list">
											<i class="circle"></i>
											{{item.title}}
										</p>
										<span class="fr">
											{{item.date}}
										</span>
									</li>
								</ul>
							</el-row>
						</div>
					</div>
					<div  class="right-side" style="margin-left:20px;width: 440px;float: left;">
						<div class="white-bg ">
							<div class="clearfix item-title">
								<div class="fl title-bar">
									<span>中心通知</span>
									<i class="English">
										Central Notice
									</i>
								</div>
								<router-link to="/news/notice" class="fr">
									更多
									<i class="el-icon-arrow-right"></i>
								</router-link>
							</div>
							<div class="item-content ">
								<div class="index-list">
									<ul>
										<li v-for="item in list2">
											<router-link to="/news/notice/noticedetail">
												<span class="t-9f">{{item.date}}</span>
												<span class="content"> &nbsp;&nbsp;{{item.content}}</span>
											</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>	
						<div class="mt10 abs">
							<router-link to="/center/centerMap">
							  <img src="static/images/map.png">
						    </router-link>
						</div>
					</div>
				</el-row>
				<div class="mt20 white-bg media">
						<div class="clearfix item-title"> 
								<div class="title-bar g-bg" @click="mediaClick()" :class="{'grey-bar':!tabShow,'r-bg':!tabShow}">
									<span>媒体报道</span>
									<i class="English">
										Media coverage
									</i>
								</div>
								<div class="title-bar" :class="{'grey-bar':tabShow}"  @click="tabShow=false">
									<span>视频剪辑</span>
									<i class="English">
										   Videos
									</i>
								</div>
								<router-link class="fr" :to='tabShow ? "/news/mediaReport":"/news/vedioClip" '>
									更多
									<i class="el-icon-arrow-right"></i>
								</router-link>
						</div>
						<el-row class="item-content" v-if="tabShow">
							<swiper :img="imga" type="media">
								<slot name="imgShow"></slot>
								<slot name="media" ></slot>
							</swiper>
							<!-- <el-col class="content-module">
								
							</el-col> -->

						</el-row>
						<div class="item-content videos" v-else>
							<div class="content-module">
								视频剪辑
							</div>
							<div class="content-module">
								
							</div>
							<div class="content-module">
								
							</div>
						</div>
				</div>
				<div class="mt20">
					<!-- <img src="static/images/bigger-banner.png"> -->
					<el-carousel :interval="5000" arrow="always">
					    <el-carousel-item v-for="(item,index) in imgs" :key="index">
					      <img :src="item.img">
					    </el-carousel-item>
					</el-carousel>
				</div>
				<div>
				<!-- 品牌窗口 -->
				<div class="brand white-bg">
					<div class="clearfix item-title" >
							<div class="fl title-bar">
								<span>品牌窗口</span>
								<i class="English">
									Brand Image
								</i>
							</div>
							<a class="fr">
								更多
								<i class="el-icon-arrow-right"></i>
							</a>
					</div>
					<div class="item-content">
						<swiper :img="img" type="five"></swiper>
					</div>
				</div>
				<div class="brand white-bg mt20 media">
					<div class="clearfix item-title" >
							<div class="fl title-bar">
								<span>网上展厅</span>
								<i class="English">
									Exhibition
								</i>
							</div>
							<a class="fr">
								更多
								<i class="el-icon-arrow-right"></i>
							</a>
					</div>
					<div class="item-content">
						<swiper :img="imgd" type="three">
							<slot name="exh"></slot>
						</swiper>
					</div>
				</div>

				
			   </div>	
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>
<script>
import mHeader from '../components/Header.vue'
import mFooter from '../components/Footer.vue'
import swiper from '../components/Swiper.vue'
	export default{
		data(){
			return{
				tabShow:true,
				headShow:true,
				img:[],
				imgd:[],
				imga:[],
				imgn:[],
				navs:[],
				list1:[
					
					{
						title:'青春造梦工厂，因你而精彩——杭州市第十三届中学生社会实践岗位招聘会顺利举办',
						date:'2018-01-22'
					},
					{
						title:'Do都城”新晋市长出炉！她的父母总结了三个养成关键词！',
						date:'2018-01-19'
					},
					{
						title:'杭州少年交警走进“汽车空间”涨知识',
						date:'2018-01-19'
					}
				],
				list2:[
					{
						date:'2018-01-18',
						content:'中心富士DX100干式照片冲印机采购项目中标公告'
					},
					{
						date:'2018-01-18',
						content:'2018年春季杭州少儿英语俱乐部录取名单'
					},
					{
						date:'2018-01-17',
						content:'新年有约，快乐无限Happy New Year！ Happy Family！——外语部第二十二届迎新Party活动预告'
					},
					{
						date:'2017-12-22',
						content:'幼儿（1-6岁）亲子活动类兼职辅导教师招聘'
					},
					{
						date:'2018-01-13',
						content:'关于招聘物业管理人员和保安的公告'
					},

				],
				imgs:[
					{img:'static/images/bigger-banner.png'},
					{img:'static/images/bigger-banner.png'},
					{img:'static/images/bigger-banner.png'}
				],
	     
			                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
			}

		},
		methods:{
			mediaClick(){
				this.tabShow=true;
				this.$nextTick(()=>{
					var swiper = new Swiper('.swiper-container.media', {
		                  slidesPerView:3,
		                  spaceBetween:30,
		                  navigation: {
		                    nextEl: '.swiper-button-next',
		                    prevEl: '.swiper-button-prev',
		                    hideOnClick: true,
		                  },
		                  pagination: {
		                    el: '.swiper-pagination',
		                    clickable: true,
		                  },
		                });
				})
				
			}
		},
		components:{
			mHeader,
			mFooter,
			swiper
		},
		created(){

			this.$http.get("static/data/index.json").then(res=>{	
				console.log(res.data.img)
				  	this.img = res.data.img
				  	this.imgd = res.data.imgd;
					  this.imga=res.data.imga;
					  this.imgn=res.data.imgn;
				  	this.$nextTick(()=>{
		              var swiperd = new Swiper('.swiper-container.five', {
		                  slidesPerView: 5,
		                  spaceBetween:5,
		                  navigation: {
		                    nextEl: '.swiper-button-next',
		                    prevEl: '.swiper-button-prev',
		                    hideOnClick: true,
		                  },
		                  pagination: {
		                    el: '.swiper-pagination',
		                    clickable: true,
		                  },
		                });
		              var swiper = new Swiper('.swiper-container.three', {
		                  slidesPerView:3,
		                  spaceBetween:30,
		                  navigation: {
		                    nextEl: '.swiper-button-next',
		                    prevEl: '.swiper-button-prev',
		                    hideOnClick: true,
		                  },
		                  pagination: {
		                    el: '.swiper-pagination',
		                    clickable: true,
		                  },
						});
						var swiper = new Swiper('.swiper-container.media', {
		                  slidesPerView:3,
		                  spaceBetween:30,
		                  navigation: {
		                    nextEl: '.swiper-button-next',
		                    prevEl: '.swiper-button-prev',
		                    hideOnClick: true,
		                  },
		                  pagination: {
		                    el: '.swiper-pagination',
		                    clickable: true,
		                  },
		                });
		                var swiper = new Swiper('.swiper-container.navs', {
		                  slidesPerView:6,
		                  spaceBetween:20,
		                  navigation: {
		                    nextEl: '.swiper-button-next',
		                    prevEl: '.swiper-button-prev',
		                    hideOnClick: true,
		                  }
		                });
		            })
				  	 
				  }												
			).catch(err=>{							
					console.log(err)
			})
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../assets/style/variable.scss';
	.index{
		background:#f4f4f4;
		.main-c{
			width:100%;
			height: 100%;
			background:url('../../static/images/home-banner.png') no-repeat center;
		}
		.center-img{
			width:320px;
			height:213px;
			overflow: hidden;
			margin-right:20px;
		}
		.item-title{
			line-height: 40px;
			padding-right:20px;
			
			.fr{
				color:#333;
			}
				.title-bar{
					cursor: pointer;
					display: inline-block;
				   	width: 304px;
				   	height:32px;
					border-top-left-radius:5px;
				   	line-height: 32px;
				   	padding-left:10px;
				    background:url('../../static/images/nav-bar.png') no-repeat center;
				    &:nth-child(2){
				    	margin-left:-4.5px;
						border-radius: 0;
						background:url('../../static/images/nav-bar1.png') no-repeat center;
				    }
				    &.g-bg{
				    	background-color:#dadada;
				    }
				   	&.grey-bar{
				   		&.r-bg{
				   			background-color:$gcolor;
				   		}
				   		background-size:cover;
				   		width:324px;
				   		background:#fff url('../../static/images/grey-bar.png') no-repeat left center;
				   		 span,i{
				   		 	color:#666;
				   		 }
					   	}
				   	span{
				   		font-size: 22px;
				   		color:#faecec;
				   	}
				   	i{
				   		position:relative;
				   		top:-2px;
				   		color:#fff;
				   		opacity: 0.7;
				   		margin-left: 10px;
				   	}
			   }
			
		}
		.img-title{
	 		img{
		 		width:362px;
		 		vertical-align: middle;
		 	}
		 	
	 	}
	   .t-9f{
	   	color:#9f9f9f;
	   	float: left;
	   }
	   .white-bg{
	   	background:#fff;
	   }
	   .right-side{
	   	 .item-content{
	   	 	padding:10px 10px;
	   	 }
	   	 .abs{
		 	margin-top:20px;
		}
	   }
	   .item-content{
		   &.videos{
			   height:429px;
		   }
		   	.article-tit{
		   		line-height: 30px;
		   	}
		   	.article{
		   		color:#9f9f9f;
		   		margin-top:10px;
		   		line-height: 26px;
		   		text-indent:20px;
		   		font-size: 12px;
		   		&.mt10{
		   			text-indent: 0;
		   		}
		   	}

		   	.index-list{
		   		margin-top: 10px;
		   		overflow: hidden;
		   		li{
		   			.list{
		   				width: 550px;
	    				overflow: hidden;
	    				text-overflow: ellipsis;
	    				white-space: nowrap;
		   				.circle{
			   				width:5px;
			   				height:5px;
			   				display: inline-block;
			   				border-radius: 50%;
			   				background:#ababab;
			   				margin-right: 15px;
			   				vertical-align: middle;
		   				}
		   			}
		   			.fr{
						color: #9f9f9f;
		   			}
		   			
		   			line-height: 32px;
		   		}
		   		.content{
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    width: 336px;
				    display: inline-block;
				    float: left;
				    padding-left: 20px;
		   		}
		   	}
		   		>.index-list{
		   		margin-top: 0;
		   	}
	   }
		.headNav{
			.big-banner{
				padding-top: 380px;
				.banner-bg{
					bottom:100px;
					width: 100%;
					height: 100px;
					background:#fff;
					
					.flex{
						position: relative;
						top:-60px;
						.item{
							text-align: center;
							p{
								line-height: 32px;
								font-size: 18px;
								color:#9f9f9f;
								margin-top: 10px;
								text-align: center;
							}
							.iconfont{
								cursor: pointer;
								display: inline-block;
								width: 90px;
								height: 90px;
								line-height: 90px;
								text-align: center;
								color: #fff;
	                            font-size: 50px;
	                            transition: all 1s;
								-moz-transition: all 1s; /* Firefox 4 */
								-webkit-transition: all 1s; /* Safari 和 Chrome */
								-o-transition: all 1s; /* Opera */
	                            &:hover{
	                            	transform: scale(1.2);
	                            	-webkit-transform: scale(1.2);
	                            	-moz-transition: scale(1.2);
	                            	-o-transform:scale(1.2);
	                            	-ms-transform:scale(1.2);
	                            }
								&.icon-icon-yxj-Hobbies{
									background:url('../../static/images/iconBg.png') no-repeat center;
									font-size: 58px;
									background-size:cover;
								}
								&.icon-keji{
									background:url('../../static/images/iconBg2.png') no-repeat center;
									background-size:cover;
								}
								&.icon-xingqupeixunjiaofei{
									background:url('../../static/images/iconBg3.png') no-repeat center;
									background-size:cover;
								}
								&.icon-icon-yxj-activity1{
									background:url('../../static/images/iconBg4.png') no-repeat center;
									background-size:cover;
								}
								&.icon-caiwu{
									background:url('../../static/images/iconBg5.png') no-repeat center;
									font-size: 45px;
									background-size:cover;
								}
								&.icon-s{
									background:url('../../static/images/iconBg6.png') no-repeat center;
									font-size: 34px;
									background-size:cover;
								}
							}
						}
					}
				}
				
			}
		}
		.media{
			.item-content{
				overflow: hidden;
				.swiper-slide{
					
				}
			}
			 .content-module{
			 	 width: 362px;
			 	 margin-right: 20px;
			 	&.content-details{
			 		padding:10px;
			 		.text-over{
			 			overflow: hidden;
			 			text-overflow:ellipsis;
			 			white-space: nowrap;
			 			width: 210px;
			 		}
			 		.detail-main{
			 			margin-top: 10px;
			 			line-height: 24px;
			 			color:#9f9f9f;
			 			text-indent:20px;
			 			overflow: hidden;
			 			text-overflow:ellipsis;
			 			height: 72px;
			 			display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
			 		}
			 	}
			 }
		}
	}
	.el-carousel__container{
		height: 140px;
	}

	.swiper-container {
      width: 96%;
      height: 100%;
    }
	.media .swiper-slide{
		position:relative;
		.img-contain{
			width:361px;
			height:241px;
			overflow: hidden;
		}
	}
	.five .swiper-slide{
		width:220px;
		height:160px;
		overflow: hidden;
	}
	.swiper-container.media{
		height:389px;
		.swiper-button-prev,.swiper-button-next{
			top:35%;
		}
	} 
    .swiper-container.navs{
		margin-left:0;
		margin-right:0;
		padding-left:20px;
		padding-right:20px;
		.swiper-button-prev{
				background-image:url('../../static/images/btn-prev.png');
							height:100px;
							width:20px;
							background-size:cover;
							left: 0;
                            top: 82px;
			}
		.swiper-button-next{
				background-image:url('../../static/images/btn-next1.png');
							top:82px;
							right:0;
							height:100px;
							width:20px;
							background-size:cover;
				
		}
		
	} 

		 	
</style>