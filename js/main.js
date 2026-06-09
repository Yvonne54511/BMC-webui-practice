
brouter

$(document).ready(function(){
	var livePowerModel = new PowerTelementry();

	var mainDashboardView = new PowerView({model: livePowerModel});

	$('#content-payload').html(mainDashboardView.render().el);
});