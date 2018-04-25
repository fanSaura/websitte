<template>
	<div class="asideq">
		<el-row >
			<el-col >
				<h5 class="side-tit"><span>{{list.title}}</span></h5>
				<el-menu :default-active='$route.path' :router="true" class="el-menu-demo" active-text-color="#cf261f"  @select="handleSelect">
					 <el-menu-item :index="item.path" v-for="(item,index) in list.main" :key="index">
				        <i class="el-icon-caret-right"></i>
				        <span slot="title">{{item.text}}</span>
				      </el-menu-item>
				</el-menu>
				<router-link to="/question" class="question-link"><i class="el-icon-question"></i><span class="cword">常见问题</span><span class="eword">Qestion</span></router-link>
				
			</el-col>
			
		</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				'index':'',
			}
		},
		props:['list'],
		methods:{
			handleSelect(key, keyPath) {
		      

		      }
		},
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../assets/style/variable.scss';
	.asideq{	
		.side-tit{
			padding:7px 0;
			background:#fff;
			
			span{
				padding-left: 10px;
				font-size: 18px;
				line-height:15px;
				border-left:3px solid $gcolor;
			}
		}
		.el-menu{
			border-right:none;
			border:1px solid #ddd;
			border-top:2px solid $gcolor;
			margin-bottom: 20px;
		}
		.el-menu-item{
			font-size: 16px;
			width: 240px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}
		.el-menu-item:focus, .el-menu-item:hover{
			color:$gcolor;
			background-color: #fff;
			i{
				color:$gcolor;
			}
		}
		/*.el-menu>.el-menu-item{
			&:last-child{
				border-bottom:none;
			}
		}*/
		/*.el-menu-item.is-active{
			color::$gcolor;
		} 
	*/
		
		/*.el-menu-item.is-active:hover,.el-menu-item.is-active:focus{
			color:$gcolor;
		}*/
		/*.el-menu-item-group__title{
			display: none;
		}
		.el-menu-item-group{
			background: $activeColor;
			color:#fff;
		}*/
		/*.el-submenu .el-menu-item{
			color:#fff;
			opacity: 0.5;
		}*/
		/*.el-menu-item-group .el-menu-item:focus,.el-menu-item-group .el-menu-item:hover{
			background: $activeColor;
		}*/
		/*.el-menu-item-group .el-menu-item.is-active{
			color:#fff;
			opacity: 1;
			background:$activeColor;
		}*/
		/*.el-submenu__icon-arrow{
			display: none;
		}*/
		/*.el-submenu.is-opened .el-submenu__title{
			background:$gcolor;
			color:#fff;
			.el-icon-caret-right{
				color:#fff;
				transform: rotate(90deg);
				-webkit-transform: rotate(90deg);
  				-moz-transform: rotate(90deg);
  				filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
			}

		}*/
   }
   .question-link{
   	display: block;
   	text-align: center;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    i{
    	font-size: 50px;
	    vertical-align: middle;
	    padding-right: 8px;
	    color:$gcolor; 
    }
    .cword{
    	font-size: 20px;
    	padding-right: 4px
    	
    }
    .eword{
    	font-size: 20px;
    	color: #bebebe;
    }
   }		
</style>