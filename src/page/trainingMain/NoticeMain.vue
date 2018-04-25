<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">兴趣培训</router-link> > <span>培训通知</span> > <span class="active">通知详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>收费窗口1月15日至2月11日开放时间变动</h3>
					<p>2017年秋季培训班已基本结束，从2018年1月15日——2月11日，四地收费室晚上暂停开放，四地开放时间:</p>
					<span>*活动中心：9:00¬——17:00（每天）</span></br>
					<span>*发展中心：9:00¬——17:00（每天，其中1月15日、16日休息）</span></br>
					<span>*城西分中心：9:00——17:00  (周一周二休息)</span></br>
					<span>*城北分中心：1月15日—1月23日  9：00——17：00（周一周二休息）</br>1月24日—2月11日   9：00——17：00（周六周日休息）</span></br>
					<span><b>注：</b>城西、城北分中心中午午休时间为12:00--13:30</span>
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
		span{
			font-size: 14px;
			line-height: 30px;
		}
	}
  }
	

</style>