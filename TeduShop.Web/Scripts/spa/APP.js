/// <reference path="../plugins/angular/angular.js" />
var myApp = angular.module('myModule', []);
//myApp.controller("myController", myController);
myApp.controller("schoolController", schoolController); 
myApp.directive("TeduShopDirvective", teduShopDirvective);

myApp.service('Validator',Validator)
//myApp.controller("studentController", studentController);
//myApp.controller("teacherController", teacherController);
////declare
//function studentController($rootScope,$scope) {
//    //$rootScope.message = "this is my message from studentController";
//}
//function teacherController($scope) {
//     $scope.message = "this is my message from teacherController";
//}
// lớp cha (schoolController) khai báo  thì lớp con (teacherController,studentController) có thể được kế thừa và có thể overider được giống trong hướng đối tượng


schoolController.$inject = ['$scope', 'Validator']
function schoolController($scope,Validator) {
    // $scope.message = "this is my message from schoolController";
   // $scope.message = Validator.CheckNumber(2);
    $scope.checkNumber = function ()
    {
        $scope.message = Validator.CheckNumber(2);
    }
    $scope.num = 1;
}

function Validator($window)
{
    return {
        CheckNumber:CheckNumber
    }
    function CheckNumber(input)
    {
        if(input % 2 ==0)
        {
            // $window.alert('this is even ');
            return 'This is even';
        }
        else
            //$window.alert('this is odd ');
            return 'This is odd';
    }
}
function teduShopDirvective() {
    return {
        template: "<h1> This is my first </h1>"
    }
}