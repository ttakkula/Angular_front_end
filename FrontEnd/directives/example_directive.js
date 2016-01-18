//Create new directive with name ofExample
main_module.directive('ofExample',function(){
    
    //Create empty object. We will fill it with needed information below.
    var directive = {};
    //First define how our directive can be used using the strict attribute possible values are:
    //'A' as attribute
    //'C' as class
    //'E' as element
    //'M' as comment
    //or combination of previous values like 'AE'
    directive.restrict = 'ACE';
    //Define the template code
    directive.templateUrl = "/FrontEnd/directives/content.html";
    
    //We must always return an object from directive!
    return directive;
})