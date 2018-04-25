<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">中心介绍</router-link> > <span>中心荣誉</span> > <span class="active">荣誉详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>中心被评为2014年杭州市中小学生“暑假快乐总动员”活动先进单位</h3>					
					<p>接杭校外〔2014〕9号《关于表彰2014年杭州市中小学生“暑假快乐总动员”活动先进单位和先进个人的通报》，中心被评为“暑假快乐总动员”活动先进单位。详见附件。</p>					
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