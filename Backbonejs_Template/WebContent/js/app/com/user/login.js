'use strict';
define([
        'jquery',
        'underscore',
        'com/custom/BackboneView',
        'ajaxUtil',
        'com/util/validationUser',
        'text!com/user/loginTpl.htm'
], function ( 
		$, _, BackboneView,
		AjaxUtil, ValidationUser,
		loginTpl) {

	var _alertMsg = [];
	
	// 사용자 ID 체크 
	function _checkUserID(regView){
		var userID = regView.$('#inputUserID').val();
		var idBox = regView.$("#idBox");
		
		idBox.removeClass("error");
    	
    	var result = ValidationUser.checkUserID(userID);    	
    	if (!result.isOK) {
    		_alertMsg.push(result.msg);    		
    		idBox.addClass("error");
    	}
    	
		return result.isOK;
	};
	
	function _checkPasswd(regView) {
    	var passwd = regView.$("#inputPassword").val();
    	var passwdBox = regView.$("#passwdBox");
    	
    	passwdBox.removeClass("error");
    	
    	var result = ValidationUser.checkPasswd(passwd);
       	if (!result.isOK) {
    		_alertMsg.push(result.msg);    		
    		passwdBox.addClass("error");
    	}
       	return result.isOK;
	};
	
	function _showAlertMsg(regView) {		
		regView.$('#alertBox').text('');
		
		for (var i = 0, len = _alertMsg.length; i < len; i++) {            			
			regView.$('#alertBox').append(_alertMsg[i] + "<br>");
		}
		regView.$('#alertBox').hide("fast");
		regView.$('#alertBox').show("fast");
	}
	
    var Login = BackboneView.extend({
		init: function() {
            this.render();
            this.$('#alertBox').hide();
            this.showLodder(false);
		},
        render: function() {
			this.setElement(_.template(loginTpl, {} ));
			return this;
		},
		initView: function() {
			_alertMsg.length = 0;
			this.$('#alertBox').text('');
			this.$('#alertBox').hide();
			this.$("#inputUserID").val("");
			this.$("#inputPassword").val("");
			this.$("#idBox").removeClass("error");
			this.$("#passwdBox").removeClass("error");
		},
        events: {
        	"click #loginBtn" : "onClickBtnLogin",
//        	"click #regPageBtn": "onClickRegPage",
//        	"click #pwPageBtn": "onClickLostUserPWPage",
        },
        onClickBtnLogin: function() {
        	if (!this.$('#loginBtn').hasClass('disabled')) {
        		
        		_alertMsg.length = 0;
            	this.$('#loginBtn').addClass('disabled');            	
            	var ch1 = _checkUserID(this), ch2 = _checkPasswd(this);             	

            	var self = this;
            	if ( ch1 && ch2) {
            		this.showLodder(true);
            		
            		var inData = this.$(":input").serializeObject();            		
            		$.postJSON("/user/login", inData, function(data) {
            			if (data.success) {
            				window.location.replace("/trans");
            			} else {
            				this.showLodder(false);
            				
            				_alertMsg.push("ID 또는 PASSWORD가 일치하지 않습니다.");
            				_showAlertMsg(self);
            				self.$('#loginBtn').removeClass('disabled');
            			}
            		});
            	} else {
            		_showAlertMsg(this);
            		self.$('#loginBtn').removeClass('disabled');
            	}
        	}
        },
        onClickRegPage: function() {
        	this.show(false);
        	this.trigger('moveToRegPageEvent', this);
        },
        onClickLostUserPWPage: function() {
        	this.show(false);
        	this.trigger('moveToLostUserPWPageEvent', this);
        },
        showLodder: function(isShow) {
        	if (isShow) {
        		this.$('#loginLoader').show();
        	} else {
        		this.$('#loginLoader').hide();
        	}
        }
    });
    
    return Login;
} );