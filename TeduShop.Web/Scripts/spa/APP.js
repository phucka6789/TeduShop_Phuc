/// <reference path="../plugins/angular/angular.js" />
var myApp = angular.module('myModule', []);
//myApp.controller("myController", myController);

myApp.controller("studentController", studentController);
myApp.controller("teacherController", teacherController);

myApp.controller("schoolController", schoolController);

//declare
function studentController($rootScope,$scope) {
    //$rootScope.message = "this is my message from studentController";
}
function teacherController($scope) {
     $scope.message = "this is my message from teacherController";
}

function schoolController($scope) {
    $scope.message = "this is my message from schoolController";
}
// lớp cha (schoolController) khai báo  thì lớp con (teacherController,studentController) có thể được kế thừa và có thể overider được giống trong hướng đối tượng