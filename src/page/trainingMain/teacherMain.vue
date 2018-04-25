<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">兴趣培训</router-link> > <span>教师风采</span> > <span class="active">教师详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>文学部 董霞</h3>
					<p class="title-item">
						<span>作者：</span>
						<span>发布时间：2012-10-21</span>
						<span>来源：</span>
						<span>点击数：2829</span>
					</p>
					<p>董霞 1996年毕业于杭州师范大学中文系，本科学历，中学高级教师。曾被评为杭州市教坛新秀、杭州市优秀班主任、杭州市学科带头人、华东地区校外教育中青年骨干教师。获杭州市首届阅读教学观摩活动一等奖。所撰写的论文具有一定的前瞻性和实践性，近20篇论文在全国、省市区各级获奖或者发表。出版《小学生成语故事》，曾任《母婴杂志》绘本馆特邀撰稿人。2008年开设童话阅读与表达项目，受到孩子们的喜爱，家长的欢迎。</p>
					<h4>文学部简介：</h4>
					<p>文学部是杭州青少年活动中心培训业务部门之一。文学写作、创意思维、珠心算、童话阅读与表达、学前综合训练、创意阅读、游学泡泡营等专业是传统优势培训项目。目前有近10个专业培训项目，全年近3.9万余名学员参加课外培训和活动。</p>
					<p>高质量教学水平、高效的教学管理机制是文学部得以保持培训量持续增长势头的前提。我们以“赋予学生一种美好的情感，一份诗意的气质和一份创新的能力”为部门教育培养目标；以“内涵深，童趣足，参与性强”为未成年人教育活动策划组织原则，以“高质量的培训课程，认真仔细的工作作风，耐心周到的服务态度”为服务标准。部门全体教职工积极努力地开展工作，在社会上赢得良好的口碑。</p>
					<p>杭州少年文学院、杭州市“1+1”少年数学爱好者俱乐部是我部门的青少年社团组织。精彩的活动吸引着孩子们前来积极参与，激发了孩子们的创造力和创新精神。孩子们在活动中体验，在体验中收获，在收获中得到锻炼。</p>
					<p>部门现有教职工30人，教师全部本科以上学历，爱岗敬业，有强烈的事业心和创新的工作作风。多位教师获得杭州市优秀教师及市、区级教坛新秀称号。2006年文学部被杭州市级机关评为巾帼文明示范岗。</p>
					
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
  .title-item{
		text-align: center;
		border-bottom: 1px solid #9f9f9f;
		margin-bottom: 20px;
		span{
			padding-right: 20px;
			color: #9f9f9f;
		}
	}
	

</style>