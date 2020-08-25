require( ['config', 'commonLibs'], function () {
	require( [ 'com/user/loginModal'], function ( LoginModal ) {
		
		var _loginModal = new LoginModal();
		$("#loginModalView").append(_loginModal.el);
	} );
} );