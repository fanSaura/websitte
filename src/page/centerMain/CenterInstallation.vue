<template>
	<l-menu :titleOne="titleOne" :titleTwo="titleTwo" :path="path" :list="list"></l-menu>
</template>

<script>
	import lMenu from '../../components/ListMenu.vue'
	export default{
		data(){
			return{
				"titleOne":"中心介绍",
				"titleTwo":"中心设施",
				"path":"/center/centerInstallation/installationMain",
				list:[

					{
						title:"美劳教学设备设施",
						time:"2009-02-27"
					},
					{
						title:"外语教学设备设施",
						time:"2009-02-27"
					},
					{
						title:"少先队活动设备设施",
						time:"2009-02-27"
					},
					{
						title:"文学数学教学设备设施",
						time:"2009-02-27"
					},
					{
						title:"体育教学设备设施（待改建更新）",
						time:"2009-02-27"
					},
					{
						title:"科技教学设备设施",
						time:"2009-02-27"
					},
					{
						title:"美术教学设备设施",
						time:"2009-02-27"
					},
					{
						title:"文艺教学设备设施",
						time:"2009-02-27"
					},
					{
						title:"中心环境",
						time:"2009-02-27"
					}
				]
			}
		},
		components:{lMenu},
	}
</script>
