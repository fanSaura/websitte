<template>
	<el-row  class="listStyle">
		<el-col >
			<p class="head">您的位置 : <router-link to="">首页</router-link> > <span>{{titleOne}}</span> > <span class="active">{{titleTwo}}</span></p>
			<el-menu router class="el-menu-demo" >
				<el-menu-item  :index="path" v-for="item in list">
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
				
			}
		},
		props:['list','path','titleOne','titleTwo'],
		methods:{
			handleSelect(key, keyPath) {
		      

		      }
		},
	}
</script>
<style lang="scss" rel="stylesheet/scss">
.listStyle{
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