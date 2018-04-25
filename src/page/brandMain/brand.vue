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
					title:"品牌窗口",
					main:[
					{
						"path":"/brand/comicGame",
						"text":"国际漫画比赛"
					},
					{
						"path":"/brand/cocialPractice",
						"text":"杭州市中学生社会实践活动"
					},
					{
						"path":"/brand/artsFestival",
						"text":"杭州市中小学生艺术节"
					},
					{
						"path":"/brand/artGrade",
						"text":"美术水平等级考试"
					},
					{
						"path":"/brand/creativeSpeech",
						"text":"“天堂儿歌”创作和演唱比赛"
					},
					{
						"path":"/brand/auditorium",
						"text":"成长大讲堂"
					},
					{
						"path":"/brand/internationalExchange",
						"text":"国际交流"
					},
					{
						"path":"/brand/cultureIndustry",
						"text":"中华文化创意少年奖"
					},
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