<template>
	<div class="Nav-tab">
	<el-tabs type="border-card">
		  <el-tab-pane :label="tabOne">
		  	 <slot name="label1"></slot>
		  </el-tab-pane>
		  <el-tab-pane :label="tabTwo">
		  	<slot name="label2"></slot>
		  </el-tab-pane>
	</el-tabs>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['tabOne','tabTwo']
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../assets/style/variable.scss';
.el-tabs--border-card{
	border:none;
	box-shadow:none;
}
.el-tabs--border-card>.el-tabs__header{
	border-top:2px solid #dfdfdf;
	border-color:#dfdfdf;
	background:$Mcolor;
	color:#3b3b3b;
	border:1px solid #dfdfdf;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active:hover{
    color:$gcolor;
}
.el-tabs__item{
	height: 48px;
	line-height: 48px;
	font-size: 16px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
	color:$gcolor;
	border-top:2px solid $gcolor;
	position: relative;
	top:-1px;
	z-index: 10;
	height: 50px;
}
.el-tabs__nav-scroll,.el-tabs__nav-wrap{
	overflow: visible;
	height: 49px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item,.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
	color:#3b3b3b;
}

</style>