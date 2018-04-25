<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">中心新闻</router-link> > <span>对外交流</span> > <span class="active">交流详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>新疆来中心挂职干部一行参观发展中心</h3>
					<p>12月27日，新疆来中心挂职干部一行20人参观发展中心。</p>					
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