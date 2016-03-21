define(function (require, exports, module) {
	var m = require("mithril"),
		list = {
			init: function (vm) {
				var li = list.liMaker(vm),
					button = list.removeChoose(vm);
				return m("div", {
					class: "c oh listbox"
				}, [m("ul", li), button]);
			},
			liMaker: function (vm) {
				var reArr = [];
				vm.collection.map(function (model, index) {
					var input = m("input", {
							type: "checkbox",
							class: "l db",
							onclick: function () {
								model.checked(this.checked);
							},
						    config: function(element){
								element.checked = model.checked();
							}
						}),
						span = m("span", {
							class: "db l ellipsis",
							style: {
								display: model.edited() ? "none" : "inline-block"
							},
							ondblclick: function () {
								model.edited(!model.edited());
							}
						}, model.name()),
						input2 = m("input", {
							type: "text",
							class: "l db",
							style: {
								display: model.edited() ? "inline-block" : "none"
							},
							value: model.name(),
							onblur: function () {
								model.oldname(model.name());
								model.name(this.value);
							}
						}),
						div = m("div", {
							class: "operate r"
						}, [
							m("button", {
								style: {
									marginRight: "8px",
									display: model.checked() ? "inline-block" : "none"
								},
								task: model.name(),
								onclick: m.withAttr("task", vm.del)
							}, "删除"),
							m("button", {
								style: {
									marginRight: "8px",
									display: model.edited() ? "inline-block" : "none"
								},
								onclick: function () {
									model.edited(false);
								}
							}, "修改"),
							m("button", {
								style: {
									display: model.edited() ? "inline-block" : "none"
								},
								onclick: function () {
									model.name(model.oldname());
									model.oldname("");
									model.edited(false);
								}
							}, "取消")
						]);
					reArr.push(m("li", [input, span, input2, div]));
				})
				return reArr;
			},
			removeChoose: function (vm) {
				return m("button", {
					class: "del r",
					style: {
						display: (function () {
							var re = false,
								models = vm.collection;
							for (var i = 0, l = models.length; i < l; i++) {
								if (models[i].checked()) re = true;
							}
							return re;
						})() ? "inline-block" : "none"
					},
					onclick: function(){
						vm.del();
					}
				}, "删除选中项");
			}
		}


	module.exports = list.init;
});