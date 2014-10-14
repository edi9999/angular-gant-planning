angular.module('gantPlanning',[])
.directive('gantPlanning',function () {
    return{
        link:link
    };
    function link(scope, element, attrs) {
        var planning=gantplanning
            .createPlanning()
            .fill([
                {"description":"First Phase","start":0,"end":2},
                {"description":"Second Phase","start":3,"end":6}
            ])
            .attachTo(element[0])
            .draw();
    }
});
