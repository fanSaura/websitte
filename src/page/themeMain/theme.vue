<template>
	<div>
		<m-header :headShow='headShow'>
			 <img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<el-row class="container ele-container rel">
				<div class="modal-main">
					<transition name="fade">
		               <router-view></router-view>
		            </transition>
				</div>
				<div  class="modal-side">
					<c-aside :list="listMain"></c-aside>
				</div>
		</el-row>
		
		<m-Footer></m-Footer>
	</div>
</template>
<script>
import mHeader from '../../components/Header.vue'
import mFooter from '../../components/Footer.vue'
import cAside from '../../components/CenterMenu.vue'
	export default{
		data(){
			return {
				'headShow':true,
				"listMain":{
					title:"主题活动",
					main:[
					{
						"path":"/theme/educationNotice",
						"text":"主题教育活动通知"
					},
					{
						"path":"/theme/traditionalActivities",
						"text":"传统活动项目介绍"
					}
					]
				}

				
				
			}
		},
		components:{
			mHeader,
			mFooter,
			cAside
		},
		methods:{
			handleSelect(key,path){

			}
			
		}
	}
</script>