<template>
	<div>
		卡片挂失
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		watch:{
          '$route' (to,form){
          	console.log(to)
          }
		},
		mounted(){
			console.log($(document.body).height());
	        console.log($(window).height())
			$('.footer').removeClass('posi');
	       var flag=($(document.body).height()<$(window).height());
	       $('.footer')[0].className='footer '+ (flag?'posi':'')
		},
	}
</script>