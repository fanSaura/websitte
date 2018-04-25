<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">中心新闻</router-link> > <span>中心通知</span> > <span class="active">通知详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>杭州青少年活动中心富士DX100干式照片冲印机采购项目中标公告</h3>
					<p>杭州青少年活动中心对杭州青少年活动中心富士DX100干式照片冲印机采购项目采用询价采购方式进行采购。经各投标单位报价、中心采购小组成员现场开标，最终确定杭州新远方信息产业发展有限公司中标，中标价30888.00元。</p>
					<p>请中标单位在规定的时间内签订采购合同。</p>			
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
		mounted(){
			$('.footer').removeClass('posi');
			       var flag=($(document.body).height()<$(window).height());
			       $('.footer')[0].className='footer '+ (flag?'posi':'')
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
	}
  }
	

</style>