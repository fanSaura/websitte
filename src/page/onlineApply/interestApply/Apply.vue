<template>
	<div class="apply">
		<mNav tabOne="兴趣培训报名" tabTwo='个体活动报名'>
			<div slot="label1">
				 <el-row>
			  	 	 <el-col :span="8" :offset="8">{{title}}</el-col>
			  	 </el-row>
			  	 <el-row class="content-main" >
				    <p v-html="content"></p>
			  	 </el-row>
			  	 <el-row>
			  	 	<el-col :offset="10">
			  	 		<el-button @click="$router.push({path:'/funApply'})" type="danger">立即报名</el-button>
			  	 	</el-col>
		  	 </el-row>
			</div>
			<div slot="label2">
				个体活动报名
			</div>
		</mNav>
	</div>
</template>
<script>
import mNav from '../../../components/Nav-tab.vue'
	export default{
		data(){
			return {
				title:'',
				content:''
			}
		},
		components:{
			mNav
		},
		created(){
			
			this.$http.get('static/data/apply.json').then(res=>{
				if(res.data.code=="1"){
					
					this.title=res.data.msg.title;
					this.content=res.data.msg.content;
				}
			})
		}
		
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../../../assets/style/variable.scss';
	.apply{
		.content-main{
			padding: 20px;
			padding-bottom:0;
			p{
				margin-bottom: 20px;
				line-height: 24px;
				&.indent{
					text-indent: 30px;
				}
			}
		}
		
	}

</style>