<template>
	<div class="noticeD">		
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>

		<el-row class="container ele-container">
			<p class="head">您的位置 : <router-link to="">阵地活动</router-link> > <span>康乐部阵地活动</span> > <span class="active">活动详情</span></p>
			<el-container>
				<el-main class="noticeMain">
					<h3>找短板、提升安全服务意识</h3>
					<p>康乐部从4月份开始就根据中心找短板要求，在全部门员工中广发宣传，专门召开部门全体员工“找问题、寻差距、求提升”的安全服务会议，要求并动员部门全体员工在实际开放工作中勇做有心人，努力改进和提高部门整体设备运行的安全服务意识。</p>
					<p>截止今日，部门收到多条员工各类合理化找短板建议，为部门提升安全服务意识和能力的提高起到了一定的推进作用，并在实际开放工作中有效地避免了两起安全事故的发生，如：欢乐秋千岗位工作人员，在该设备运转时，关注游客动态，发现一名游客（1米2以上）乘坐有瘫坐座位上脸色发紫、浑身发抖等异常情况，采取紧急制动程序，及时处理，避免了可能造成游客意外事故的发生。手摇船在5月21日上班过程中发现活动楼斜柱表面大片马赛克瓷砖有裂痕，时刻关注此现象，不久该处裂痕马赛克大片弓起，随时会发生裂痕弓起马赛克脱落，出现危险后，该岗位2名工作人员第一时间向部门反映，并得到及时处理，又避免了因瓷砖脱落掉下来伤及手摇船游玩的客人或路过的行人安全事故。</p>
					<p>针对这些积极参与部门找短板的有心员工，特别是对上述这两个岗位的有较大责任心员工，部门在第一时间，在部门员工群内进行宣传和表扬。同时我们也看到个别员工服务态度差，安全意识不够强的情况，部门恳请游客和中心员工时时关注我们平日在服务工作中不足，并予以指正，在G20峰会召开前期，作为窗口部门，要更加努力做好游客服务，努力提升部门整体的开放安全服务意识。</p>
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