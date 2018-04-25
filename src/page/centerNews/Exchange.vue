<<template>
	<l-menu :titleOne="titleOne" :titleTwo="titleTwo" :path="path" :list="list"></l-menu>
</template>
<script>
	import lMenu from '../../components/ListMenu.vue'
	export default{
		data(){
			return{
					"titleOne":"中心新闻",
					"titleTwo":"对外交流",
					"path":"/news/exchange/exchangeMain",
					list:[
					{
						title:"新疆来中心挂职干部一行参观发展中心",
						time:"2015-12-27"
					},
					{
						title:"重庆市少年宫一行参观发展中心",
						time:"2015-12-24"
					},
					{
						title:"浙江科技教育中心一行参观发展中心",
						time:"2015-12-23"
					},
					{
						title:"山西省晋城市青少年活动中心一行参观发展中心",
						time:" 	2015-12-17"
					},
					{
						title:"上海市青少年活动中心（甘肃庆阳）挂职干部一行参观发展中心",
						time:" 2015-12-09"
					},
					{
						title:"山东临沂市教育局、实践基地一行参观发展中心",
						time:"2015-12-09"
					},
					{
						title:"新疆教育厅一行参观发展中心",
						time:" 	2015-12-03"
					},
					{
						title:"黑龙江大兴安岭地区教育局一行参观发展中心",
						time:" 	2015-11-28"
					},
					{
						title:"“全市第二课堂参观团一行参观发展中心",
						time:" 	2015-11-27"
					},
					{
						title:"全国社区和校外少先队工作现场会议代表一行参观发展中心",
						time:" 	2015-11-22"
					},
					{
						title:"重庆市江津区团委一行参观发展中心",
						time:" 	2015-11-20"
					},
					{
						title:"重庆市渝中区团委一行参观发展中心",
						time:" 	2015-11-20"
					},
					{
						title:"金华市青少年宫一行参观发展中心",
						time:"2015-11-12"
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
