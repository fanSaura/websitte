<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">中心介绍</router-link> > <span>中心设施</span> > <span class="active">设施详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>美劳教学设备设施</h3>
					<div class="content">
						<img src="../../../static/images/taoyi.jpg">
						<p>陶艺活动室</p>
					</div>
				</el-main>
		    </el-container>
		</el-row>
			
		<m-Footer></m-Footer>
	</div>
</template>
<script>
import mHeader from '../../components/Header.vue'
import mFooter from '../../components/Footer.vue'
export default{
		data(){
			return {
				"headShow":true	
			}
		},
		components:{
			mHeader,
			mFooter
		},
		
		methods:{
			handleSelect(key,path){

			}
			
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../../assets/style/variable.scss';
  .noticeD{
  	.noticeMain{
		padding:20px 100px;
		h3{
			text-align: center;
			margin-bottom: 10px;
		}
		.content{
			text-align: center;
			p{
			font-size: 14px;
			line-height: 30px;
    		text-indent: 2em;
		}
		}
		
	}
  }
	

</style>