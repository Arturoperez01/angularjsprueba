/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/UserCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('UserService', ['$resource', '$rootScope', 'UserServiceCustom',
  function($resource, $rootScope, UserServiceCustom){
    return $resource( $rootScope.baseUrl + "/user/:_id", {_id:'@_id'}, $.extend({
        'changePassword': { 
        	url: $rootScope.baseUrl + '/user/:id/changePassword',
        	method: 'POST',
        	isArray: false,
        	params: {
        		 
        	}
        },
    	login : {
			url : $rootScope.baseUrl + '/login',
			method : "POST"
		},
		verifyToken : {
			url : $rootScope.baseUrl + '/verifyToken',
			method : "POST"
		},
		changePassword : {
			url : $rootScope.baseUrl + '/Users/:id/changePassword',
			params: {id:'@id'},
			method : "POST"
		},
		changePasswordProfile : {
			url : $rootScope.baseUrl + '/changePassword',
			method : "POST"
		}
    }, UserServiceCustom));
}]);