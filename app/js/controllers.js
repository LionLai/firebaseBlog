'use strict';

/* Controllers */

app.controller('blogCtrl', ['$scope', '$firebase','firebaseAuth', 'blogService', function($scope, $firebase, firebaseAuth, blogService) {
	$scope.auth = firebaseAuth;
	$scope.blogs = blogService;
	$scope.post = {};

	$scope.reset = function(){
		$scope.post = {
			title: '',
			content: ''
		};
	};

	$scope.add = function(){
		if(firebaseAuth.user){
			$scope.blogs.$add($scope.post)
		}else{
			alert('你沒有權限');
		}
	};

	$scope.del = function(data){
		var index = $scope.blogs.$getIndex(data);
		var child = $scope.blogs.$child(index[0]);

		child.$remove();
	};

	$scope.reset();
}])

.controller('LoginCtrl', ['$scope', 'firebaseAuth', function($scope, firebaseAuth) {
	$scope.auth = firebaseAuth;
}]);