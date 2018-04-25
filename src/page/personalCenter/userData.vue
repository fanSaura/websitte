<template>
	<div class="userData">
		<div class="personalData">
			<div class="title">
				<span class="left">个人资料</span>
				<!-- <button v-text="btnText" @click="showToggle" class="right"></button> -->  
				<button v-text="btnText" @click="editTO()" class="right" v-if="editB"></button>
				<button v-text="btnText" @click="saveTO('form')" class="right" v-if="saveB"></button>
			</div>
			<div class="personalMain">
				<el-form label-width="80px" ref="form" :model="form" :rules="rules" :inline-message="true">
					<el-form-item label="姓名:"><span class="disable">赵楠</span>
						<!-- <el-input v-model="form.name"></el-input> -->
					</el-form-item>
					<el-form-item label="性别:"><span class="disable">男</span></el-form-item>
					<el-form-item label="出生年月:"><span class="disable">2010-10-14</span></el-form-item>
					<el-form-item label="身份证号:"><span class="disable">330124199307331122</span></el-form-item>
					<el-form-item label="家长姓名:" prop="name">
						<span v-if="save">赵一里</span>
						<el-input v-model="form.name" v-if="edit"></el-input>
					</el-form-item>
					<el-form-item label="手机号码:" prop="phone">
						<span v-if="save">158447844523</span>
						<el-input v-model="form.phone" v-if="edit"></el-input>
					</el-form-item>
					<el-form-item label="在读学校:">
						<span v-if="save">新唐小学</span>
						<el-input v-model="form.school" v-if="edit"></el-input>
					</el-form-item>
					<el-form-item label="在读年级:">
						<span v-if="save">大班</span>
						<el-select v-model="form.grade" placeholder="" v-if="edit">
					      <el-option label="高一" value="1"></el-option>
					      <el-option label="高二" value="2"></el-option>
					    </el-select>  
					</el-form-item>
					<el-form-item label="备注:" prop="remark">
						<span v-if="save">好好学习，天天向上</span>
						 <el-input type="textarea" v-model="form.remark" placeholder="最多输入50字" v-if="edit"></el-input>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="contactDate">
			<div class="title">
				<span class="left">紧急联系人</span>	
				<span class="right contectE" @click="handleEdit()" v-if="contectE">修改</span>	
				<span class="right contectS" @click="handleSave()" v-else>保存</span>		
			</div>
			<div class="contactMain">
				<el-table :data="tableData" border style="width: 100%" clas="common-table">
				    <el-table-column type="index" :index="indexMethod" label="序号" width="180">
				    </el-table-column>
				    <el-table-column prop="name" label="联系人姓名"  width="180">
				    	<template slot-scope="props" >
				    		<span v-if="!props.row.state">{{ props.row.name }}</span>
				    		<el-input v-model="props.row.name" v-else></el-input>
				    	</template>
				    </el-table-column>
				    <el-table-column prop="contectPhone"  label="联系电话" >
				    	<template slot-scope="props"  v-if="rowShow">
				    		<span v-if="contectP">{{props.row.contectPhone}}</span>
				    		<el-input v-model="props.row.contectPhone" v-else class="contectI" @blur="inputCheck(props.row.contectPhone)"></el-input>  
				    	</template>
				    </el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    	'editB':true,
    	'saveB':false,
    	'save':true,
    	'edit':false,
    	'contectE':true,
    	'contectS':false,
    	'contectP':true,
    	'contectI':false,
    	'contectPhone':'',
    	'nameC':true,
		'nameI':false,
		rowShow:true,
    	tableData:[],
    	btnText:"修改",
		form: {
          name: '',
          phone: '',
          school: '',
          grade: '',
          remark: ''
        },
        	rules: {
		        name: [
		            { required: false, message: '请输入名称', trigger: 'blur' },
		            { min: 1, max: 20, message: '请输入正确名称', trigger: 'blur' },
		            { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文',trigger: 'blur'}
		        ],
		        phone: [
		           	{ required: false, message: '请输入手机号', trigger: 'blur' },
		           	{pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message: '请输入正确的手机号',trigger: 'blur' }
				]
		    },
  
    }
},
   mounted(){
   	 	
		$('.footer').removeClass('posi');
	    var flag=($(document.body).height()<$(window).height());
	    $('.footer')[0].className='footer '+ (flag?'posi':'')

	   
		},
		watch:{
			'$route' (to,form){
				console.log(to)
			}
		},
		created(){
		this.$http.get("../../../static/data/userData.json").then(res=>{	 				  	
			this.tableData = res.data
			console.log(this.tableData)
			}).catch(err=>{							
				console.log(err)
			})
		},
	methods:{
		// showToggle(){
		// 	this.save = !this.save
		// 	this.edit = !this.edit
  //               if(this.save){  
  //                   this.btnText = "修改"  
  //               }else{  
  //                   this.btnText = "保存"  
  //               }  
		// }
		upperCase(){
	    	$(".qq").hide();
	    },
		indexMethod(index) {
	        return index + 1;
	     },
		editTO(){
			this.save = !this.save
			this.edit = !this.edit
			this.editB = !this.editB
			this.saveB = !this.saveB
			this.btnText ="保存"
			console.log(this.editB)
			console.log(this.saveB)
		},
		saveTO(formName) {
        	this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');

	          } else {
	            console.log('error submit!!');
	            return false;
	          }
        	});
      	},

		handleEdit(){
			this.contectE = false;
			this.contectP=false;
			this.tableData.push({
				state:'1',
				name:'',
				contectPhone:''
			})
		},
		inputCheck(event){
			//alert("123")
			 var pattern = /^1[34578]\d{9}$/; 
			 console.log(pattern.test(event))	
 			 if(pattern.test(event) == false){
 			 	
 			 	
 			 }else{
 			 	return pattern.test(event); 
 			 }
		},
		handleSave(){
			var length=this.tableData.length;
			console.log(length)
			this.tableData[length-1].state='';
			this.contectP=true;
			this.contectE=true;
			if(this.tableData[length-1].name=='' || this.tableData[length-1].contectPhone==''){
				this.tableData=this.tableData.slice(0,length-1);
			}
			console.log(this.tableData)
			
		}
	}
}
</script>

<style lang="scss" rel="stylesheet/scss"  scoped> 
@import '../../assets/style/variable.scss';
.footer{
	position: inherit;
}
.title{
	border-bottom: 1px solid #ddd;
   	padding:6px;
   	margin-bottom: 10px;
   	overflow: hidden;
   	.left{
   		float:left;
   		font-size: 16px;
   		color:#333;
   	}
   	.right{
   		float:right;
   		font-size: 16px;
   		color: $gcolor;
   		border: navajowhite;
	    background-color: #fff;
	    cursor: pointer;
	    margin-left: 10px;
   	}
   	.right:focus{
   		outline: none;
   	}

    }
.el-form{
	padding:0 20px 34px;
	.el-form-item{
		margin-bottom: 10px;
		.el-input,.el-select{
			width: 30%;		
		}
		.el-textarea{
			width: 50%;
			.el-textarea__inner{
				resize: none;
			}
		}
	

		.disable{
			color: #bebebe;
		}
	}
}
el-table-column{
	position:relative;
}
    

</style>