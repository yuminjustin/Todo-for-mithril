define(function (require, exports, module) {
	var m = require("mithril"),
		add = function (vm) {
			var input = m("input", {
					type: "text",
					placeholder: "输入需要添加的文字",
				    onchange: m.withAttr("value", vm.des),
					value: vm.des()
				}),
				button = m("button", {
					onclick: function(){
						vm.add(input.value)
					}
				},"添加");
			return m("div", {
				class: "c addbox"
			}, [input, button]);
		};

	module.exports = add;
});