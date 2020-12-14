$('.mnrf-btn').click(function (event) {
	if(event.pageX != 0){
		$(this).find('button').blur()
	}
});