// console.log(mnrfObj);
// if(mnrfObj == 'undefined'){
// 	mnrfObj = {}
// }
// let test
mnrfObj = typeof mnrfObj == "undefined" ? {} : mnrfObj;
mnrfObj.inputs = $(".mnrf-input");
// var orig = mnrfObj.inputs
$.each(mnrfObj.inputs,function (index, value) {
	value.org = {};
	value.org.val = $(value).val();
	value.org.hint = $(value).find('.sub-hint').html();
	value.org.title = $(value).find('.sub-title').html();
});

console.log(mnrfObj);

mnrfObj.inputs
	.mouseover(function () {
		$(this).addClass("state-hover");
	})
	.mouseout(function () {
		$(this).removeClass("state-hover");
	});

mnrfObj.inputs.find(".sub-header").click(function () {
	if ($(this).parent().is(".sub-block")) {
		$(this).parents(".sub-block").find("input").focus();
	} else {
		$(this).parents(".mnrf-input").find("input").focus();
	}
});

mnrfObj.inputs
	.find("input")
	.focus(function () {
		$(this).parents(".mnrf-input").addClass("state-focus");
	})
	.blur(function () {
		$(this).parents(".mnrf-input").removeClass("state-focus");
	});

checkAllDisabled();
function checkAllDisabled() {
	mnrfObj.inputs
		.find("input:disabled")
		.parents(".mnrf-input")
		.addClass("state-disable");
	mnrfObj.inputs
		.find("input:enabled")
		.parents(".mnrf-input")
		.removeClass("state-disable");
}

// function setDisabled(obj
