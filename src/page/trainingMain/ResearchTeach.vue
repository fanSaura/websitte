<template>
	<l-menu :titleOne="titleOne" :titleTwo="titleTwo" :path="path" :list="list"></l-menu>
</template>

<script>
	import lMenu from '../../components/ListMenu.vue'
	export default{
		data(){
			return{
				"titleOne":"兴趣培训",
				"titleTwo":"科研教学",
				"path":"/training/researchTeach/researchMain",
				list:[

					{
						title:"外语部《中小学茶道课程开发与实施初级班》圆满结束",
						time:" 	2017-11-12"
					},
					{
						title:"外语部2017年春季校外活动辅导员教研会议顺利开展",
						time:" 	2017-06-21"
					},
					{
						title:"第五届浙江省青少年校外教育教师技能大赛传喜讯",
						time:"2017-02-26"
					},
					{
						title:"祝贺24位教师在浙江省校外教育教师技能大赛获佳绩",
						time:"2017-02-26"
					},
					{
						title:"全国青少年宫系统优秀课程征集活动评选喜获丰收",
						time:"2017-02-26"
					},
					{
						title:"中西文化之涉外礼仪教学探索",
						time:"2017-01-08"
					},
					{
						title:"丽水行—记外语部赴丽水市青少年宫考察交流学习活动",
						time:"2016-11-03"
					},
					{
						title:"活动中心举行2016年部门教研计划交流会",
						time:" 	2016-04-08"
					},
					{
						title:"中心举行2015年度优秀社团评审会",
						time:" 	2016-01-28"
					},
					{
						title:"做有思维的英语教育",
						time:" 2016-01-17"
					},
					{
						title:"中心在2014年华东校外教育课程设计交流活动中喜获丰收",
						time:" 	2015-12-27"
					},
					{
						title:"2015年主题性示范活动成果交流会顺利召开",
						time:" 	2015-12-27"
					},
					{
						title:"活动中心举行师徒结对交流会",
						time:" 	2015-10-30"
					}
				]
			}
		},
		components:{lMenu},
	}
</script>
