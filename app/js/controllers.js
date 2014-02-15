'use strict';

/* Controllers */

app.controller('blogCtrl', ['$scope', '$firebase','firebaseAuth', 'blogService', function($scope, $firebase, firebaseAuth, blogService) {
	$scope.auth = firebaseAuth;
	$scope.blogs = blogService.get;
	$scope.post = {};
	$scope.mode = 'read';

	$scope.reset = function(){
		$scope.mode = 'read';
		$scope.post = {
			title: '新的部落格喔',
			content: '我新增了一筆資料'
		};
	};

	$scope.add = function(){
		if(firebaseAuth.user){
			$scope.blogs.$add($scope.post)
		}else{
			alert('你沒有權限');
		}
	};

	$scope.modify = function(data){
		$scope.mode = 'modify';
		$scope.post = data;
	};

	$scope.confireChange = function(){
		$scope.blogs.$update();
	};

	$scope.del = function(data){
		$scope.blogs.$remove(data)
	};

	$scope.reset();
}])

.controller('LoginCtrl', ['$scope', 'firebaseAuth', function($scope, firebaseAuth) {
	$scope.auth = firebaseAuth;
}]);