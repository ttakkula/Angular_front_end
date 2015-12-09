main_module.controller('addPersonController',function($scope,friendDataFactory,Flash)
{
    console.log('addPersonController loaded');
    $scope.addPersonClicked = function(){
        $('#save').attr("disabled", true);
        var temp = {
            name:$scope.name,
            address:$scope.address,
            age:$scope.age,
            email:$scope.email
        }
        friendDataFactory.insertData(temp).then(function(response){
            var message = '<strong>Success!</strong> New person added to your friends list';
            Flash.create('success', message, 'custom-class');
            friendDataFactory.friendsArray.push(response.data);
            $scope.name = "";
            $scope.address = "";
            $scope.age = "";
            $scope.email = "";
            $('#save').attr("disabled", false);
            $location.path('/list').replace();
        },function(error){
            $('#save').attr("disabled", false);
            Flash.create('warning', 'Failed to add friend!', 'custom-class');
        });
    }
});