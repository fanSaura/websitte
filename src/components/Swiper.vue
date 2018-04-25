<template>
	<div class="swiper-container" :class="type">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="item in img">
					<div class="img-contain">
							<img :src="item.path" slot="imgShow" class="hover-scale">
					</div>
					<p slot="exh" class="img-date center"  v-if="item.word"><b>{{item.word}}</b></p>

					<div slot="media" v-if="item.itemTitle">
						<div class="img-title"  >
									<p class="img-date"><b>发布时间：{{item.startDate}}</b></p>
						</div>
						<div class="content-details content-module" >
									<h5 class="text-over">{{item.itemTitle}}</h5>
									<p class="detail-main">
										 {{item.itemMain}}
									</p>
						</div>
					</div>
					<div slot="navs" class="item" v-if="item.classA">
					    <i class="iconfont" :class="item.classA"></i>
						<p>{{item.title}}</p>
					</div>
		</div>
	    </div>
	    <!-- Add Pagination -->
    	<div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div>


</template>
<script>
	export default{
		data(){
			return {

			}
		}, 
    created(){
     
    },

		props:['img','type']
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../assets/style/variable.scss';
	.swiper-container{
      width: 100%;
      padding-bottom: 30px;
    }
		.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
			background-image:url('../../static/images/btn-pre.png');
			background-size:contain;
		}
		.swiper-button-next, .swiper-container-rtl .swiper-button-prev{
			 background-image:url('../../static/images/btn-next.png');
			background-size:contain;
		}
		.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
			cursor:not-allowed;
		}
    .swiper-slide {
    	/*width: 220px;*/
      // text-align: center;
      // font-size: 18px;
      // background: #fff;

      // /* Center slide text vertically */

      // -webkit-box-pack: center;
      // -ms-flex-pack: center;
      // -webkit-justify-content: center;
      // justify-content: center;
      // -webkit-box-align: center;
      // -ms-flex-align: center;
      // -webkit-align-items: center;
      // align-items: center;
	}
	.img-title{
		.img-date{
			color:#fff;
			text-align:left;
			top:205px;
			bottom:auto;
		}
	}
  .img-date{
 		width: 361px;
 		height: 36px;
 		line-height: 36px;
 		padding-left:10px;
		 color:#fff;
 		position:absolute;
		 bottom:0;
		 left:0;
		 right:0;
 		background:rgba(0,0,0,.5)
	 }
	 .img-date b{
		 color:#fff;
		 font-weight: 400;
		 position: relative;
		 z-index:100;
	 }
  .swiper-button-next, .swiper-button-prev{
    height:30px;
  }
</style>