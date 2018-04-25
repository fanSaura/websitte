<<template>
	<l-menu :titleOne="titleOne" :titleTwo="titleTwo" :path="path" :list="list"></l-menu>
</template>
<script>
	import lMenu from '../../components/ListMenu.vue'
	export default{
		data(){
			return{
					"titleOne":"中心新闻",
					"titleTwo":"中心报道",
					"path":"/news/report/reportMain",
					list:[
					{
						title:"浙江少儿频道、杭州日报、青年时报等多家媒体报道杭州市第十三届中学生社会实践岗位招聘会",
						time:"2018-01-23"
					},
					{
						title:"青春造梦工厂，因你而精彩——杭州市第十三届中学生社会实践岗位招聘会顺利举办",
						time:"2018-01-22"
					},
					{
						title:"Do都城”新晋市长出炉！她的父母总结了三个养成关键词！",
						time:"2018-01-19"
					},
					{
						title:"杭州少年交警走进“汽车空间”涨知识",
						time:"2018-01-19"
					},
					{
						title:"今天，警界网红、少年交警花样出镜倡导文明出行",
						time:" 	2018-01-12"
					},
					{
						title:"17所杭城小学已经预约“Do都城”里的期末考！",
						time:"2018-01-10"
					},
					{
						title:"““Do都城”冬季特别场开始啦",
						time:"2018-01-10"
					},
					{
						title:"关于开展2018杭州市第六届大众健身大赛竞赛的通知",
						time:"2018-01-05"
					},
					{
						title:"“Do都城”冬季特别场开始啦",
						time:"2018-01-05"
					},
					{
						title:"2018年杭州市社区青少年俱乐部辅导员上岗培训顺利举行",
						time:"2017-12-31"
					},
					{
						title:"“Do都城”一月场次开放时间公告",
						time:"2017-12-31"
					},
					{
						title:"“Do益行 温暖中国”公益项目启动！500多人现场见证公益盛典",
						time:"2017-12-30"
					},
					{
						title:"浙江新闻、中国蓝新闻、今日头条、搜狐网等报道“Do都城”全国交通安全日活动",
						time:"2017-12-30"
					}
				]
			}
		},
		components:{lMenu},
	}
</script>
<style lang="scss" rel="stylesheet/scss">
.trainingMain {
	
	.el-menu{
		border-right: none;
		border:none;
		.el-menu-item, .el-submenu__title{
		height: 30px;
		line-height: 30px;
		.title{
			float: left;
		}
		.time{
			float: right;
		}	
	}
	}	
}
</style>
