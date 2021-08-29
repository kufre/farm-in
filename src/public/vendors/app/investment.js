$(document).ready(function() {
    var farming = {
        init: function() {
            this.dom();
            this.event();
        },
        dom: function() {
            $this = this;
            var $wrapper = $('.QA_section');
            $this.farming = $wrapper.find('.farming');
            $this.season = $wrapper.find('.season');
            $this.price = $wrapper.find('.price');
            $this.avaliable = $wrapper.find('.av_unit');
            $this.percentage = $wrapper.find('.percentage');
            $this.location = $wrapper.find('.location');
            $this.category = $wrapper.find('.category');
            $this.start_date = $wrapper.find('.start');
            $this.submit = $wrapper.find('.createBtn');
        },
        event: function() {
            $this.submit.on('click', this.create.bind(this));
        },
        create: function(e) {
            e.preventDefault();
            var data = {
                farming_id: this.farming.val(),
                category: this.category.val(),
                location: this.location.val(),
                season: this.season.val(),
                duration: this.duration.val(),
                unit_avaliable: this.avaliable.val(),
                percentage: this.percentage.val(),
                start_date: this.start_date.val(),
            };
            $.ajax({
                type: 'POST',
                url: '/api/investments',
                data: data,
                success: function(response) {
                    console.log(response);
                },
            });
        },
    };
    farming.init();
});