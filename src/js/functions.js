
checkAllDisabled();
function checkAllDisabled() {
	mnrfObj.inputs
		.find("input:disabled")
		.parents(".mnrf-input")
		.addClass("state-disable");
	// mnrfObj.inputs
	// 	.find("input:enabled")
	// 	.parents(".mnrf-input")
	// 	.removeClass("state-disable");
	mnrfObj.textarea
		.find("textarea:disabled")
		.parents(".mnrf-textarea")
		.addClass("state-disable");
}