<template>
	<div class="activity">
	<m-tab tabOne="兴趣培训班" tabTwo="个体活动班">
		<div slot="label1">
			<div class="item-content">
				<el-row >已报活动列表（预约号若是“预约中”，请耐心等待摇号；若是“可缴费”请在过期日期前办理缴费手续，未摇中请继续选班报名.）</el-row>
			 	 <el-row class="chose">
			 	 	<el-col :span="3" class="label">报名状态：</el-col>
			 	 	<el-col :span="5">
			 	 		<template>
						  <el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
						</template>
			 	 	</el-col>
			 	 </el-row>
		 	</div> 
		 	 <template>
				  <el-table
				    :data="tableData"
				    border
				    style="width: 100%"  class="common-table">
				    <el-table-column
				      prop="state"
				      label="报名状态" width="135px">
				      <template slot-scope="scope">
				      	<p v-if="scope.row.state.index">
				      		<span>{{scope.row.state.detail}}</span>
				      	</p> 
				      	<p>{{scope.row.state.content}}</p>
				      </template>
				    </el-table-column>
				    <el-table-column ref="row" 
				      prop="appointNum"
				      label="预约号">
				    </el-table-column>
				    <el-table-column
				      prop="orderNum"
				      label="订单号">
				    </el-table-column>
				    <el-table-column
				      prop="date"
				      label="报名时间及过期时间" width="150px">
				       	<template slot-scope="scope">
				       		<p>{{scope.row.date}}</p>
				       		<p>{{scope.row.date1}}</p>
				       	</template>
				    </el-table-column>
				    <el-table-column
				      prop="classInfo"
				      label="班级信息" width='205px' >
				      	   <template slot-scope="scope">
				      	   	  <p class="t-left">{{scope.row.classInfo.name}}</p>
				      	   	  <p class="t-left">班级：{{scope.row.classInfo.num}}</p>
				      	   	  <p class="t-left">时间：{{scope.row.classInfo.date}}</p>
				      	   	  <p class="t-left">地点：{{scope.row.classInfo.place}}</p>
				      	   </template>
				    </el-table-column>
				    <el-table-column
				      prop="tuition"
				      label="学费">
				    </el-table-column>
				    <el-table-column
				      prop="tuition"
				      label="报名操作" width="100px">
				      <template slot-scope="scope">
				      	  <div v-if="scope.row.operation.state=='1'" class="active">
				      	  	<i class="iconfont icon-dayin"></i>
				      	  	<p>入学通知书</p> 
				      	  	<p class="mt10 active">{{scope.row.operation.opera}}</p>
				      	  </div>

				      	  <div class="active" v-else>

				      	   <p class="mt10"> <el-button type="text" class="active"  @click="getPay(scope.$index)">{{scope.row.operation.opera}}</el-button></p>
				      	  </div>
				      </template>
				    </el-table-column>
				  </el-table>
			</template>
		</div>
		<div slot="label2" class="item-content">
			个体活动班
		</div>
	</m-tab>
	</div>
</template>
<script>
import mTab from '../../components/Nav-tab.vue'
	export default{
		data(){
			return{
				 options: [],
			        value: '',
			        tableData:[]
			}
		},
		components:{
			mTab
		},
		created(){
				this.$http.get('static/data/applyActivity.json').then(res=>{
					  if(res.data.code==1){
								 this.options=res.data.msg.options;
								 this.tableData=res.data.msg.tableData;
						}
				})
		},
		mounted(){
			console.log(JSON.stringify(this.options))
	      /* var flag=($(document.body).height()<$(window).height());
	       $('.footer')[0].className='footer '+ (flag?'posi':'')*/
		},
		methods:{
			getPay(index){
				this.$store.commit('savePay',this.tableData[index]);
				console.log(this.$store.state.payContainer)
				this.$router.push({path:'/applyPay'})
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
	.activity{
		.el-tabs--border-card>.el-tabs__content{
			padding:0;
		}
		.item-content{
			padding-bottom:0;
		}
		.chose{
			margin:20px 0;
			.label{
				padding:8px 0;
			}
		}
		.active{
			.icon-dayin{
				font-size: 24px;
			}
		}
		.el-button--text:focus, .el-button--text:hover{
			color:#cf261f;
		}
	}
</style>