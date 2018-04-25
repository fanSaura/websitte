<<template>
	<l-menu :titleOne="titleOne" :titleTwo="titleTwo" :path="path" :list="list"></l-menu>
</template>
<script>
	import lMenu from '../../components/ListMenu.vue'
	export default{
		data(){
			return{
					"titleOne":"中心新闻",
					"titleTwo":"中心通知",
					"path":"/news/notice/noticeContent",
					list:[
					{
						title:"中心富士DX100干式照片冲印机采购项目中标公告",
						time:"2018-01-18"
					},
					{
						title:"2018年春季杭州少儿英语俱乐部录取名单",
						time:"2018-01-18"
					},
					{
						title:"新年有约，快乐无限Happy New Year！ Happy Family！——外语部第二十二届迎新Party活动预告",
						time:"2018-01-17"
					},
					{
						title:"幼儿（1-6岁）亲子活动类兼职辅导教师招聘",
						time:"2017-12-22"
					},
					{
						title:"关于招聘物业管理人员和保安的公告",
						time:"2018-01-13"
					},
					{
						title:"收费窗口1月15日至2月11日开放时间变动",
						time:"2018-01-13"
					},
					{
						title:"“小伢儿助力五水共治”之第八届“我绘我创ABC ”字母创绘赛网络投票开始啦 ！",
						time:"2018-01-10"
					},
					{
						title:"关于开展2018杭州市第六届大众健身大赛竞赛的通知",
						time:"2018-01-05"
					},
					{
						title:"新年新气象 党员树形象",
						time:"2018-01-05"
					},
					{
						title:"杭州青少年活动中心跆拳道队录取名单",
						time:"2018-01-05"
					},
					{
						title:"杭州青少年活动中心体验部餐厅成品冰淇淋、现打冰淇淋、西点供应商定点招标",
						time:"2018-01-04"
					},
					{
						title:"杭州青少年活动中心体验部餐厅食品配料、沙拉供应商定点招标",
						time:"2018-01-04"
					},
					{
						title:"杭州青少年活动中心体验部餐厅成品饮料、现调饮料供应商定点招标",
						time:"2018-01-04"
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
