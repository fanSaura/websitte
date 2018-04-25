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
					title:"中心介绍",
					main:[
					{
						"path":"/center/centerHome",
						"text":"中心概况"
					},
					{
						"path":"/center/centerInstallation",
						"text":"中心设施"
					},
					{
						"path":"/center/centerMap",
						"text":"中心地图"
					},
					{
						"path":"/center/centerHonor",
						"text":"中心荣誉"
					},
					{
						"path":"/center/subordinateBody",
						"text":"下属机构"
					},
					{
						"path":"/center/legalNotice",
						"text":"法律声明"
					}
					]
				}

				
				
			}
		},
		beforeRouteEnter(to,from,next){
			console.log(to)
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