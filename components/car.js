ko.components.register('carmodel', {
            
    viewModel: function(params) {
        $.extend(this, params);
    },
    template: { element: 'carTmp' }
 });
 