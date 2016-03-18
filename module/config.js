requirejs.config({
	baseUrl: './',
	paths: {
		mithril: "module/lib/mithril.min",
		zepto: "module/lib/zepto.min",
		jquery: "module/lib/jquery.min",
		touch: "module/lib/touch-0.2.14.min",
		underscore: "module/lib/underscore-min",
		coms: "module/coms", //插件
		comp: "module/comp", //组件
		model: "module/model", //model vm模型
		view: "module/view", //试图
		app: 'module/app' //入口
	},
	shim: {
		/*common: {
			deps: ['mithril']
		}*/
	}
});

window.APP = {
	ACTION: { /*接口*/

	}
};