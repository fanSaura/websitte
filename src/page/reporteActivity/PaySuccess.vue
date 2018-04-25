<template>
	<div class="paySuccess">
		<m-header :headShow="headShow">
			<img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<div class="ele-container container">
			<el-row class="side-tit">
				<span>缴费成功</span>
				<el-button class="fr" type="text" @click="$router.go(-1)">返回<i class="el-icon-arrow-right"></i></el-button>
			</el-row>
			<div >
				<div class="item-content pay-state border">
					<i class="iconfont icon-chenggong"></i>
					<p class="mt10">缴费成功！</p>
				</div>
				<div class="item-content detail"  v-if="orderInfo.classInfo">
					<el-row >
						<el-col :span="2" class="detail-tit">班级信息：</el-col>
						<el-col :span="5" >{{orderInfo.classInfo.name}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">班级：{{orderInfo.classInfo.num}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">预约号：14998763</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">时间：{{orderInfo.classInfo.date}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="5" :offset="2">地点：{{orderInfo.classInfo.place}}</el-col>
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
				"headShow":true
			}
		},
		components:{
			mHeader,
			mFooter
		},
		computed:{
			orderInfo(){
				return this.$store.state.payContainer
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
	@import '../../assets/style/variable.scss';
	.paySuccess{
		.item-content{
			&.border{
				border-bottom:$border;
			}
			&.detail{
				padding:30px 20px;
			}
			&.pay-state{
				padding:50px;
				text-align: center;
				p.mt10{
					font-size: 22px;
					line-height: 32px;
					margin-left: 20px;
				}
				.iconfont{
					font-size: 108px;
					&.icon-chenggong{
						color:$Rcolor;
					}
				}
			}
		}
		.footer{
			position: absolute;
			bottom:0;
			width:100%;
		}
	}
</style>