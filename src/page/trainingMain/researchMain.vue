<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">兴趣培训</router-link> > <span>科研教学</span> > <span class="active">教学详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>外语部《中小学茶道课程开发与实施初级班》圆满结束</h3>
					<p>在过去的一周中，来自全国各地的60余位老师相聚在美丽的西子湖畔，相聚在杭州青少年活动中心外语部，共同参与了浙江省义务教育阶段拓展性课程专项培训项目《中小学茶道课程开发与实施初级班》的学习。外语部课程组的老师们为大家精心安排了培训内容：既有系统的理论学习，又有生动的实践体验；既能够聆听业界专家的精彩授课，又可以实地考察茶道社团的建设。专业科学、生动细致的课程安排让老师们收获满满：大家不仅了解了中小学茶道课程开发和实施的相关内容，积极尝试了茶道相关课程纲要和教学设计的撰写和交流，也初步掌握了绿茶、红茶和乌龙茶冲泡的基本技能。看，老师们备具、温杯、置茶……一系列优美的冲泡动作，是不是可以和专业的茶艺师媲美了呢？最后的结业仪式安排在雅致的琴茶馆，大家一边品茶抚琴，一边交流培训心得。六天的学习短暂而美好，老师们意犹未尽，纷纷表示期待下一次的报班学习。</p>
					<p>茶道中的精神内涵与现代中小学素养培育结合，有助于开拓课程素材，是有效进行德育、美育、学习传统文化与艺术技能学习的综合载体。期待通过此次的学习培训，老师们能够以茶道为载体，引导学生更加热爱生活，热爱我们的传统文化。</p>
					<p style="text-align: center;"><img src="../../../static/images/research.jpg"></p>
					

					
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