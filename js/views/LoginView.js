var LoginView = Backbone.View.extend({
    
    //event delegation
    events:{
        //condition that triggers : function triggered
        "submit #login-form":"handleLogin"
    },
    // render login page
    render: function() {
        //    TODO : change css style
        this.$el.html(`
            <div class="login-wrapper">
                <div class="login-card">
                    <div class="login-logo">Giga BMC</div>
                    <p class="login-subtitle">系統登入</p>
                    <form id="login-form">
                        <div class="form-group">
                            <label for="username">帳號</label>
                            <input type="text" id="username" placeholder="請輸入帳號">
                        </div>
                        <div class="form-group">
                            <label for="password">密碼</label>
                            <input type="password" id="password" placeholder="請輸入密碼">
                        </div>
                        <button type="submit" class="login-btn">登入</button>
                    </form>
                </div>
            </div>
        `);
        return this;
    },

    handleLogin:function(event){
       event.preventDefault();
       
       var username=this.$("#username").val();
       var password=this.$("#password").val(); 

        // "this model refers to?" model binding??  
       this.model.set({
            username:this.$('#username').val(),
            password:this.$('#password').val()
       })
       
    //    TODO :login authentication
       
    }
});


