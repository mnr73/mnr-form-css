$('.mnrf-checkbox,.mnrf-radio,.mnrf-radio-key,.mnrf-radio-slider,.mnrf-check-slider').click(function (event) {
	if(event.pageX != 0){
		$(this).find('input').blur()
	}
});