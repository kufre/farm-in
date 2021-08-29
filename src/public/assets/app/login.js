(function() {
    var auth = {
        init: function() {
            this.dom();
            this.event();
        },
        dom: function() {
            $this = this;
            $wrapper = $('.form-wrap');
            $this.form = $wrapper.find('#contact_form');
            $this.email = $wrapper.find('.email');
            $this.password = $wrapper.find('.password');
            $this.submit = $wrapper.find('.submit');
        },
        event: function() {
            $this.submit.on('click', this.login.bind(this));
        },
        login: function(e) {
            e.preventDefault();
            var data = {
                email: this.email.val(),
                password: this.password.val(),
            };
            this.request('/api/auth/login', 'POST', data);
        },
        request: function(url, method, data) {
            $.ajax({
                url: url,
                // headers: {
                //     Authorization: 'Basic xxxxxxxxxxxxx',
                //     'X-CSRF-TOKEN': 'xxxxxxxxxxxxxxxxxxxx',
                //     'Content-Type': 'application/json',
                // },
                method: method,
                dataType: 'json',
                data: data,
                success: function(response) {
                    if (!response.response) {
                        alert(response.message);
                    }
                    window.location.replace('/users/dashboard');
                },
            });
        },
    };
    auth.init();
})();