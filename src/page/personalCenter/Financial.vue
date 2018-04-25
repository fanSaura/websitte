<template>
	<div>
		资金明细
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
				console.log($(document.body).height());
	            console.log($(window).height())
			}
		},
		
	}
</script>