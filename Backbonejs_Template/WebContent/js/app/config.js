'use strict';
require.config({
		
		// 경로 설정
        paths: {
        	json2	   : '../libs/json2',
            jquery     : '../libs/jquery-1.10.2',
            text       : '../libs/text', 		// text 2.0.10
            underscore : '../libs/underscore',	//Underscore.js 1.5.2
            backbone   : '../libs/backbone',	// Backbone.js 1.1.0
            ajaxUtil   : '../libs/jquery.ajax.util',
            bootstrap  : '../libs/bootstrap'
            	
        },

        // 의존 파일 설정
        shim : {
        	backbone : {
        		deps : ['jquery', 'underscore'],
                exports : 'Backbone'
            },
            underscore : {
            	exports : '_'
            },
        	ajaxUtil: {
        		deps: ["json2"],
        		exports: 'AjaxUtil'
        	},
        	bootstrap: {
        		deps: ['jquery'],
        		exports: 'Bootstrap'
        	}
        }
});