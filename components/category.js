ko.components.register('category', {
            
   viewModel: function(params) {
      var self=this;
      this.cates = params.cates;
      this.activeId=params.activeId;
      this.enable=params.enable;
      self.showDetail=function(item){
         self.activeId(item.cars_ID);
         $.getJSON('json/carsDetail/'+item.brand+'.json', function(resp) {
            attachDetailModel(resp);
        });
      }
   },
   template: { element: 'cateTmp' }
});

//keeps an eye on variable for any modification in data
function cateViewModel() {
   this.cates = ko.observableArray([]);
   this.activeId=ko.observable();
   this.enable=ko.observable(true);
}

var cateVM=new cateViewModel();
ko.applyBindings(cateVM,document.getElementById('category'));

function attachCateModel(cates){
   cateVM.cates(cates);
   cateVM.enable(true);
}