'use strict';

/* Controllers */

app.controller('blogCtrl', ['$scope', '$firebase','firebaseAuth', 'url', function($scope, $firebase, firebaseAuth, url) {
	var ref = new Firebase(url);
	$scope.blogs = $firebase(ref);
	$scope.add = function () {
		if(firebaseAuth.user){
			$scope.blogs.$add({
				title: '新的部落格喔',
				content: '我新增了一筆資料'
			});
		}else{
			alert('你沒有權限');
		}
	};
}])

.controller('LoginCtrl', ['$scope', 'firebaseAuth', 'url', function($scope, firebaseAuth, url) {
	$scope.login = function(){
		firebaseAuth.login();
	};

	$scope.logout = function(){
		firebaseAuth.logout();
	};

	$scope.isLoggedIn = function() {
    	return !!$scope.user;   
	};

	// src: Alex Vanston (https://coderwall.com/p/ngisma)
	$scope.safeApply = function(fn) {
	    var phase = this.$root.$$phase;
	    if (phase == '$apply' || phase == '$digest') {
	        if(fn && (typeof(fn) === 'function')) {
	            fn();
	        }
	    } else {
	        this.$apply(fn);
	    }
	};

	$scope.$on('authEvent', function() {
	    $scope.safeApply(function() {
	        $scope.user = firebaseAuth.user;
	    });
	});
}]);