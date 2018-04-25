<template>
	<div class="footer">
		<div class="row-footer">
			<el-row  class="">
				<a href="">杭州(国际)青少年洞桥营地</a>
				<a href="">杭州DO都城</a>
				<a href="">青少年宫在线	</a>
				<a href="">中国校外教育网中国共青团 </a>
				<a href="">中国青少年宫协会</a>
			</el-row>
		</div>
		<div class="footer-bg">
			<el-row class="container">
				<el-col :offset="1" :span="13" class="footer-info">
					<ul >
						<li>
							<span>指导单位：浙江省青少年校外教育中心  &nbsp; &nbsp; &nbsp;</span>
							<span>主办单位：杭州青少年活动中心（杭州青少年宫）</span>
						</li>
						<li>
							<span>地址：浙江省杭州市西湖区昭庆寺里街22号 &nbsp; &nbsp; &nbsp;</span>
							<span>电话：86-571-12355-8传真：86-571-85821012</span>
						</li>
						<li>
							浙ICP备07000455号-1   浙公网安备33010602001677号
							<img src="static/images/footer1.png" alt="" class="footer-icon">
							<img src="static/images/footer2.png" alt="" class="footer-icon">
						</li>
					</ul>
				</el-col>
				<el-col :span="3" :offset="3">
					<div class="cent">
						<img src="static/images/weixin.png" alt="" class="weixin">
						<p >  杭州青少年宫活动中心</p>
					</div>
				</el-col>
				<el-col  :span="3" :offset="1">
				<img src="static/images/code1.png" alt="" class="footer-code">
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>

	export default{
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
	.footer{
		.row-footer{
			height:42px;
			line-height:42px;
			background:#eee;
			text-align: center;
			a{
				margin-right:30px;
			}
		}
		.footer-bg{
           	bottom:0;
			width:100%;
			padding-top:20px;
			padding-bottom:15px;
			background:#cf261f;
			color:#e8aaa9;
			border-top:1px solid #e8e8e8;
		}
		img{
			border:0;
			outline:none;
			border-style:none;
		}
		.footer-code{
			width:120px;
		}
		.weixin{
			vertical-align: middle;
			text-align:center;
		}
		.cent{
			margin-top:36px;
			margin-right:-40px;
		}
		.footer-info{
			margin-top:20px;
		}
	
		ul{ 
			a{
				color:#fff;
				&:hover{
					color:#cf261f;
				}
			}
			
			line-height: 24px;
			.footer-icon{
				    height: 25px;
				    position: relative;
				    top: 5px;
				    margin-left:5px;
				}
		}
		.footer-transmit{
			overflow: hidden;
			margin-top: 10px;
			li{
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
					bottom:95px;
					right:30px;
					z-index: 100;
					padding:5px;
					width:184px;
					height:204px;
					border-radius:8px;
					background:url('../../static/images/we-bg.png') no-repeat center;
                   .img-contain{
                   	width:174px;
                   	height:176px;
                   }
				}
				.we-code{
					width:100%;
					height:100%;
				}
				.we-active{
					display:none;
				}
				.hover-content{
					width:575px;
					height: 114px;
					position:absolute;
					top:-103px;
					display: none;
					padding:20px 15px;
					right:20px;
					line-height: 30px;
					z-index:100;
					background:url('../../static/images/pao.png') no-repeat center;
					a{
						color:#333;
						&:hover{
							color:#cf261f;
						}
					}
				}
				&:first-child{
					margin-right:20px;
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
		.line{
			float: left;
			position:relative;
			top:-16px;
			margin-right: 20px;
		}
	}
</style>