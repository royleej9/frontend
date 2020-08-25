define([
        'backbone'
], function (
		Backbone
) {
	'use strict';
	
	var data = [];
	var _isVisibled = true;
	
	var BackboneView = Backbone.View.extend({
		initialize: function(args) {
	        this.Id = data.length;
	        data.push({});
	        data[this.Id].isVisible = true;
	        
	        this.init();
		},
		init: function() {
			//initialized에서 초기화 활 내용 선엄 
		},
		isShow: function() {
			return _isVisibled;
		},
		show: function(isShow) {

			if (isShow === undefined) {
				return data[this.Id].isVisible;
			} else {
				if (this.el.innerHTML === "") throw new Error("View is empty");
				
				data[this.Id].isVisible = isShow;
				
				if (isShow) this.$el.show();
				else this.$el.hide();
			}
		}
	});

	return BackboneView;
} );