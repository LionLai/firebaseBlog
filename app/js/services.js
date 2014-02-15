'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
app.value('version', '0.1');
app.value('url', 'https://ngblog.firebaseio.com/blogs');

app.service('firebaseAuth', ['$rootScope', 'url', function($rootScope, url){
	var auth = {},
	    loginUser = null;

	auth.broadcastAuthEvent = function() {
	    $rootScope.$broadcast('authEvent');
	};

	var blogsRef = new Firebase(url);
	auth.client = new FirebaseSimpleLogin(blogsRef, function(error, user) {
	  if (error) {
	    alert(error)
	  } else if (user) {
	  	auth.user = user;
	  } else {
	  	auth.user = null;
	  }auth.broadcastAuthEvent();
	});

	auth.login = function(){
		auth.client.login('facebook', {
		  rememberMe: true
		})
	};

	auth.logout = function(){
		auth.client.logout();
	};

	return auth;
}]);