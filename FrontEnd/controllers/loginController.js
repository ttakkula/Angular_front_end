//This is the way you define controllers the main_module variable is defined in mainModule.js file (located in module folder)
//The first argument is the name of the controller. THIS IS IMPORTANT, because you use THIS name when you want to use this controller in some view
//The $scope object is the glue between the view and controller. You use this object to transfer data between the view and controller.
main_module.controller('controllerLogin',function($scope,loginFactory,$location,Flash){
      //var user = $scope.user;
      //$scope.pass = "kissa123";
    
    //This is called when login button is pressed in partial_login.html
        $scope.loginClicked = function(){
            console.log('login was pressed');
            var temp = {
                username:$scope.user,
                password:$scope.pass
            }
            
            var waitPromise = loginFactory.startLogin(temp);
            //Wait for the response from server
            waitPromise.then(function(data){
                //Store jsonwebtoken
                console.log(data.secret);
                sessionStorage['token'] = data.secret;
                console.log('Success!');
                $location.path('/list');
               // code inside this block will be called when success response from server comes
            }, function error(data) {
                console.log('Fail');
                var message = '<strong>Oops!</strong> Wrong username or password!';
                Flash.create('danger', message, 'custom-class');                
            });
            
        }
        
    //This is called when register button is pressed in partial_login.html
        $scope.registerClicked = function(){
            console.log('register was pressed');
            var temp = {
                username:$scope.user,
                password:$scope.pass
            }
            
            var response = loginFactory.startRegister(temp);
            //Wait for the response from server
            response.then(function success(data){
                console.log('Success!');
                var message = '<strong>Success!</strong> New user added to Friends app!';
                Flash.create('success', message, 'custom-class');
                // First argument (success) is the type of the flash alert
                // Second argument (message) is the message displays in the flash alert
                // You can include html as message (not just text)
                // Third argument (custom-class) is the custom class for the perticular flash alert
               // code inside this block will be called when success response from server comes
            }, function error(data) {
                console.log('Fail');
                var message = '<strong>OOPS!</strong> Registering failed! Please check both fields and try again.';
                Flash.create('danger', message, 'custom-class');
            });
                        
        }
});