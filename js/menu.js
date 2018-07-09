
$(function () {
	//menu
	$(".shop_menu").on("click",clickMenu);//点击显示分类
	$(".menu_bc").on("click",clickMenu);//点击黑色遮罩,关闭分类
	$(".menu_btn_ok").on("click",determine);//点击确定按钮
	$(".menu_btn_reset").on("click",resetCase);//点击重置按钮
	
	$(".drop_open").children(".menu_list_tt").addClass("has_drop");//默认展开
	
	function clickMenu () {//菜单
		if($(".menu_box").is(":hidden")){//菜单是否显示
			$(".menu_box").show();
			var w = $(".menu_nav_box").outerWidth();
			$(".menu_nav_box").css("right",-w);
			$(".menu_btn_box").css("right",-w);
			$(".menu_nav_box").animate({right:0},300);
			$(".menu_btn_box").animate({right:0},300);
			$(".menu_bc").animate({opacity:1},300);
		}else{
			var w = $(".menu_nav_box").outerWidth();
			$(".menu_nav_box").animate({right:-w},300);
			$(".menu_btn_box").animate({right:-w},300);
			$(".menu_bc").animate({opacity:0},300,function () {
				$(".menu_box").hide();
			});
		}
	}
	
	function determine () {//确定事件
		clickMenu();//关闭菜单
	}
	
	function resetCase () {//重置事件
		for(i=0;i<$(".menu_list").length;i++){//排除默认展开
			if(!$(".menu_list").eq(i).hasClass("drop_open")){//是否默认展开
				dropBox($(".menu_list").eq(i).children(".has_drop"));//展开收回
			}
		}
		$(".selected .menu_yet").text("全部").removeClass("menu_yet");//提示初始化
		$(".selected .active").removeClass("active");//取消选中
		$(".selected").removeClass("selected");//取消选中提示
	}
	
});
