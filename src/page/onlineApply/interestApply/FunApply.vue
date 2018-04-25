<template>
	<div class="funApply">
		<m-header :headShow='headShow'>
			<img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<div class="ele-container container">
			<el-row class="side-tit">
				<span class="name">兴趣培训报名</span>
				<el-button type="text" @click.native="$router.go(-1)" class="fr"> 返回<i class="el-icon-arrow-right"></i></el-button>
			</el-row>
			<div class="fun-main item-content">
				<el-form ref="form" :model="form" label-width="100px" class='demo-input-suffix search-form'>
					 <el-form-item label="课程搜索：">
					 	<el-col :span='6'>
					    	 <el-input placeholder="请输入内容" v-model="form.search" suffix-icon="el-icon-search">
							    <el-button slot="append" type="danger">搜索</el-button>
							 </el-input>
					    </el-col>
					  </el-form-item>
				
					 <el-form-item label-width='  '>
					 	<el-col  class="t-right">专业类：</el-col>
					    <el-col :span="5">
					        <el-select v-model="form.region1" placeholder="请选择专业">
						      <el-option :label="item" v-for="(item,index) in region11" value="index"></el-option>
						    </el-select>
					    </el-col>
					    <el-col :span="1" :offset="1">区域：</el-col>
					    <el-col :span="5" >
					        <el-select v-model="form.region2" placeholder="请选择活动区域">
						      <el-option :label="item" value="index" v-for="(item,index) in region22"></el-option>
						    </el-select>
					    </el-col>
					    <el-col :span="1" :offset="1">学期：</el-col>
					    <el-col :span="5">
					        <el-select v-model="form.region3" placeholder="请选择学期">
						      <el-option :label="item" value="index" v-for="(item,index) in region33"></el-option>
						    </el-select>
					    </el-col>
					  </el-form-item>

					   <el-form-item label="上课时间：">
					 	 <el-radio-group v-model="form.radio" size="medium">
					       <el-radio-button label="全部" ></el-radio-button>
					       <el-radio-button label="周一"></el-radio-button>
					       <el-radio-button label="周二"></el-radio-button>
					       <el-radio-button label="周三"></el-radio-button>
					       <el-radio-button label="周四"></el-radio-button>
					       <el-radio-button label="周五"></el-radio-button>
					       <el-radio-button label="周六"></el-radio-button>
					       <el-radio-button label="周日"></el-radio-button>
					    </el-radio-group>
					  </el-form-item>
					  <el-form-item label="班级状态：">
					 	 <el-radio-group v-model="form.radio1" size="medium">
					       <el-radio-button label="全部" ></el-radio-button>
					       <el-radio-button label='预约报名中'></el-radio-button>
					       <el-radio-button label="报名进行中"></el-radio-button>
							<el-radio-button label="余额已满"></el-radio-button>
					    </el-radio-group>
					  </el-form-item>
				 </el-form> 
			</div>
			<div class="fun-main1 item-content">
				<el-row class='title'>相关课程14个</el-row>
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
				      label="专业"
				      prop="classname">
				    </el-table-column>
				    <el-table-column
				      label="班级信息"
				      width="240px">
				      <template slot-scope="scope">
							<p class="t-left">年纪或年龄要求</p>
							<p class="t-left">{{scope.row.classInfo.require}} </p>
							<p class="t-left">性别要求：{{scope.row.classInfo.sex}}</p>
							<p class="t-left">程度：{{scope.row.classInfo.degree}}</p>
							<p class="t-left">学期：{{scope.row.classInfo.semester}}</p>
							<p class="t-left">上课时间：{{scope.row.classInfo.datetime}}</p>
							<p class="t-left">地点：{{scope.row.classInfo.classDetail.place}}</p>
							<p class="t-left">班级类型：{{scope.row.classInfo.classType}}</p>
							<p class="t-left">招生性质：{{scope.row.classInfo.classNature}}</p>
							<p class="t-left "><el-button type="text" @click="handClick(scope.$index)" >点击查看详情</el-button></p>
				      </template>
				    </el-table-column>
				    <el-table-column label="总费用" prop="totalCost">
				    </el-table-column>
				    <el-table-column label="区域" prop="region">
				    </el-table-column>
				     <el-table-column label="班级状态" prop='classState'>
				    </el-table-column>
				    <el-table-column label="报名">
				    	<template slot-scope="scope">
				    		<p class="active"> <el-button type="text" @click="handClick1(scope.$index)" :disabled="!scope.row.manage.state">{{scope.row.manage.text}}</el-button></p>
				    	</template>
				    </el-table-column>
				  </el-table>
				   
				</template>

				<el-row class="common-page">
					<el-col :offset="7" :span="10">
						<el-pagination
						  background
						  layout="prev, pager, next,slot"
						   :page-size="1" prev-text="上一页" next-text="下一页" :total="10">
						   <span class="text-weak">
						   	共10门课程
						   </span>
						</el-pagination>
				    </el-col>
				</el-row>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>
<script>
import mHeader from '../../../components/Header.vue'
import mFooter from '../../../components/Footer.vue'
	export default{
		data(){
			return{
				region11:'',
				region22:'',
				region33:'',
				'headShow':true,
				form:{
					search:'',
					region1:'',
					region2:'',
					region3:'',
					radio:'全部',
					radio1:'全部'
				},
				tableData:[]
				
			}
		},
		mounted(){
			this.$http.get('static/data/funApply.json').then(res=>{
				if(res.data.code==1){
					
					this.region11=res.data.msg.major;
				    this.region22=res.data.msg.region;
					this.region33=res.data.msg.semester;
					this.tableData=res.data.msg.tableData;
					console.log(this.res.data.msg)
				}
				console.log(this.res.data)

			}).catch(err=>{
				console.log(err)
			})
		},
		methods:{
			handClick(index){	
					this.$router.push({path:'/classinfo',query:{route:index}})
			},
			handClick1(index){
				this.$router.push({path:'/classinfo',query:{route:index,apply:true}})
			}
		},
		components:{
			mHeader,
			mFooter
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../../../assets/style/variable.scss';
	.funApply{
		.fun-main{
			padding:30px 0 0;
			border-bottom:$border;
			.search-form{
				.el-input-group__append{
					border-color:$gcolor;
				}
				.el-input-group__append button{
					background: $gcolor;
					border:$border;
					border-color:$gcolor;
					border-radius:0;
					color:#fff;
					position: relative;
					}
				.t-right{
					width:100px;
					padding-right:12px;
				}
				.el-radio-button{
					margin-right: 10px;
					&.el-radio-button--medium .el-radio-button__inner{
						border:none;	
						text-align: center;
					}
					.el-radio-button__orig-radio:checked+.el-radio-button__inner{
						background:$gcolor;
						color:#fff;
						border-radius:0;
					}
				}
				.el-radio-button__inner:hover{
					color:$gcolor;
				}

			}
		}
		.fun-main1{
			margin-bottom: 20px;
			.title{
				line-height: 32px;
			}
			.el-button--text{
				color:$gcolor;
			}
			.common-page{
				.text-weak{
	    				line-height: 32px;
	    				font-weight: 500;
				}
			}
			.el-button--text.is-disabled{
				opacity: 0.6;
			}
		}
		
		
	}
</style>