<template>
	<div class="edit-pwd">
	    <r-header :text='text' :headShow='headShow' :buttonShow='buttonShow'></r-header>
		<div class=" container ForgetPwd">
			<p-step :active="1"></p-step>
	        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
			  <el-form-item label="密码:" prop="pass">
			    <el-input type="password" v-model="form.pass"></el-input>
			    <span class="prompt">5~20个字符，字母开头，包括数字、下划线、字母区分大小写。</span>
			  </el-form-item>
			  <el-form-item label="确认密码:" prop="checkPass">
			    <el-input type="password" v-model="form.checkPass"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('form')">
			    	确定
			    </el-button>			    
			  </el-form-item>
			</el-form>
		</div>
	    <r-footer></r-footer>
	</div>
</template>
<script>
import rHeader from '../../components/Header.vue'
import rFooter from '../../components/Footer.vue'
import pStep from '../../components/Step.vue'
export default {
  name: '',
  data () {
  	var validatePass = (rule, value, callback) => {            
        if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.form.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
  	};

    return {
	    headShow:false,
        buttonShow:true,
        text:"找回密码",
        form:{
        	pass:'',
        	checkPass:''
        },
        rules:{
		        pass: [
		            { required: true, message: '请输入密码', trigger: 'blur' },
		            {pattern: /^[a-zA-Z0-9]{6,12}$/,message: '请输入正确的密码',trigger: 'blur' }
		        ],
		        checkPass: [
		            {required: true, validator: validatePass, trigger: 'blur' }
		           
				]
		    }
	    }
	},
    methods:{
	// submitForm(){
	// 	this.$router.push({path:'/login'})
	//  },
	 submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');

	          } else {
	            console.log('error submit!!');
	            return false;
	          }
        	});
      	}
	},

  	components:{
			rHeader,
			rFooter,
			pStep
		}

}
</script>

<style lang="scss" rel="stylesheet/scss" > 
@import '../../assets/style/variable.scss';

.edit-pwd .el-button{
	 background:$gcolor;
	 border-color: $gcolor;
}

.edit-pwd .el-input{
	width: 30%;
}
.edit-pwd .el-form-item{
	padding-left:14%;
	.prompt{
		font-size: 12px;
		padding-left: 20px;
		color:#afafaf;
	}
}
.edit-pwd .footer{
	background-color: #fff;
	position:absolute;
	bottom:0;
}
</style>