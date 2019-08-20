// 主js
// 点击左侧导航，右侧出现对应内容
$(function(){
	$('.contentRight').load('./pages/home.html');
	// 默认打开
	$('.leftDiv li').click(function(){
		// this-->li DOM
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.contentRight').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.contentRight').load('./pages/category.html');
				break;
			case '资讯管理':
				$('.contentRight').load('./pages/info.html');
				break;
			case '用户管理':
				$('.contentRight').load('./pages/user.html');
				break;
			default:
				break;
		}
	});
});