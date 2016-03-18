define(function (require, exports, module) {
	var m = require("mithril"),
		todo = { /*数据处理*/
			model: function (data) { /*单个对象*/
				this.name = m.prop(data.name); /*名字*/
				this.oldname = m.prop(data.oldname || ""); /*上一个名字*/
				this.checked = m.prop(false); /*是否被选择*/
				this.edited = m.prop(false); /*是否编辑*/
			},
			des: m.prop(""),
			collection: [],
			/*对象集合 普通数组*/
			add: function () { /*添加数据*/
				var t = todo;
				if (t.des()) {
					t.collection.push(new t.model({
						name: t.des()
					}));
					t.des("");
				}
			},
			del: function (model) {
				var t = todo,
					listTemp = [];
				for (var i = 0, l = t.collection.length; i < l; i++) {
					var temp = t.collection[i];
					if (model) {
						if (temp.name() != model) listTemp.push(temp);
					} else {
						if (!temp.checked()) listTemp.push(temp);
					}
				}
				t.collection = listTemp
			}
		};

	module.exports = todo;
});