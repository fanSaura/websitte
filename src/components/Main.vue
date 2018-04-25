<template>
	<div class="main-side">
		<m-header :headShow='headShow'>
			 <img src="static/images/banner.png" alt="" class="banner">
		</m-header>
		<el-row class="container ele-container clearfix rel">
				<div class="center-side">
					<m-aside></m-aside>
				</div>
				<div class="center-main">
					<transition name="fade">
		               <router-view></router-view>
		            </transition>
				</div>
		</el-row>
		
		<m-Footer></m-Footer>
	</div>
</template>
<script>
import mHeader from './Header.vue'
import mFooter from './Footer.vue'
import mAside from './AsideMenu.vue'
	export default{
		data(){
			return {
				'headShow':true,
				'activeIndex':'/main/studentHome'
			}
		},
		components:{
			mHeader,
			mFooter,
			mAside
		},
		watch:{
			'$route' (to,form){
				console.log(to.path)
			}
		},
		methods:{
			handleSelect(key,path){

			},
			handleOpen(key,path){
				this.activeIndex='/main/userData'||'/main';
				this.$router.push({path:'/main/userData'})
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../assets/style/variable.scss';
	.main-side{
		.el-main{
		padding:30px;
	    border:1px solid #ddd;
	  }
	  .person{
	  	background: $Mcolor;
	  }
	}
	
</style>
