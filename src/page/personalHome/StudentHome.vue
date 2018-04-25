<template>
	<div class="stu-center">
		<el-row class="center-title">
			<el-col :span="4">
				<img :src="userInfo.img" class="avatar" alt="">
				<span class="name">{{userInfo.name}}</span>
			</el-col>
			<el-col :span="3">
				<span>账号：</span>
				<span>{{userInfo.account}}</span>
			</el-col>
			<el-col :span="5" :offset="4">
				<span class="balance">余额：</span>
				<span class="money">￥</span>
				<span class="b">{{userInfo.balance}}</span>
			</el-col>
			<el-col :span="2" :offset="1" class="recharge">
				充值>
			</el-col>
		</el-row>
		<div class="calendar">
			<el-row>
				<template>
				  <el-table
				    :data="tableData"
				    border
						highlight-current-row
						empty-text="kong"
						@cell-mouse-enter="hoverFun"
						@cell-mouse-leave="hoverLeave"
						
						:cell-class-name="func"
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
				      	<div v-if="scope.row.name1">
				      		<span>{{scope.row.name1.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name1"> 
										<ul>
											<li>
												<b>{{scope.row.name1.name}}</b>
												<span>{{scope.row.name1.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name1.place}}	
											</li>
											<li>
												时间：{{scope.row.name1.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				    <el-table-column
				      prop="name2"
				      label="周二">
							<template slot-scope="scope">
				      	<div v-if="scope.row.name2">
				      		<span>{{scope.row.name2.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name2"> 
										<ul>
											<li>
												<b>{{scope.row.name2.name}}</b>
												<span>{{scope.row.name2.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name2.place}}	
											</li>
											<li>
												时间：{{scope.row.name2.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				     <el-table-column
				      prop="name3"
				      label="周三">
							<template slot-scope="scope">
				      	<div v-if="scope.row.name3">
				      		<span>{{scope.row.name3.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name3"> 
										<ul>
											<li>
												<b>{{scope.row.name3.name}}</b>
												<span>{{scope.row.name3.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name3.place}}	
											</li>
											<li>
												时间：{{scope.row.name3.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				     <el-table-column
				      prop="name4"
				      label="周四">
							<template slot-scope="scope">
				      	<div v-if="scope.row.name4">
				      		<span>{{scope.row.name4.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name4"> 
										<ul>
											<li>
												<b>{{scope.row.name4.name}}</b>
												<span>{{scope.row.name4.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name4.place}}	
											</li>
											<li>
												时间：{{scope.row.name4.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				     <el-table-column
				      prop="name5"
				      label="周五">
							<template slot-scope="scope">
				      	<div v-if="scope.row.name5">
				      		<span>{{scope.row.name5.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name5"> 
										<ul>
											<li>
												<b>{{scope.row.name5.name}}</b>
												<span>{{scope.row.name5.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name5.place}}	
											</li>
											<li>
												时间：{{scope.row.name5.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				     <el-table-column
				      prop="name6"
				      label="周六">
							<template slot-scope="scope">
				      	<div v-if="scope.row.name6">
				      		<span>{{scope.row.name6.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name6"> 
										<ul>
											<li>
												<b>{{scope.row.name6.name}}</b>
												<span>{{scope.row.name6.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name6.place}}	
											</li>
											<li>
												时间：{{scope.row.name6.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				     <el-table-column
				      prop="name7"
				      label="周日">
							<template slot-scope="scope">
				      	<div v-if="scope.row.name7">
				      		<span>{{scope.row.name7.name}}</span>
				      	</div> 
				      	<div class="hoverMain" v-if="scope.row.name7"> 
										<ul>
											<li>
												<b>{{scope.row.name7.name}}</b>
												<span>{{scope.row.name7.classNum}}</span>
											</li>
											<li>
												地点：{{scope.row.name7.place}}	
											</li>
											<li>
												时间：{{scope.row.name7.time}}
											</li>
											<li>
												<el-button type="text" @click="$router.push({path:'/main/MyActivity'})" class="active">取消预约 ></el-button>
											</li>
										</ul>
								</div>
				      </template>
				    </el-table-column>
				  </el-table>
				</template>
			</el-row>
		</div>
	</div>
</template>
<script>
import mHeader from '../../components/Header.vue'
import mFooter from '../../components/Footer.vue'
import mAsideMenu from '../../components/AsideMenu.vue'
	export default{
		data(){
			return {
				hoverShow:false,
				'headShow':true,
				tableData: [],
				userInfo:'',
				hoverIndex:''
			}
		},
		components:{
			mHeader,
			mFooter,
			mAsideMenu
		},
		created(){
			 this.getData()
		},
		methods:{
			func(row){
				if(row.row[`name${row.rowIndex}`] && this.hoverIndex==row.column.id){
					console.log(44)
						return 'cellActive'
						
				}
					
			},
			hoverFun(row, column, cell, event){
					$(cell).find('.hoverMain').show();
					this.hoverIndex=column.id	
			},
			hoverLeave(row, column, cell,){
					$(cell).find('.hoverMain').hide()
			},
			getData(){
				this.$http.get('static/data/studentHome.json').then(res=>{
					if(res.data.code=="1"){
							this.tableData=res.data.msg.tableData;
							this.userInfo=res.data.msg.userInfo;
					}
							
				})
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../../assets/style/variable.scss';
	.stu-center{
		.el-table--enable-row-hover .el-table__body tr > td:hover{
			background:#fff;
		}
		.el-table__body-wrapper .el-table__body>tbody>tr:first-child td .hoverMain,.el-table__body-wrapper .el-table__body>tbody>tr:nth-child(2) td .hoverMain{
				top:40px;
				background-image:url('../../../static/images/left-top.png')
		}
		.el-table__body-wrapper .el-table__body>tbody>tr td:last-child .hoverMain,.el-table__body-wrapper .el-table__body>tbody>tr td:nth-child(7) .hoverMain{
			 left:-192px;
			 background-image:url('../../../static/images/right-bot.png');
		}
		.el-table__body-wrapper .el-table__body>tbody>tr:first-child td:last-child .hoverMain,.el-table__body-wrapper .el-table__body>tbody>tr:first-child td:nth-child(7) .hoverMain,
		.el-table__body-wrapper .el-table__body>tbody>tr:nth-child(2) td:last-child .hoverMain,.el-table__body-wrapper .el-table__body>tbody>tr:nth-child(2) td:nth-child(7) .hoverMain{
			background-image:url('../../../static/images/right-top.png')
		}
		.hoverMain{
				    display: none;
						position: absolute;
						width: 220px;
						z-index: 100000000;
						background:url('../../../static/images/mao.png') no-repeat left top;
						background-size:105%;
						left:78px;
						top:-85px;
						height: 130px;
						text-align: left;
						padding:5px 20px;
						ul{
							margin-top:5px;
							li{
								text-indent: 20px;
							}
						}
						
					.active{
						&.el-button--text{
							padding:0;
							margin-left:70px;
						}
					}
		}
		.center-title{
			line-height: 48px;
			border-bottom: $border;
			.name{
				position: relative;
				top:-20px;
				left:10px;
				font-size:18px;
				color:$gcolor;
			}
			.balance{
				font-size: 20px;
				color:#666;
				~.b{
					font-size: 24px;
					color:#3b3b3b;
				}
			}
			.money{
				font-size: 14px;
				color:#3b3b3b;
			}
			.recharge{
				font-size: 18px;
				color:$gcolor;
				cursor: pointer;
			}
		}

		
		
	}
</style>