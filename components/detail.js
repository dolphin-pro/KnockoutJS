ko.components.register('detail', {
            
    viewModel: function(params) {
       var self=this;
       this.title = params.title;
       this.description=params.description;
       this.cars=params.cars;
       this.selected=params.selected;
       this.carImg=params.carImg;
       this.carName=params.carName;
       this.size=params.size;
       this.enable=params.enable;
       this.showCarEnable=params.showCarEnable;
       this.showCar=function(){
           self.showCarEnable(self.selected.length>0);
           self.carImg(self.selected[0].carImg);
           self.size(self.selected[0].size);
           self.carName(self.selected[0].carName);
       },
       this.disableAll=function(){
           console.log(111);
           self.enable(false); 
           cateVM.enable(false);
       }
    },
    template: { element: 'detailTmp' }
 });
 
 //keeps an eye on variable for any modification in data
 function detailViewModel() {
    this.title = ko.observable();
    this.description=ko.observable();
    this.cars=ko.observableArray([]);
    this.carImg = ko.observable();
    this.carName = ko.observable();
    this.size=ko.observable();
    this.enable=ko.observable(true);
    this.selected=ko.observableArray([]);
    this.showCarEnable=ko.observable(false);
 }
 
 var detailVM=new detailViewModel();
 ko.applyBindings(detailVM,document.getElementById('detail'));
 
 function attachDetailModel(info){
    detailVM.title(info.title);
    detailVM.description(info.description);
    detailVM.selected([]);
    detailVM.showCarEnable(false);
    detailVM.carImg('');
    detailVM.carName('');
    detailVM.size('');
    detailVM.enable(true);
    detailVM.cars(info.cars);
 }