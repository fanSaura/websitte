<template>
	<div class="myActivety">
		<mNav tabOne="兴趣活动" tabTwo="主题活动">
			<div slot="label1" class="pad20">
				<template>
				  <el-table
				    :data="tableData"
				    border
				    style="width: 100%" class="common-table">
				    <el-table-column
				      label="专业"
				      prop="major">
				    </el-table-column>
				    <el-table-column
				      label="班级信息"
				      width="240px">
				      <template slot-scope="scope">
							<p class="t-left">课次：{{scope.row.classInfo.times}}</p>
							<p class="t-left">学期：{{scope.row.classInfo.Semester}}</p>
							<p class="t-left">地点：{{scope.row.classInfo.place}}</p>
							<p class="t-left mt10"><el-button type="text" @click="handClick(scope.$index)">点击查看详情</el-button></p>
				      </template>
				    </el-table-column>
				    <el-table-column label="区域" prop="region">
				    </el-table-column>
				    <el-table-column label="上课时间">
				   		<template slot-scope="scope">
				   			<div v-if="scope.row.date.index=='1'">
				   				<p class="active">
				   					<el-button type="text" @click="$router.push({path:'/main/studentHome'})">查看课表</el-button>
				   					<i class="el-icon-date"></i>
				   				</p>
				   				<el-button type="danger" size='mini' @click="cancalAppoint">取消预约</el-button>
								
								<!-- 取消预约 -->
								<el-dialog
								  :visible.sync="dialogVisible" :modal=false
								  :before-close="close"
								  width="460px" class="common-dialog" top="200px">
								  <el-row class="msg">撤销后将自动放弃本名额，请输入手机号后四位进行撤销校验，谨慎处理</el-row>
								  <el-row class="tel-input" :gutter="20">
								  	 <el-col :span="3" :offset="3"><input v-model="input1" maxlength=1  ref="input1" class="input1 e1"/></el-col>
								  	 <el-col :span="3" :offset="1"><input v-model="input2" maxlength=1  ref="input2" class="input1 e2"/></el-col>
								  	 <el-col :span="3" :offset="1"><input v-model="input3" maxlength=1  ref="input3" class="input1 e3"/></el-col>
								  	 <el-col :span="3" :offset="1"><input v-model="input4" maxlength=1  ref="input4" class="input1 e4"/></el-col>

								  </el-row>
								  <el-row class="list-detail">
								  	<ul>
								  		<li class="title">少儿美术</li>
								  		<li>班级：A26-2</li>
								  		<li>预约号：1447785745</li>
								  	</ul>
								  </el-row>
								  <el-row slot="footer" class="dialog-footer" center>
								  	<el-col :offset="8" :span="8">
								  		<el-button type="danger" @click="confirmModal">确 定</el-button>
								  	</el-col>
								    
								  </el-row>
								</el-dialog>
								
								<!-- 取消预约成功 -->
								<el-dialog
								  :visible.sync="dialogVisible2"  :modal=false :before-close="close"
								  width="460px" class="common-dialog" top="200px" center>
								  	<el-row class="msg cent" >
									  	<i class="iconfont icon-chenggong"></i>
									    <p >取消预约成功！</p>
									</el-row>
								  <el-row slot="footer" class="dialog-footer" center>
									  	<el-col :offset="8" :span="8">
									  		<el-button type="danger" @click="dialogVisible2=false;maskShow=false">确 定</el-button>
									  	</el-col>
								  </el-row>
								</el-dialog>

								<!-- 预约失败 -->
								<el-dialog
								  :visible.sync="dialogVisible1" 
								  width="460px" class="common-dialog" top="200px" center>
								  <el-row class="msg cent" >
								  	<i class="iconfont icon-shibai"></i>
								    <p>预约失败，每人最多预约2门</p>
								 </el-row>
								  <el-row slot="footer" class="dialog-footer" center>
								  	<el-col :offset="8" :span="8">
								  		<el-button type="danger" @click="dialogVisible1=false">确 定</el-button>
								  	</el-col>
								    
								  </el-row>
								</el-dialog>
								
								

				   			</div>
				   			<div v-else>
				   				<div v-if="scope.row.date.index=='2'">
				   						<el-button type="danger" size='mini' @click="dialogVisible1=true">点击预约</el-button>
				   				</div>
								   <div v-if="scope.row.date.index=='0'">
									   	<el-button type="danger" size='mini' @click="$router.push({path:'/appoint'})">点击预约</el-button>
								   </div>
				   				<div v-else>
				   					{{scope.row.date.content}}
				   				</div>
				   				
				   			</div>
				   		</template>
				    </el-table-column>
				    <el-table-column label="报名">
				    	<template slot-scope="scope">
				    		<p class="active">{{scope.row.manage}}</p>
				    	</template>
				    </el-table-column>
				  </el-table>
				   
				</template>

			</div>
			<el-row slot="label2" class="item-content">
				主题活动
			</el-row>

		</mNav>
		<div class="mask" v-if="maskShow"></div>
	</div>
