<template>
	<div class="aside">
		<el-row>
			<el-col>
				<h5 class="side-tit"><span>学员中心</span></h5>
				<el-menu :default-active='$route.path' :router="true" ref="navv"  class="el-menu-demo"   active-text-color="#fff" @select="handleSelect" @open="handleOpen">
					 <el-menu-item index="/main/studentHome">
				        <i class="el-icon-caret-right"></i>
				        <span slot="title">首页</span>
				      </el-menu-item>
				      <el-menu-item index="/main/Apply">
				        <i class="el-icon-caret-right"></i>
				        <span slot="title">网上报名</span>
				      </el-menu-item>
				      <el-menu-item index="/main/ApplyActivity">
				        <i class="el-icon-caret-right"></i>
				        <span slot="title">已报活动</span>
				      </el-menu-item>
				      <el-menu-item index="/main/MyActivity">
				        <i class="el-icon-caret-right"></i>
				        <span slot="title">我的活动</span>
				      </el-menu-item>
				      <el-submenu index="2" text-color="#fff" background-color="#ac150f">
						    <template slot="title" >
						    	<i class="el-icon-caret-right"></i>
					     		<span slot="title">个人中心</span>
						    </template>
						    <el-menu-item index="/main/userData">个人资料</el-menu-item>
				            <el-menu-item index="/main/Financial">资金明细</el-menu-item>
				            <el-menu-item index="/main/CardLoss">卡片挂失</el-menu-item>
				            <el-menu-item index="/main/ChangePwd">修改密码</el-menu-item>
					  </el-submenu>
				      <el-menu-item index="/main/CommonQuestion">
				        <i class="el-icon-caret-right"></i>
				        <span slot="title">常见问题</span>
				      </el-menu-item>
				</el-menu>
				
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return {
		
			}
		},
		methods:{
			handleSelect(key,path){
				if(path[0]!=2){
					this.$refs.navv.closeMenu('2')
				}
				
			},
			handleOpen(key,path){
				this.$router.push({path:'/main/userData'});
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../assets/style/variable.scss';
	.aside{
		.side-tit{
			border:none;
		}
		
		.el-menu{

			border-right:none;
			background:#f4f4f4;
			border-top:1px solid #ddd;
		}
		.el-menu-item{
			font-size: 16px;
		}
		.el-menu>.el-menu-item{
			border-bottom:1px solid #ddd;
			&:last-child{
				border-bottom:none;
			}
		}
		.el-menu-item.is-active{
			background:$gcolor;
		} 
		.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
			background:#f4f4f4;
		}
		.el-menu-item.is-active:hover,.el-menu-item.is-active:focus{
			background:$gcolor;
			color:#fff;
		}
		.el-submenu.is-active .el-menu{
			background: $activeColor;
			color:#fff;
		}
		.el-menu .el-submenu{
			.el-menu-item{
				color:#333;
				opacity: 1;
			}
			&.is-active{
				.el-menu-item{
					border-color:#a50b05;
					color:#fff;
					opacity: 0.5;
					&.is-active{
						opacity: 1;
					}
				}
			}
		}
		.el-submenu .el-menu .el-menu-item:focus,.el-submenu .el-menu .el-menu-item:hover{
			background: $activeColor;
			color:#fff;
		}
		.el-submenu .el-menu-item.is-active{
			color:#fff;
			opacity: 1;
			background:$activeColor;
		}
		.el-submenu__icon-arrow{
			display: none;
		}
		.el-submenu__title{
			font-size: 16px;
			color:#333;
		}
		.el-submenu.is-opened{
			
				.el-submenu__title{
					.el-icon-caret-right{
						color:#909399;
						transform: rotate(90deg);
						-webkit-transform: rotate(90deg);
						-moz-transform: rotate(90deg);
						filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
					}
		    	}
			.el-menu{
				
			}
		}
		.el-submenu.is-opened.is-active{
				.el-submenu__title{
					background:$gcolor;
					color:#fff;
					font-size: 16px;
					.el-icon-caret-right{
						color:#fff;
					}
				}
				.el-menu{
					background:#ac150f;
					border-top:$gcolor;
					
				}
			}


   }		
</style>