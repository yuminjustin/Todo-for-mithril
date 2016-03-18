define(function (require, exports, module) {
	var m = require("mithril"),
		add = require("./add"),
		list = require("./list"),
		todo = function (vm) {
			return m("div", {
				class: "mainbox m oh"
			}, [m("h1", "Mithril todo"), add(vm), list(vm)]);
		};

	module.exports = todo;
});