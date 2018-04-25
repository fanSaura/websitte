<template>
	<div>
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>	
		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">兴趣培训</router-link> > <router-link to="/training/onlineExhibition">网上展厅</router-link> > <router-link to="/training/onlineExhibition/exhibitionMain">美术馆</router-link> > <span class="active">杭州青少年活动中心美术部专职教师2017优秀作品展</span></p>
			
			<el-container>
				<el-main class="exhibitionMain">
					<h3>杭州青少年活动中心美术部专职教师2017优秀作品展</h3>
					<p class="title-item">
						<span>作者：周洁</span>
						<span>发布时间：2017-12-14</span>
						<span>来源：美术部</span>
						<span>点击数：191</span>
					</p>
					<p>近日，杭州青少年活动中心美术部专职教师2017年的优秀作品正在美术楼（西湖边少年宫）一楼大厅展出，展览时间为期两周，12月21日前，欢迎美术爱好者前往观赏。</p>
					<p>美术部每年举办教师作品展，已连续八届。在2017这一年里，美术部的教师们始终保持对美术的创作热情，利用自己的课余时间进行创作，把对生活的感悟寄情于一幅幅作品之中。此次画展，共展出美术部二十几位专职教师今年创作的40余件作品，他们用艺术诠释，用画笔捕捉的美好。</p>
					<div class="imgMain">
						<img src="../../../static/images/eImg1.jpg">
						<img src="../../../static/images/eImg2.jpg">
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
			return{
				"headShow":true,
				itemArr:[]
			}
		},
		components:{
			mHeader,
			mFooter
		},
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../../assets/style/variable.scss';
  
.exhibitionMain{
	h3{
		text-align: center;
		margin-bottom: 10px;
	}
	p{
		font-size: 14px;
			line-height: 30px;
    		text-indent: 2em;
	}
	.imgMain{
		text-align: center;
	}
	.title-item{
		text-align: center;
		border-bottom: 1px solid #9f9f9f;
		margin-bottom: 20px;
		span{
			padding-right: 20px;
			color: #9f9f9f;
		}
	}
} 


</style>