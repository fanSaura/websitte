<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">中心新闻</router-link> > <span>中心报道</span> > <span class="active">报道详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3></h3>
					<div style="text-align: center;">
						<p>1、浙江少儿频道</p>
						<img src="../../../static/images/report1.png" width="800">
					</div>
					<div style="text-align: center;">
						<p>2、杭州少儿频道</p>
						<img src="../../../static/images/report2.png" width="800">
					</div>
					<div style="text-align: center;">
						<p>3、杭州一套（综合频道）</p>
						<img src="../../../static/images/report3.png" width="800">
					</div>
					<div style="text-align: center;">
						<p>4、杭州二套（西湖明珠频道）</p>
						<img src="../../../static/images/report4.png" width="800">
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
		p{
			font-size: 14px;
			line-height: 30px;
    		text-indent: 2em;
		}
		span{
			font-size: 14px;
			line-height: 30px;
		}
	}
  }
	

</style>