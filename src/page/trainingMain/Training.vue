<template>
	<div class="training">
		<m-header :headShow='headShow'>
			 <img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<el-row class="container ele-container rel">
				<div class="modal-main">
					<transition name="fade">
		               <router-view></router-view>
		            </transition>
				</div>
				<div class="modal-side">
					<c-aside :list="listMain" ></c-aside>
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
					"title":"兴趣培训",
					"main":[
					{
						"path":"/training/trainingNotice",
						"text":"培训通知"
					},
					{
						"path":"/training/projectIntro",
						"text":"项目介绍"
					},
					{
						"path":"/training/researchTeach",
						"text":"科研教学"
					},
					{
						"path":"/training/communityStyle",
						"text":"社团风采"
					},
					{
						"path":"/training/onlineExhibition",
						"text":"网上展厅"
					},
					{
						"path":"/training/teachers",
						"text":"教师风采"
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

			},
			
		}
	}
</script>
<style lang="scss" rel="stylesheet">
	.training{
	}
</style>