<template>
	<div class="apply-pay">
		<m-header :headShow="headShow">
			<img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<div class="ele-container container">
			<el-row class="side-tit">
				<span>支付页面</span>
				<el-button type="text" class="fr" @click="$router.go(-1)">返回<i class="el-icon-arrow-right"></i></el-button>
			</el-row>
			<div class="">
				<div class="item-content detail">
					<el-row >
						<el-col :span="2" class="detail-tit">订单信息：</el-col>
						<el-col :span="5">{{orderInfo.classInfo.name}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">地点：{{orderInfo.classInfo.place}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">时间：{{orderInfo.classInfo.date}}</el-col>
					</el-row>
				</div>
				<div class="item-content detail">
					<el-row >
						<el-col :span="2" class="detail-tit">订单明细：</el-col>
						<el-col :span="5">学费：{{orderInfo.costDeatail.tuition}}元</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">服务费：{{orderInfo.costDeatail.escrow}}元</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">支付总金额：{{orderInfo.tuition}}元</el-col>
					</el-row>
				</div>
				<div class="item-content detail">
					<el-row>
						<el-col :span="4" class="detail-tit">请使用以下方式快捷缴费：</el-col>
						<el-col :span="20" class="line"></el-col>
					</el-row>
					<el-row>
						<el-col :offset="2" class="ele-radio">
							<label>
								<input type="radio" class="radio-item" checked>
								<img src="static/images/business.png" alt="">
							     <span class="radio-text radio-item">中国工商银行</span>
							</label>
							<label>
								<input type="radio" class="radio-item">
								<img src="static/images/alipay.png" alt="">
							     <span class="radio-text radio-item">支付宝支付</span>
							</label>
							<label>
								<input type="radio" class="radio-item">
								<img src="static/images/wechat-pay.png" alt="">
							     <span class="radio-text radio-item">微信扫一扫支付</span>
							</label>
						</el-col>
					</el-row>
				</div>
				<div class="item-content detail">
					<el-row>
						<el-col :span="2" class="detail-tit">发票信息：</el-col>
						<el-col :span="22" class="line"></el-col>
					</el-row>
					<el-row class="checkbox">
						<el-col :offset="2">
							<label>
								<input type="checkbox" checked> 发具发票
							</label>

						</el-col>
					</el-row>	
					<div class="invoice-content">
						<el-row class="column">
							<el-col :span="3">发票类型：</el-col>
							<el-col :span="8">电子发票</el-col>
						</el-row>
						<el-row class="column">
							<el-col :span="3" >发票信息：</el-col>
						    <el-col :span="8">校外培训</el-col>
						</el-row>
						<el-row class="column">
							<el-col :span="3" >发票抬关类型：</el-col>
						    <el-col :span="8" >
						    	<label>
						    		<input type="radio" checked> 个人
						    	</label>
						    	<label>
						    		<input type="radio"> 企业
						    	</label>
						    </el-col>
						</el-row>
						<el-row class="column">
							<el-col :span="3">发票抬头：</el-col>
						    <el-col :span="8">
						    	<el-input v-model="input" v-if="modifyShow"></el-input>
						    	<div v-else><span>{{input}}</span><el-button @click="modifyShow=true" type="text">修改</el-button></div>
						    </el-col>
						</el-row>
						<el-row class="column">
							<el-col :span="3">纳税人识别号：</el-col>
						    <el-col :span="8">
						    	<el-input  v-model="input1" placeholder="根据最新增值税管理办法，如需企业抬头发票，请填字书有效税号信息。"></el-input>
						    	
						    </el-col>
						</el-row>
							
					</div>
					<el-row class="tips">
						<el-col :offset="2" :span="22" class="tips-text">
							<i class="el-icon-question active"></i>
							您也可以去报名班级所在的分中心现场缴费！   西湖区昭庆寺里街22号     电话：15466585866
						</el-col>
					</el-row>
							
						
					
				</div>
				<el-row class="item-content">
					<el-col :span="2" :offset="11"> 
						<router-link to="/paySuccess">
							<el-button type="danger" class="block" size="small">确定</el-button>
						</router-link>
					</el-col>
				</el-row>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>
<script>
import mHeader from '../../components/Header'
import mFooter from '../../components/Footer'
	export default{
		data(){
			return{
				'headShow':true,
				radio:1,
				radio2:3,
				input:'张三',
				input1:'',
				modifyShow:false
			}
		},
		computed:{
			orderInfo(){
				return this.$store.state.payContainer
			}
		},
		mounted(){
            console.log(this.$store.state.payContainer)
		},
		components:{
			mHeader,
			mFooter
		},
		methods:{
			modify(){
				console.log(3232)
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../../assets/style/variable.scss';
	.apply-pay{
			.el-button--text{
				color:$gcolor;
				&.el-button{
					padding:7px 5px;
				}
			}
			.item-content{
				
				.line{
					height: 1px;
					background: #dfdfdf;
					position: relative;
	                top: 14px;
				}
			.checkbox{
				line-height: 32px;
			}	
		 }

		.ele-radio{
			padding:20px 0;
			label{
				margin-right:65px;
				.radio-item{
					position:relative;
					top:-16px;
					font-size: 18px;
					margin-left: 15px;
					&.radio-text{
						margin-left: 10px;
					}
				}
			}
				

			
		}
		.invoice-content{
			margin-top: 12px;
			margin-left: 8.33333%;
			background:#f4f4f4;
			padding:20px;
			.column{
				margin-bottom: 10px;
				line-height: 30px;
			}
			.el-input__inner{
				background:#f4f4f4;
				height:30px;
				border-radius:0;
			}
			.el-input.is-active .el-input__inner, .el-input__inner:focus{
				border-color:$gcolor;
			}

		}
		.el-radio__input.is-checked .el-radio__inner{
			background:$gcolor;
			border-color:$gcolor;
		}
		.el-radio__input.is-checked+.el-radio__label{
				color:#666;
			}

	   .tips{
	   		margin:20px 0;
	   		
	   		.tips-text{
	   			background:#fff7eb;
	   			padding:5px;
	   			line-height: 24px;
	   			border:1px solid $gcolor;
	   			i{
	   				font-size: 24px;
	   				position:relative;
	   				top:3px;
	   			}
	   		}
	   		
	   }
	}
</style>