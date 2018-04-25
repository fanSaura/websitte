<template>
		<el-row  class="trainingMain">
			<el-col >
				<p class="head">您的位置 : <router-link to="">首页</router-link> > <span>兴趣培训</span> > <span class="active">培训通知</span></p>
				<el-menu router class="el-menu-demo" >
					<el-menu-item  index="/training/trainingNotice/noticeMain" v-for="item in list">
					 	<span class="title">{{item.title}}</span>
					 	<span class="time">{{item.time}}</span>
				    </el-menu-item>
				   
				</el-menu>
			</el-col>			
		</el-row>
	
</template>
<script>
	export default{
		data(){
			return {
				list:[
					{
						title:"收费窗口1月15日至2月11日开放时间变动",
						time:" 	2018-01-13"
					},
					{
						title:"元旦四地收费室开放时间",
						time:"2017-12-24"
					},
					{
						title:"2018年春季招生通告",
						time:"2017-12-06"
					},
					{
						title:"文学领航班（五年级）招生通告",
						time:"2017-12-01"
					},
					{
						title:"口才训练营，想说你就来",
						time:"2017-12-01"
					},
					{
						title:"暑期小记者集训班报名开始啦",
						time:"2017-05-20"
					},
					{
						title:"2017年暑期、秋季招生通告",
						time:"2017-05-13"
					},
					{
						title:"【录取名单】“小明星”艺术日托班2017学年新生录取名单",
						time:"2017-04-16"
					},
					{
						title:"“小明星”艺术日托班2017年招生通告",
						time:"2017-04-05"
					},
					{
						title:"分享 助力 沟通",
						time:"2017-03-31"
					},
					{
						title:"杭州青少年活动中心体育部2017年春季招生指南",
						time:"2016-12-08"
					},
					{
						title:"元旦期间培训安排",
						time:"2016-12-07"
					}
				]
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
.trainingMain {
	
	.el-menu{
		border-right: none;
		.el-menu-item, .el-submenu__title{
		height: 30px;
		line-height: 30px;
		.title{
			float: left;
		}
		.time{
			float: right;
		}	
	}
	}	
}
</style>