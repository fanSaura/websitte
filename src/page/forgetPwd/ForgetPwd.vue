<template>
	<div class="edit-pwd">
	    <r-header :text='text' :headShow='headShow' :buttonShow='buttonShow'></r-header>
		<div class=" container ForgetPwd">
			<p-step :active="0"></p-step>
	        <el-form ref="form" :model="form" :rules="rules" label-width="100px" :inline-message="true">
				<el-form-item label="身份证号:" prop="idCard">
				    <el-input v-model="form.idCard"></el-input>	
				</el-form-item>
				<el-form-item label="手机号码:" prop="phone">
				    <el-input v-model="form.phone"></el-input>
				    <!-- <span class="prompt">提示：外籍人士通过教官初注册</span> -->
				</el-form-item>
				<el-form-item label="手机验证码:" prop="jiaoYan">
			    	<el-input v-model="form.jiaoYan">
			    		<el-button slot="append" @click="sendAgain()" class="again-send">获取验证码</el-button>
		    		</el-input>
		    	</el-form-item>
				<el-form-item>
			    	<el-button type="primary" class="next" @click="getCheck('form')">下一步</el-button>
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
import {send} from '../../libs/utils.js'
export default {
  	name: '',
  	data () {
  		var validateidCard = (rule, value, callback) =>{
    	if(!value){
    		 callback(new Error("请输入身份证号码！"));
    		 console.log(this.form.idCard)
    	}
    	this.IdentityCodeValid($.trim(this.form.idCard))
    	if(this.pass){
			this.$http.get('static/data/register.json').then(res=>{

			console.log(res.data)
			  if(res.data.idCard == this.form.idCard){
					this.checkCard=false;
					// verifyForm.tips('');
					callback(new Error("此身份证已被注册"));
				}else{
					//console.log("123")
					this.checkCard=true;
					this.form.sex=this.form.idCard.substr(-2,1)%2?"男":"女";
					console.log(this.form.sex)
					this.form.birthDate=this.form.idCard.substr(6,4)+'/'+this.form.idCard.substr(10,2)+'/'+this.form.idCard.substr(12,2)
	       callback();
					}
											
				}).catch(err=>{
						this.checkCard=false;
						console.log(err)
				})
			}else{
				callback(new Error("请输入正确的身份证号码！"));
				this.checkCard=false
			}
	    };
	    var validateCode = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入验证码'));
	        } else {
	          if (this.form.jiaoYan !== this.code) {
	            callback(new Error('验证码输入不正确'));
	          }
	          callback();
	        }
	    };
	    return {
		    headShow:false,
	        buttonShow:true,
	        text:"找回密码",
	        code:'',
	        b:60,
	        form:{
	        	idCard:'',
	        	phone:'',
	        	jiaoYan:''
	        },
	        rules: {
		        idCard: [
		            { required: true, validator: validateidCard, trigger: 'blur' }
		        ],
		        phone: [
		           { required: true, message: '请输入手机号', trigger: 'blur' },
		           {pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message: '请输入正确的手机号',trigger: 'blur' }
				],
				jiaoYan: [
		            { required: true,  trigger: 'blur',validator: validateCode }
		        ]
		    }
	    }
	},
	methods:{
	
			getCheck(formName) {
	        	this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		            this.$router.push({path:'/confirmPwd'})		
		            
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
	        	});
	      	},
	    IdentityCodeValid(code) { 
           var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};

         	this.pass=true;
           if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                /*tip = "身份证号格式错误";*/
                this.pass = false;
            } else if(!city[code.substr(0,2)]){
               /* tip = "地址编码错误";*/
                this.pass = false;
            }else{
                //18位身份证需要验证最后一位校验位
                if(code.length == 18){
                    code = code.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if(parity[sum % 11] != code[17]){
                        /*tip = "校验位错误";*/
                        this.pass =false;
                    }
                }
            }
			         
		},
		sendAgain(){ 
			alert("123")
		 	var reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
		 	if(this.form.phone !=='' && reg.test(this.form.phone)){
		 		
		 		this.$http.get("static/data/register.json").then(res=>{
					  if(this.form.phone == res.data.phone){
					  	this.code=res.data.code;
					  	console.log(this.code)
					  }												
				}).catch(err=>{							
						console.log(err)
				})
				var $againSend=$(".again-send");
				send($againSend,this.b)
		 	}else{
		 		console.log('请输入手机号码');
		 	}			 	
		}
	},
  	components:{
			rHeader,
			rFooter,
			pStep

		}


	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped> 
@import '../../assets/style/variable.scss';
.edit-pwd .next{
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
.edit-pwd .el-form-item.is-required .el-form-item__label:before{
	content:'/'!important;
}
</style>