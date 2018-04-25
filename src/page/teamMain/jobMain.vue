<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">中心团队</router-link> > <span>人才招聘</span> > <span class="active">招聘详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>关于杭州（国际）青少年洞桥营地招聘管理人员的公告</h3>
					<p> 杭州（国际）青少年洞桥营地是杭州青少年活动中心所属经费自筹的事业单位。营地通过组织青少年开展“五自”（自学、自理、自护、自强、自律）的实践体验活动，培养青少年生活自理、生存自护、军事体验等方面的实践能力，提升青少年的核心素养。现因业务发展需要，招聘1名管理人员。有关事项公告如下：</p>
					<p><b> 一、岗位名称：</b>营地副主任</p>
					<p><b>二、岗位主要职责：</b></p>
					<p>负责分管营地教育教学活动业务，做好营地教育活动人才队伍建设、教育教学和活动组织管理、社团建设、项目研发与运营等，完成教育活动的责任制要求。</p>
					<p><b>三、岗位基本条件：</b></p>
					<p>1、坚持四项基本原则，具有履行职责所需的中国特色社会主义理论水平，严格遵守党纪国法和各项规章制度。 
					<p>2、有胜任岗位所必须的组织管理能力、文化专业水平、管理知识和管理工作经验。</p><p>3、热爱校外教育事业，有强烈的事业心和责任感，有较强的创新意识和开拓进取精神，工作有实绩。</p>
					<p>4、坚持全心全意为人民服务的宗旨，清正廉洁、以身作则、艰苦朴素，不滥用职权、不谋求私利。</p>
					<p> 5、有适应岗位要求的身体条件。</p>
					<p><b> 四、岗位资格条件：</b></p>
					<p>  1、具有本科及以上学历。</p>
					<p> 2、在教育、文化、体育等企事业单位中现任中层干部（或受聘中级专业技术）及以上职务。</p>
					<p>3、年龄在45周岁以下（1973年1月1日以后出生）,条件特别优秀者可适当放宽。</p> 
					<p>4、具有教育教学研究指导或青少年活动策划、组织、实施的工作经历。</p>
					<p>5、有岗位或专业任职业绩。</p>
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