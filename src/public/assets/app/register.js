$(document).ready(function() {
    var register = {
        init: function() {
            this.dom();
            this.event();
        },
        dom: function() {
            $this = this;
            var $wrapper = $('.form-wrap');
            $this.firstname = $wrapper.find('.firstname');
            $this.lastname = $wrapper.find('.firstname');
            $this.email = $wrapper.find('.email');
            $this.country = $wrapper.find('.country');
            $this.password = $wrapper.find('.password');
            $this.submit = $wrapper.find('.register');
        },
        event: function() {
            $this.submit.on('click', this.register.bind(this));
        },
        register: function(e) {
            e.preventDefault();
            var data = {
                first_name: this.firstname.val(),
                last_name: this.lastname.val(),
                email: this.email.val(),
                country_id: this.country.val(),
                role_id: 'e76ffa93-fe0f-4566-8f7a-a600088f00ae',
                password: this.password.val(),
            };
            $.ajax({
                type: 'POST',
                url: '/api/accounts/register',
                data: data,
                success: function(response) {
                    console.log(response);
                },
            });
        },
    };
    register.init();
});