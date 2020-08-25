define([], function() {
	
	var ValidationUser = {
			isResult: false,
			result: {isOKt: false, msg: ""},
			checkLEngNum: function(str) {
				var strReg = /^[a-z0-9]+$/;
				if (strReg.test(str)){
					this.isResult = true;
				} else{
					this.isResult = false;
				}
			},
			checkUEngNum: function(str) {
				var strReg = /^[a-zA-Z0-9]+$/;
				if (strReg.test(str)){
					this.isResult = true;
				} else{
					this.isResult = false;
				}
			},			
			checkUserID: function(userID){
				this.result.isOK = false;
				this.result.msg = "";
				
				var strReg = /^[a-z0-9]+$/;
				
				if(userID.length < 4 || userID.length > 12) {
					this.result.msg = "ID는 4~12 이내로 입력해야 합니다.";
				} else if ( !strReg.test(userID) ) {
					this.result.msg = "ID는 영문 소문자,숫자만 가능합니다.";
				} else {
					this.result.isOK = true;
					this.result.msg = "";
				}
				return this.result;
			},
			checkUserEmail: function(email) { 				
				this.result.isOK = false;
				this.result.msg = "";
				
				var emailPattern = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;  
				if (email.length == 0) {
					this.result.msg = "Email 주소를 입력해주시기 바랍니다.";
				} else if (!emailPattern.test(email) ) {    			
					this.result.msg = "잘 못된 Email 주소입니다.";
				} else {
					this.result.isOK = true;
					this.result.msg = "";
				}
				return this.result;
			},
			checkPasswd: function(passwd) {
				this.result.isOK = false;
				this.result.msg = "";
				
				var strReg = /^[a-zA-Z0-9]+$/;
				if(passwd.length < 4 || passwd.length > 16) {
					this.result.msg = "패스워드는 4~16 이내로 입력해야 합니다.";
		    	} else if (!strReg.test(passwd)) {
					this.result.msg = "패스워드는 영문 또는 숫자만 가능합니다.";
		    	}else{
		    		this.result.msg = "";
		    		this.result.isOK = true;					
		    	}
		    	return this.result;
			}
	};
	return ValidationUser;
});