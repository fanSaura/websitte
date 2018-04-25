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
					title:"中心团队",
					main:[
					{
						"path":"/team/volunteerGrace",
						"text":"志愿者风采"
					},
					{
						"path":"/team/volunteerService",
						"text":"志愿服务"
					},
					{
						"path":"/team/registrationService",
						"text":"报名志愿者服务"
					},
					{
						"path":"/team/jobs",
						"text":"人才招聘"
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