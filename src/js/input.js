// console.log(mnrfObj);
// if(mnrfObj == 'undefined'){
// 	mnrfObj = {}
// }
mnrfObj = typeof mnrfObj == "undefined" ? {} : mnrfObj;
mnrfObj.inputs = $(".mnrf-input");
console.log(mnrfObj);

mnrfObj.inputs
	.mouseover(function () {
		$(this).addClass("state-hover");
	})
	.mouseout(function () {
		$(this).removeClass("state-hover");
	});

mnrfObj.inputs.click(function () {
	$(this).find("input").focus();
});

mnrfObj.inputs
	.find("input")
	.focus(function () {
		$(this).parents(".mnrf-input").addClass("state-focus");
	})
	.blur(function () {
		$(this).parents(".mnrf-input").removeClass("state-focus");
	});
