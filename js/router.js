var AppRouter = Backbone.Router.extend({
    routes: {
        //"URL":"callback functionName" //route to function mapping
        "power": "showPower", //route to show the power dashboard
        "login":"showLogin", //route to show the login page
        "*actions": "defaultRoute"//*:any uri that are not matched will be redirected to defaultRoute
    },
 
    // below are the callback functions(Actions) for the routes defined abovess
    showLogin: function() {
        $('#sidebar-region').hide();
        var loginModel = new LoginModel();
        var loginView = new LoginView({model: loginModel});
        $('#content-payload').html(loginView.render().el);
    },
    showPower: function() {
        $('#sidebar-region').show();
        var livePowerModel = new PowerTelemetry();
        var view = new PowerView({model: livePowerModel});
        $('#content-payload').html(view.render().el);
        this.updateSidebar('power');
    },

    defaultRoute: function() {
        this.navigate('login', { trigger: true });
    },

    updateSidebar: function(route) {
        $('.nav-links li').removeClass('active');
        if (route) {
            $('.nav-links li[data-navigate="' + route + '"]').addClass('active');
        }
    }
});