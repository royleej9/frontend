'use strict';
define([
        'jquery',
        'underscore',
        'com/custom/BackboneView',
        'com/user/login',
        'bootstrap',
        'text!com/user/loginModalTpl.htm'
], function ( 
		$, _, BackboneView,
		Login, Bootstrap,
		loginModalTpl) {
	
    var LoginModal = BackboneView.extend({
		init: function() {
            this.render();
            
    		var _loginView = new Login();
    		this.$("#loginModalBady").append(_loginView.el);
		},
        render: function() {
			this.setElement(_.template(loginModalTpl, {} ));
			return this;
		}
    });
    
    return LoginModal;
} );