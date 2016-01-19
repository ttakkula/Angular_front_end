main_module.directive('ttNavbar',function(){
    var directive = {};
    
    directive.restrict = 'ACE';
        directive.scope = {
        //Text binding
        servicename:'@sname'
        }
        
    directive.templateUrl = "/navbar.html";
    
    directive.controller = function($scope){
        console.log('navbar directive controller activated');
        $scope.servicename = "Kaveriappi";
    }
    
    //We must always return an object from directive!
    return directive;
});