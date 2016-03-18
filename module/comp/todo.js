define(function (require, exports, module) {
	var model = require("../model/todo"),
		view = require("../view/todo"),
		compent = {
			controller: function () {
			},
			view: function () {
				return view(model);
			}
		};
	return compent;
});