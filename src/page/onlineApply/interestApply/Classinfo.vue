<template>
	<div class="classInfo">
		<m-header :headShow="headShow">
			<img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<div class="ele-container container" >
			<el-row class="side-tit">
				<span class="name">班级信息</span>
				<el-button type="text" @click="$router.go(-1)" class="fr"> 返回<i class="el-icon-arrow-right"></i></el-button>
			</el-row>
			<div >
				<el-row class="item-content">
					<h5 class="main-title">班级信息</h5>
					<table class="private-table" cellspacing="0">
						<tr>
							<td width="100px">班级:</td>
							<td>{{classDetail.className}}</td>
							<td>所属区域：</td>
							<td colspan="6">
								<span class="active">{{classDetail.region}}</span>
								<span>，请核实清楚后再进行报名</span>
							</td>
						</tr>
						<tr>
							<td>学年：</td>
							<td>{{classDetail.schoolYear}}</td>
							<td>学期：</td>
							<td>{{classDetail.semester}}</td>
							<td>专业：</td>
							<td>{{classDetail.major}}</td>
							<td>专业程度：</td>
							<td>{{classDetail.majorDegree}}</td>
						</tr>
						<tr>
							<td>班级状态：</td>
							<td>{{classDetail.classInfo}}</td>
							<td>开课时间：</td>
							<td>{{classDetail.classStart}}</td>
							<td>结课时间：</td>
							<td>{{classDetail.classEnd}}</td>
							<td>课次：</td>
							<td>{{classDetail.classTimes}}</td>
						</tr>
						<tr>
							<td>班级类型：</td>
							<td>{{classDetail.classType}}</td>
							<td>招生性质：</td>
							<td>{{classDetail.studengNatrue}}</td>
							<td>咨询电话：</td>
							<td colspan="3">{{classDetail.iphone}}</td>
						</tr>
						<tr>
							<td>总费用：</td>
							<td>{{classDetail.costToast}}元</td>
							<td>费用明细：</td>
							<td colspan="5" v-if="classDetail.costDetail">学费：{{classDetail.costDetail.tuition}}元  代管费：{{classDetail.costDetail.escrow}}元</td>
						</tr>
						<tr>
							<td>班级描述：</td>
							<td colspan="7">{{classDetail.classDeatail}}</td>
						</tr>
						<tr>
							<td>图片及视频：</td>
							<td colspan="7">
								<div class="img-contain">
									<img :src="img" alt="" v-for="img in classDetail.image">
								</div>
							</td>
						</tr>
					</table>
				</el-row>
				 <el-row class="item-content">
				 	<h5 class="main-title">课表信息</h5>
				 	<table class="private-table" cellspacing="0">
				 		<tr>
				 			<td>{{classDetail.Timetable}}</td>
				 		</tr>
				 	</table>
				 </el-row>   
				 <el-row class="item-content">
				 	<h5 class="main-title">年级或年龄、性别要求</h5>
				 	<table class="private-table" cellspacing="0">
				 		<tr>
				 			<td width="120px">学员年级范围：</td>
				 			<td v-if="classDetail.gradeRange">{{classDetail.gradeRange.min}} <span> ～</span> {{classDetail.gradeRange.max}}</td>
				 			<td width="100px">性别要求：</td>
				 			<td>{{classDetail.sexRequire}}</td>
				 		</tr>
				 	</table>
				 </el-row> 
				 <el-row class="item-content">
				 	<h5 class="main-title">班级特征</h5>
				 	<table class="private-table" cellspacing="0">
				 		<tr>
				 			<td width="120px">能力特征：</td>
				 			<td>{{classDetail.capabilityCharact}}</td>
				 			<td width="100px">态度特征：</td>
				 			<td>{{classDetail.attitudeCharact}}</td>
				 		</tr>
				 	</table>
				 </el-row>	
				<el-row class="item-content">
					<el-col :span="2" :offset="10">
						<el-button type="danger"  size="small" @click="getPath()">确定</el-button>
					</el-col>
				</el-row>

				 <!-- 弹出框 -->
			    <el-dialog :visible.sync="dialogVisible" width="460px" class="common-dialog" top="20%">
				 <el-row class="msg cent" >
				  	<i class="iconfont icon-chenggong"></i>
				    <p class="mt10">报名成功！</p>
				    <p class="mt10">可进入"<span class="active">{{classDetail.region}}</span>" 查看当前预约状态</p>
				 </el-row>
				  <el-row class="list-detail">
				  	<ul>
				  		<li class="title">{{classDetail.major}}</li>
				  		<li>班级：{{classDetail.className}}</li>
				  		<li>预约号：{{144+parseInt(Math.random()*1000)}}</li>
				  	</ul>
				  </el-row>
				  <el-row slot="footer" class="dialog-footer" center>
				  	<el-col :offset="8" :span="8">
				  		<el-button type="danger" @click="getApply()">确 定</el-button>
				  	</el-col>
				    
				  </el-row>
			  </el-dialog>


			</div>
		</div>	
		<m-footer></m-footer>
	</div>
</template>
<script>
import mHeader from '../../../components/Header.vue'
import mFooter from  '../../../components/Footer.vue'
	export default{
		data(){
			return {
				'headShow':true,
				 'dialogVisible':false,
				 classDetail:{},
				 num:1
			}
		},
		components:{
			mHeader,
			mFooter
		},
		created(){
			this.$http.get('static/data/funApply.json').then(res=>{
				this.classDetail=res.data.msg.tableData[this.$route.query.route].classInfo.classDetail;
			})
		},
		methods:{
			getPath(){
				if(this.$route.query.apply){
					this.dialogVisible=true;
					
				}else{
					this.$router.go(-1)
				}
			},
			getApply(){
				this.dialogVisible=false;
				this.$router.push({path:'/main/ApplyActivity'})
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	@import '../../../assets/style/variable.scss';
	.classInfo{
		.item-content{
			padding-bottom:20px;
			.el-button--danger{
				width: 100%;
			}
		}
		.private-table{
			width:100%;
			border-left:$border;
			border-top:$border;
			td{
				border-right:$border;
				border-bottom:$border;
				border-color:#dfdfdf;
				padding:5px 10px;
				line-height: 30px;
			}
			tr td:nth-child(odd){
				background: $Mcolor;
			}
			tr td:nth-child(even){
				color:#3b3b3b;
			}
			td{
				.img-contain{
					padding:20px;
					img{
						margin-right: 15px;
					}
				}
			}
		}
	}
</style>