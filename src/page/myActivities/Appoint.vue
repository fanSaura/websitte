<template>
	<div class="appoint">
		<m-header :headShow="headShow">
			<img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<div class="ele-container container">
			<el-row class="side-tit">
				<span>预约活动</span>
				<el-button type="text" class="fr" @click="$router.go(-1)">返回<i class="el-icon-arrow-right"></i></el-button>
			</el-row>

			<div class="main-content">
				<el-row>
					<el-col :span="5">当前预约活动：<span>奥尔夫音乐 </span></el-col>
					<el-col :span="4"> 课次：16次</el-col>
					<el-col :span="4">  已培训：6次  </el-col>
					<el-col :span="4"> 剩余：<span class="active">10</span>次</el-col>
				</el-row>
				<el-row>
					<el-col :span="2">
						<el-button type="danger mt10" class="block" size="small">前一周</el-button>
					</el-col>
				</el-row>
				<div class="calendar">
					<el-row>
						<template>
						  <el-table
						    :data="tableData"
						    border
						    style="width: 100%">
						    <el-table-column
						      prop="date"
						      label="日期"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="name1"
						      label="周一"
						      width="">
									 <template slot-scope="scope">
						      		<div v-if="scope.row.name1=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name1">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name1}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						    <el-table-column
						      prop="name2"
						      label="周二" >
						      	<template slot-scope="scope">
						      		<div v-if="scope.row.name2=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name2">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name2}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						     <el-table-column
						      prop="name3"
						      label="周三">
								  	<template slot-scope="scope">
						      		<div v-if="scope.row.name3=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name3">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name3}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						     <el-table-column
						      prop="name4"
						      label="周四">
									  <template slot-scope="scope">
						      		<div v-if="scope.row.name4=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name4">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name4}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						     <el-table-column
						      prop="name5"
						      label="周五">
									  <template slot-scope="scope">
						      		<div v-if="scope.row.name5=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name5">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name5}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						     <el-table-column
						      prop="name6"
						      label="周六">
									  <template slot-scope="scope">
						      		<div v-if="scope.row.name6=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name6">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name6}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						     <el-table-column
						      prop="name7"
						      label="周日">
								  	<template slot-scope="scope">
						      		<div v-if="scope.row.name7=='已预约'" class="active">
						      				已预约
						      		</div>
											<div v-else-if="scope.row.name7">
												  <el-button type="text" @click="$router.push({path:'/main/MyActivity'})">{{scope.row.name7}}</el-button>
											</div>
											<div v-else class="empty"></div>
						      	</template>
						    </el-table-column>
						  </el-table>
						</template>
					</el-row>
		        </div>
			</div>
	    </div>		
		<m-footer></m-footer>
	</div>
</template>
<script>
	import mHeader from '../../components/Header.vue'
	import mFooter from '../../components/Footer.vue'
	export default{
		data(){
			return{
				'headShow':true,
				tableData: [{
			          date: '8:00~10:00',
			          name1: '已预约',
			          name2: '',
			          name3: '可预约',
			          name4: '可预约',
			          name5: '可预约',
			          name6: '可预约',
			          name7: '可预约',
			        }, {
			          date: '10:00~12:00',
			          name1: '可预约',
			          name2: '已预约',
			          name3: '可预约',
			          name4: '可预约',
			          name5: '已预约',
			          name6: '可预约',
			          name7: '可预约',
			        }, {
			          date: '13:00~15:00',
			          name1: '可预约',
			          name2: '可预约',
			          name3: '可预约',
			          name4: '可预约',
			          name5: '可预约',
			          name6: '可预约',
			          name7: '可预约',
			        }, {
			          date: '15:00~17:00',
			          name1: '可预约',
			          name2: '',
			          name3: '可预约',
			          name4: '可预约',
			          name5: '可预约',
			          name6: '可预约',
			          name7: '可预约',
			        },
			        {
			          date: '15:00~17:00',
			          name1: '可预约',
			          name2: '可预约',
			          name3: '已预约',
			          name4: '可预约',
			          name5: '可预约',
			          name6: '可预约',
			          name7: '已预约',
			        },
			        {
			          date: '15:00~17:00',
			          name1: '已预约',
			          name2: '可预约',
			          name3: '可预约',
			          name4: '已预约',
			          name5: '可预约',
			          name6: '已预约',
			          name7: '可预约',
			        }
		        ]
			}
		},
		components:{
			mHeader,
			mFooter
		}
	}
</script>
<style lang='scss' rel="stylesheet/scss">
	@import '../../assets/style/variable.scss';
	.appoint{
		.calendar{
			.el-table{
				.cell{
					padding:0;
				}
				.el-button--text{
							color:#333;
						}
				td,th{
					text-align: center;
					padding:0;
					height:70px;
					.active{
						height:70px;
						line-height:70px;
						background: #78a742;
						color:#fff;
						
					}
					.empty{
						 height:70px;
					   line-height:70px;
						 background:#fff;
					}
				}
				.el-table--enable-row-hover .el-table__body tr:hover>td:not(:first-child){
					background: #fff;
				}
			}
		}
	}
</style>