</template>
<script>
import mNav from '../../components/Nav-tab.vue'
	export default{
		data(){
			return {
				dialogVisible: false,
				input1:'',
				input2:'',
				input3:'',
				input4:'',
				maskShow:false,
				dialogVisible1:false,
				dialogVisible2:false,
				'tableData':[
					{
						major:'奥乐夫音乐班',
						classInfo:{
							times:'15',
							Semester:'春季2017-02-19开班 ',
							place:'音乐楼10室'
						},
						region:'活动中心',
						date:{
							index:'3',
							content:'周日 12:50-14:20'
						},
						manage:'活动管理'
					},
					{
						major:'儿童美术',
						classInfo:{
							times:'20',
							Semester:'秋季2017-10-30开班 ',
							place:'美术楼205室'
						},
						region:'活动中心',
						date:{
							index:'1',
							content:'周六 13:00-15:20'
						},
						manage:'活动管理'
					},
					{
						major:'篮球预习班',
						classInfo:{
							times:'35',
							Semester:'春季2017-04-09开班 ',
							place:'体育楼301室'
						},
						region:'活动中心',
						date:{
							index:'2',
							content:''
						},
						manage:'活动管理'
					},
					{
						major:'跆拳道',
						classInfo:{
							times:'20',
							Semester:'夏季2017-04-09开班 ',
							place:'体育楼501室'
						},
						region:'活动中心',
						date:{
							index:'0',
							content:'周日 12:50-14:20'
						},
						manage:'活动管理'
					},

				]
			}
		},
		components:{
			mNav
		},
		methods:{
			handClick(index){
					this.$router.push({path:'/classinfo',query:{route:index}})
			},
			confirmModal(){
				this.dialogVisible=false;
				this.dialogVisible2=true;
			},
			focusA(i){
				var _this=this;
				$('.e'+i).focus();
				$('.e'+i).keyup(function(){
				if(this.value.length==1){
					  i++
					if(i==5){	
						return;
					}	
					   _this.focusA(i);
			     	}
				})
									
			},
			close(done){
				
				done();
				this.maskShow=false
			},
			cancalAppoint(){
				this.dialogVisible=true;
				this.maskShow=true;
				console.log(323)
				setTimeout(()=>{
					this.focusA(1);	
				},0)
				
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../../assets/style/variable.scss';
.myActivety{
	.el-tabs--border-card>.el-tabs__content{
		padding:0;

	}
	.input1{
		height:50px;
		width:50px;
		text-align: center;
	}
	.common-table{
		.el-tabs--border-card>.el-tabs__content
		.active{
			.el-icon-date{
				font-size: 18px;
			}
		}
		.el-button--text{
			color:$gcolor;
		}
	}
}
	
</style>