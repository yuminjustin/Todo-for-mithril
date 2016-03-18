define(function (require, exports, module) {
	var m = require("mithril"),
		todo = require("comp/todo")
	var Route = {
		"/": todo,
		"/todo":todo
	};

	m.route(document.getElementById("body"), "/", Route);
});