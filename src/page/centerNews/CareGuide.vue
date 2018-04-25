<<template>
	<l-menu :titleOne="titleOne" :titleTwo="titleTwo" :path="path" :list="list"></l-menu>
</template>
<script>
	import lMenu from '../../components/ListMenu.vue'
	export default{
		data(){
			return{
					"titleOne":"中心新闻",
					"titleTwo":"关怀指导",
					"path":"/news/careGuide/guideMain",
					list:[
					{
						title:"市委叶明副书记的重要批示",
						time:"2010-06-19"
					},
					{
						title:"胡启立同志视察阳光天地",
						time:"2008-12-05"
					},
					{
						title:"市委常委孟祥锋11月13日视察青少年发展中心",
						time:"2008-11-16"
					},
					{
						title:"全国政协副主席郑万通11月8日视察阳光天地",
						time:"2008-11-10"
					},
					{
						title:"杭州市财税系统党团员参观阳光天地",
						time:"2008-10-17"
					},
					{
						title:"市委副书记王金财、团省委书记鲁俊参观发展中心",
						time:"2008-10-06"
					},
					{
						title:"团中央书记处书记卢雍政来中心视察工作",
						time:"2007-05-20"
					},
					{
						title:"2006杭州少年新春音乐会声乐专场",
						time:"2006-12-24"
					},
					{
						title:"潘天寿为孩子作画",
						time:" 	2006-12-10"
					},
					{
						title:"叶剑英观看学员演出",
						time:"2006-12-10"
					},
					{
						title:"西湖少年水电站落成",
						time:"2006-12-10"
					},
					{
						title:"诸乐三为孩子作画",
						time:"2006-12-10"
					},
					{
						title:"省长周建人为少年宫落成剪彩并讲话",
						time:"2006-12-10"
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
