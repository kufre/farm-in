$(document).ready(function() {
    var farming = {
        init: function() {
            this.dom();
            this.event();
        },
        dom: function() {
            $this = this;
            var $wrapper = $('.QA_section');
            $this.farming_name = $wrapper.find('.name');
            $this.farming_duration = $wrapper.find('.duration');
            $this.submit = $wrapper.find('.createBtn');
        },
        event: function() {
            $this.submit.on('click', this.create.bind(this));
        },
        create: function(e) {
            e.preventDefault();
            var data = {
                farming_name: this.farming_name.val(),
                farming_duration: this.farming_duration.val(),
            };
            $.ajax({
                type: 'POST',
                url: '/api/farmings',
                data: data,
                success: function(response) {
                    console.log(response);
                },
            });
        },
    };
    farming.init();
});