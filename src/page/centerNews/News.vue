<template>
	<div  class="training">
		<m-header :headShow='headShow'>
			 <img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<el-row class="container ele-container rel">
				<div class="modal-main">
					<transition name="fade">
		               <router-view></router-view>
		            </transition>
				</div>
				<div class="modal-side" >
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
					"title":"中心新闻",
					"main":[
					{
						"path":"/news/notice",
						"text":"中心通知"
					},
					{
						"path":"/news/report",
						"text":"中心报道"
					},
					{
						"path":"/news/vedioClip",
						"text":"视频剪辑"
					},
					{
						"path":"/news/mediaReport",
						"text":"媒体报道"
					},
					{
						"path":"/news/careGuide",
						"text":"关怀指导"
					},
					{
						"path":"/news/exchange",
						"text":"对外交流"
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