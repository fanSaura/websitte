<template>
	<div>
		<m-header :headShow='headShow'>
			<img src="../../../static/images/banner.png" alt="" class="banner">
		</m-header>
		<el-container class="container ele-container">
			<el-main>
				<el-row class="container ele-container">
					<p class="head">您的位置 : <router-link to="">兴趣培训</router-link> > <router-link to="/training/onlineExhibition">网上展厅</router-link> > <span class="active">美术馆</span></p>
				</el-row>
				<el-row :gutter="20" >
			  		<el-col :span="6" v-for="item in itemArr">
					  	<router-link to="/training/onlineExhibition/exhibitionMain/exhibitionDetail" class="">
					  		<div class="itemMain">
					  			<img :src="item.img" class="hover-scale">
					  			<span class="img-date">{{item.word}}</span>
					  		</div>
					  	</router-link>				  	
		  			</el-col>			
		  		</el-row>
		  	</el-main>
	    </el-container>		
		
		<m-Footer></m-Footer>
	</div>
</template>
<script>
	import mHeader from '../../components/Header.vue'
	import mFooter from '../../components/Footer.vue'
	export default{
		data(){
			return{
				"headShow":true,
				itemArr:[]
			}
		},
		components:{
			mHeader,
			mFooter
		},
		// mounted(){
		// 	$('.footer').removeClass('posi');
		// 	       var flag=($(document.body).height()<$(window).height());
		// 	       $('.footer')[0].className='footer '+ (flag?'posi':'')
		// },
		created(){

			this.$http.get("../../static/data/online.json").then(res=>{				 				  
				this.itemArr = res.data
				console.log(this.itemArr)
			})
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../../assets/style/variable.scss';
  .el-main{
  	overflow: visible;
  }
  .itemMain{
  	position: relative;
  	margin-bottom: 20px;
  	overflow: hidden;
  	.img-date{
  		width: 275px;
  		text-align: center;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
  	}
  	&:hover .img-date{
		 background:#cf261f;
	 }
  }
	

</style>