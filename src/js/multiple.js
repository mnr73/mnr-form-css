mnrfObj.multi = $(".mnrf-multi");

$.each(mnrfObj.multi, function (index, value) {
	value.separator = {};
	value.separator = ",";
	value.splits = [];
});

if (pointer_is_fine) {
	mnrfObj.multi
		.mouseover(function () {
			$(this).addClass("state-hover");
		})
		.mouseout(function () {
			$(this).removeClass("state-hover");
		});
}

mnrfObj.multi
	.find("input:visible")
	.on("focus", function () {
		$(this).parents(".mnrf-multi").addClass("state-focus");
		// do somethings
		openWrap($(this).parents(".mnrf-multi"));
	})
	.on("blur", function () {
		$(this).parents(".mnrf-multi").removeClass("state-focus");
		// do somethings
		// if($(this).siblings().is('.sub-data')){
		// 	$(this).siblings('.sub-data').removeClass('state-show')
		// }
	});

mnrfObj.multi.find("input:visible").on("keyup", function (event) {
	let obj = $(this).parents(".mnrf-multi").get(0);
	if(!$(obj).is('.opt-select')){
		let sep = obj.separator;
		let splits;
		let sepreg;
		if (typeof sep == "object") {
			sepreg = sep.join("|");
		} else if (typeof sep == "string") {
			sepreg = sep;
		}
		if (new RegExp(sepreg).test($(this).val()) || event.keyCode === 13) {
			splits = $(this).val().split(new RegExp(sepreg));
			splits = splits.filter((item) => item);
			obj.splits = obj.splits.concat(splits);
			$(this).val("");
			setMultiData(obj);
		}
	}
	
	if ($(this).parents('.mnrf-multi').find(".sub-data").length) {
		let search = $(this).val();
		let regex = new RegExp(search, "i");
		let options
		options = $(this).parents('.mnrf-multi').find(".sub-option");
		options.removeClass("state-hide");
		let hideOptions = options.filter(function () {
			return !regex.test($(this).text());
		});
		hideOptions.addClass("state-hide");
		if (options.not(".state-hide").length) {
			$(this).parents('.mnrf-multi').find(".sub-data").addClass("state-show");
		} else {
			$(this).parents('.mnrf-multi').find(".sub-data").removeClass("state-show");
		}
	}
});

mnrfObj.multi.on("click", ".sub-tag", function () {
	let obj = $(this).parents(".mnrf-multi").get(0);
	obj.splits.splice(obj.splits.indexOf($(this).text()), 1);
	setMultiData(obj);
});

function setMultiData(obj) {
	obj.splits = obj.splits.filter(function (value, index, self) {
		return self.indexOf(value) === index;
	});
	$(obj).find("input[type=hidden]").val(JSON.stringify(obj.splits));
	$(obj).find(".sub-tags").empty();
	if ($(obj).find(".sub-data").length) {
		$(obj).find(".sub-option").removeClass("state-select");
	}
	$.each(obj.splits, function (i, item) {
		$(obj)
			.find(".sub-tags")
			.append(
				'<span class="sub-tag"><span class="sub-close"><svg viewBox="0 0 311 311.07733" xmlns="http://www.w3.org/2000/svg"><path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg></span>' +
					item +
					"</span>"
			);
		if ($(obj).find(".sub-data").length) {
			// obj.find('.sub-option').attr('data',item).addClass('state-select')
			// obj.find('.sub-option').attr('data',item).addClass('state-select')
			let selectedOpt = $(obj)
				.find(".sub-option")
				.filter(function () {
					return (
						$(this).text() == item || $(this).attr("data") == item
					);
				});
			selectedOpt.addClass("state-select");
		}
	});
}

mnrfObj.multi.find(".sub-toggleData").on("click", function () {
	$(this).siblings(".sub-data").toggleClass("state-show");
	if ($(this).siblings(".sub-data").find(".sub-search").length > 0) {
		$(this)
			.siblings(".sub-data")
			.find(".sub-option")
			.removeClass("state-hide");
		$(this)
			.siblings(".sub-data")
			.find(".sub-search")
			.find("input")
			.val("")
			.focus();
	}
	subDataBtn($(this).siblings(".sub-data"));
});

mnrfObj.multi.find(".sub-option").on("click", function () {
	let obj = $(this).parents(".mnrf-multi").get(0);
	let opt = $(this);
	// obj.splits = typeof mnrfObj == "undefined" ? [] : obj.splits;
	if (opt.attr("data")) {
		if (opt.is(".state-select")) {
			obj.splits.splice(obj.splits.indexOf(opt.attr("data")), 1);
		} else {
			obj.splits.push(opt.attr("data"));
		}
	} else {
		if (opt.is(".state-select")) {
			obj.splits.splice(obj.splits.indexOf(opt.text()), 1);
		} else {
			obj.splits.push(opt.text());
		}
		
	}

	setMultiData(obj);
	// opt.siblings('.sub-option').removeClass('state-select')
	// opt.addClass('state-select')
});

function subDataBtn(obj) {
	if (obj.siblings().is(".sub-toggleData")) {
		if (obj.is(".state-show")) {
			obj.siblings(".sub-toggleData").addClass("state-up");
		} else {
			obj.siblings(".sub-toggleData").removeClass("state-up");
		}
	}
}
