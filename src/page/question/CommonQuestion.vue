<template>
	<div>
		常见问题
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
	       var flag=($(document.body).height()<$(window).height());
	       $('.footer')[0].className='footer '+ (flag?'posi':'')
		},
	}
</script>