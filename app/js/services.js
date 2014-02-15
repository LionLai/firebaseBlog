'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
app.value('version', '0.1');
app.value('url', 'https://popping-fire-7709.firebaseio.com/blogs');

app.service('firebaseAuth', ['$rootScope', 'url', '$firebaseSimpleLogin', function($rootScope, url, $firebaseSimpleLogin){
	var blogsRef = new Firebase(url);
	var auth = $firebaseSimpleLogin(blogsRef);
	return auth;
}]);

app.service('blogService', ['$firebase', 'firebaseAuth', 'url', function($firebase, firebaseAuth, url){
	var ref = new Firebase(url);
	return $firebase(ref);;
}]);