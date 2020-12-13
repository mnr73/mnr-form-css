mnrfObj.textarea = $(".mnrf-textarea");

if (pointer_is_fine) {
	mnrfObj.textarea
		.mouseover(function () {
			$(this).addClass("state-hover");
		})
		.mouseout(function () {
			$(this).removeClass("state-hover");
		});
}

mnrfObj.textarea
	.find("textarea")
	.on("focus", function () {
		$(this).parents(".mnrf-textarea").addClass("state-focus");
		// do somethings
		openWrap($(this).parents(".mnrf-textarea"));
	})
	.on("blur", function () {
		$(this).parents(".mnrf-textarea").removeClass("state-focus");
		// do somethings
		// if($(this).siblings().is('.sub-data')){
		// 	$(this).siblings('.sub-data').removeClass('state-show')
		// }
	});
