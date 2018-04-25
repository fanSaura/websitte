<template>
	<div class="introMain">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">兴趣培训</router-link> > <span>项目介绍</span> > <span class="active">项目详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>早期教育英语唱游亲子项目简介</h3>
									
						<p><b>招生对象：</b>2—3岁的幼儿及家长。</p>
						<h4>一、培养理念和目标</h4>
						<p>“英语唱游”基于孩子身心发展特点，“亲子”在双语环境中开展互动游戏，充分激发孩子学习英语的兴趣并培养他们的中英文语言能力。</p>
						<p>1、通过形状、颜色、数字、水果、身体部位、家庭成员、动物等单词的学习，提高认知能力。</p>
						<p>2、通过音乐/歌曲教学法，主题/情境式教学法，让幼儿在愉悦的氛围中掌握英语发音。</p>
						<p>3、收获自信态度、与他人分享、关爱家人等能力。</p>
						<h4>二、培训方式、内容和时间</h4>
						<p>在双语环境中，融合英语、音乐、游戏等多种元素，通过集体参与以及单独游戏等方式，使孩子学习英语变得更为自然、有效。</p>
						<p>1、手指游戏：伴随英文儿歌或韵律的念诵，协调双手动作的变化。</p>
						<p>2、字母学习：通过尝试用身体姿势摆出字母造型、字母指认等途径，实现对26个英文字母的掌握。</p>
						<p>3、单词教学：结合生动的图片，以及多种游戏形式的开展，帮助孩子记忆单词。</p>
						<p>4、英语歌曲：选择适宜孩子的简单英语歌曲，在优美的旋律中培养良好的英语语感和正确的发音。</p>
						<p>5、英语律动舞蹈：伴随音乐，孩子与家长一起结合肢体动作，增进对单词的掌握，并建立起亲密的亲子关系。</p>
						<h4>三、联系方式：</h4>
						<p>　活动中心本部（昭庆寺里街22号）；杭州市青少年发展中心（钱江新城市民中心K楼）；城西分中心（天目山西路上和路口、毗邻余杭小白菜文化园）；城北分中心（拱宸桥西历史文化街区）：85821105 陈老师</p>
						<p style="text-align: center;">（上述四地同属杭州青少年活动中心，实行一体化管理，统一咨询电话：12355-8）</p>
					
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
  .introMain{
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