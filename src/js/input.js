// console.log(mnrfObj);
// if(mnrfObj == 'undefined'){
// 	mnrfObj = {}
// }
// let test

var currentState = history.state
pointer_is_fine = matchMedia("(pointer:fine)").matches;

mnrfObj = typeof mnrfObj == "undefined" ? {} : mnrfObj;
mnrfObj.inputs = $(".mnrf-input");
// var orig = mnrfObj.inputs
// $.each(mnrfObj.inputs,function (index, value) {
// 	value.org = {};
// 	value.org.val = $(value).find('input').val();
// 	value.org.hint = $(value).find('.sub-hint').html();
// 	value.org.title = $(value).find('.sub-title').html();
// });

console.log(mnrfObj);
// if device is mobile hover disable
if (pointer_is_fine) {
	mnrfObj.inputs
		.mouseover(function () {
			$(this).addClass("state-hover");
		})
		.mouseout(function () {
			$(this).removeClass("state-hover");
		});
}
// if click on sub header focus on input
mnrfObj.inputs.find(".sub-header").click(function () {
	if ($(this).parent().is(".sub-block")) {
		$(this).parents(".sub-block").find("input").focus();
	} else {
		$(this).parents(".mnrf-input").find("input").focus();
	}
});
// add state focus on input focus
mnrfObj.inputs
	.find("input")
	.on("focus", function () {
		$(this).parents(".mnrf-input").addClass("state-focus");
		// do somethings
		openWrap($(this).parents(".mnrf-input"));
	})
	.on("blur", function () {
		$(this).parents(".mnrf-input").removeClass("state-focus");
		// do somethings
		// if($(this).siblings().is('.sub-data')){
		// 	$(this).siblings('.sub-data').removeClass('state-show')
		// }
	});
// add state disabled to disabled inputs
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

mnrfObj.inputs.find(".sub-pwst").on("click", function () {
	let eye = $(this);
	eye.siblings("input").attr("type", function (index, attr) {
		// return attr == 'password' ? 'text' : 'password';
		if (attr == "password") {
			eye.html(
				'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4177 3.71619C20.1248 3.42794 19.65 3.42794 19.3571 3.71619L17.2693 5.77086C15.6565 4.6629 13.8555 4.07543 12 4.07543C9.94315 4.07543 7.94745 4.79542 6.21856 6.14201C4.51054 7.46402 3.08697 9.37061 2.06144 11.7081C1.97974 11.8943 1.97951 12.1054 2.06081 12.2918C2.94643 14.3222 4.13598 16.0255 5.55444 17.2999L3.58307 19.24L3.51045 19.3228C3.2926 19.6117 3.3168 20.0218 3.58307 20.2838C3.87596 20.5721 4.35084 20.5721 4.64373 20.2838L20.4177 4.76002L20.4903 4.67724C20.7082 4.38828 20.684 3.97823 20.4177 3.71619ZM6.61636 16.2548L8.75422 14.1508C8.32259 13.5256 8.086 12.785 8.086 12.0012C8.086 9.86842 9.83371 8.1473 12 8.1473C12.7921 8.1473 13.5527 8.38178 14.1867 8.80457L16.1892 6.83382C14.8815 5.99055 13.4565 5.55163 12 5.55163C10.2903 5.55163 8.61992 6.15424 7.14764 7.30096C5.73781 8.39217 4.52945 9.96072 3.61706 11.9004L3.5704 12.0014L3.61575 12.1003C4.40872 13.7948 5.43049 15.2038 6.61636 16.2548ZM13.0935 9.8804C12.7618 9.71412 12.3876 9.6235 12 9.6235C10.6624 9.6235 9.586 10.6835 9.586 12.0012C9.586 12.385 9.67671 12.7495 9.8468 13.0756L13.0935 9.8804ZM15.1366 11.8158L15.238 11.8269C15.6456 11.8991 15.9167 12.2828 15.8434 12.684C15.556 14.2567 14.2992 15.496 12.7022 15.7813C12.2946 15.8541 11.9042 15.588 11.8303 15.1869C11.7563 14.7858 12.0267 14.4016 12.4342 14.3288C13.4152 14.1536 14.1904 13.3892 14.367 12.4227C14.4343 12.055 14.7675 11.8002 15.1366 11.8158ZM18.997 8.31439C19.3279 8.06924 19.7981 8.13452 20.0472 8.46021C20.773 9.40914 21.4072 10.4985 21.9384 11.7072C22.0205 11.894 22.0205 12.1059 21.9386 12.2927C19.8613 17.0289 16.1345 19.9245 12 19.9245C11.0588 19.9245 10.1275 19.7747 9.23057 19.4801C8.83766 19.351 8.62544 18.9329 8.75657 18.5463C8.8877 18.1596 9.31252 17.9507 9.70543 18.0798C10.4497 18.3242 11.2207 18.4483 12 18.4483C15.3046 18.4483 18.381 16.1864 20.2727 12.3298L20.4284 12.0014L20.3755 11.8846C19.9948 11.0784 19.5645 10.339 19.0898 9.67414L18.8488 9.34799C18.5997 9.02231 18.666 8.55955 18.997 8.31439Z"/></svg>'
			);
			return "text";
		} else {
			eye.html(
				'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2882 4.00482L12.002 4C7.86108 4 4.12926 6.92308 2.06091 11.7058C1.9797 11.8936 1.9797 12.1064 2.06091 12.2942L2.20424 12.6168C4.24638 17.0931 7.77544 19.8644 11.7118 19.9952L11.998 20C16.1389 20 19.8707 17.0769 21.9391 12.2942C22.0213 12.104 22.0202 11.8884 21.9361 11.699L21.7968 11.3856C19.7497 6.90091 16.2192 4.13547 12.2882 4.00482ZM12.009 5.48942L12.2479 5.49456L12.5149 5.50845C15.7122 5.73484 18.6525 8.10553 20.429 11.9991L20.4197 12.0231C18.5987 16.0005 15.5569 18.3853 12.2589 18.505L12.004 18.5088L11.7469 18.5054L11.4806 18.4915C8.38271 18.2721 5.52637 16.0344 3.73914 12.3597L3.57 11.9991L3.72658 11.6662C5.61117 7.77315 8.69148 5.49027 12.009 5.48942ZM11.9995 8.11346C9.8391 8.11346 8.0885 9.85313 8.0885 12.0002C8.0885 14.1465 9.83929 15.8859 11.9995 15.8859C14.1598 15.8859 15.9115 14.1463 15.9115 12.0002C15.9115 9.85325 14.16 8.11346 11.9995 8.11346ZM11.9995 9.60378C13.3317 9.60378 14.4115 10.6764 14.4115 12.0002C14.4115 13.3231 13.3316 14.3956 11.9995 14.3956C10.6677 14.3956 9.5885 13.3234 9.5885 12.0002C9.5885 10.6761 10.6676 9.60378 11.9995 9.60378Z"/></svg>'
			);
			return "password";
		}
	});
});

