var angularPractice = angular.module('angularPractice', []);


angularPractice.controller('PracticeController', ['$scope', function($scope){
    $scope.message = "Wow";
    $scope.tasks = ['01', '02', '03'];

}]);
