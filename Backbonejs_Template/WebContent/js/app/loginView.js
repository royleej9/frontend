require( ['config', 'commonLibs'], function () {
	require( [ 'com/user/login'], function ( Login ) {

		var _login = new Login();
		$("#loginView").append(_login.el);
	} );
} );