mnrfObj.inputs.find(".sub-toggleData").on("click", function () {
	$(this).siblings(".sub-data").toggleClass("state-show");
	subDataBtn($(this).siblings(".sub-data"));
});

mnrfObj.inputs.find("input").on("keyup", function () {
	if ($(this).siblings().is(".sub-data")) {
		let search = $(this).val();
		let regex = new RegExp(search, "i");
		let options = $(this).siblings(".sub-data").find(".sub-option");
		options.removeClass("state-hide");
		let hideOptions = options.filter(function () {
			return !regex.test($(this).text());
		});
		hideOptions.addClass("state-hide");
		if (options.not(".state-hide").length) {
			$(this).siblings(".sub-data").addClass("state-show");
		} else {
			$(this).siblings(".sub-data").removeClass("state-show");
		}
		subDataBtn($(this).siblings(".sub-data"));
	}
});

mnrfObj.inputs.find(".sub-option").on("click", function () {
	let opt = $(this);
	opt.parent().removeClass("state-show");
	opt.parent().siblings("input").val(opt.text()).focus();
	subDataBtn($(this).parent());
});

// click outside
$(document).on("mousedown", function (e) {
	let target = $(e.target);
	let visibleData = $(".sub-data:visible");
	if (
		isOutside(target, $(".sub-data")) &&
		isOutside(target, visibleData.siblings())
	) {
		$(".sub-data").removeClass("state-show");
		subDataBtn(visibleData);
	}
});

$(document).on("click", ".sub-wrap button", function () {
	closeWrap();
});

function isOutside(target, obj) {
	if (obj.is(target) || target.parents().is(obj)) {
		return false;
	} else {
		return true;
	}
}

function subDataBtn(obj) {
	if (obj.siblings().is(".sub-toggleData")) {
		if (obj.is(".state-show")) {
			obj.siblings(".sub-toggleData").addClass("state-up");
		} else {
			obj.siblings(".sub-toggleData").removeClass("state-up");
		}
	}
}

function checkScrollBody() {
	if ($(".mnrf-mob-wrap").length > 0) {
		$("body").addClass("mnrf-nosroll");
	} else {
		$("body").removeClass("mnrf-nosroll");
	}
}

function closeWrap() {
	$(".mnrf-mob-wrap").replaceWith($(".mnrf-mob-wrap").find(".mnrf-input"));
	if(currentState == "mnrf-openWraper"){
		if (window.history && window.history.pushState){
			currentState = null
			window.history.back();
		}
	}
	$("body").removeClass("mnrf-nosroll");
}


function openWrap(obj) {
	if (obj.is(".opt-mobile") && obj.parents(".mnrf-mob-wrap").length < 1) {
		if ( ($(window).width() < 500 && $(window).height() < 800) || !pointer_is_fine) {
			if (window.history && window.history.pushState) {
				window.history.pushState("mnrf-openWraper", null, "#mnrf-openWraper");
				currentState = history.state
			}
			obj.wrap(
				"<span class='mnrf-mob-wrap'><span class='sub-wrap'></span></span>"
			);
			$(".sub-wrap").append("<button>back</button>");
			$("body").addClass("mnrf-nosroll");
			obj.find(".sub-frame").find("input").focus();
		}
	}
}


	$(window).on("popstate", function (e) {
		if(currentState == "mnrf-openWraper"){
			currentState = null
			closeWrap()
		}
	});
