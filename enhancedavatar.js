 var appModule = angular.module('enhancedavatar', []);
   appModule.directive('enhancedavatar', ["avatarService","$timeout", function (avatarService,$timeout) {
   var rus = function ($scope) {
   		$scope.getHalf=function(value){
   			if(value)
   			return (parseFloat(value)/2)+(value.replace(/\d+\.?\d*/,""));
   		}; 
   		$scope.getOneFifth=function(value){
   			if(value)
   			return (parseFloat(value)/5)+(value.replace(/\d+\.?\d*/,""));
   		};
  		$timeout(function(){
  			if(!$scope.width){
  				$scope.width='38px';
  			}
  			if(!$scope.height){
  				$scope.height='38px';
  			}
    		$scope.ImageAvailable = false;
    		if (!$scope.img) {
    			$scope.GenericAvatar = avatarService.getAvatar($scope.name);
    		} else {
    			console.log($scope.img)
    			$scope.ImageAvailable = true;
    			console.log("imageeeeeeeavvvvvvvvvvail")
    		}
  		},10);
  	};
	return {
		restrict: 'EAC',
		scope: {
			name: '@', 
			img:'@',
			width:'@',
			height:'@'
		},
		template: '<div class="generic-avatar" style="width:{{width}};height:{{height}};">'+
		'<a class="color" data-ng-if="!ImageAvailable" style="height:{{height}};border-radius:{{width}};background-color:{{GenericAvatar.Background}}"></a>'+
		'<a class="name" style="min-width:{{width}};top:{{getOneFifth(height)}};font-size:{{getHalf(height)}}">{{GenericAvatar.Initials}}</a>' +
		'<a class="img" data-ng-if="ImageAvailable" style="width:{{width}};height:{{height}};border-radius:{{width}};background-image:url({{img}});"></a>' +
		'</div>',
		controller: rus,
    bindToController: true,
	};
}])
.factory("avatarService", function(){
    var avatarService = function(name){
      var colorCodes = {
				1: "#F29691",
				2: "#92D6C2",
				3: "#CFD696",
				4: "#FACA82",
				5: "#D7ADE0"
			};
			var i1 = "", i2 = "", nameArray = [];
			if (angular.isDefined(name.charAt(0))) {
				i1 = angular.uppercase(name.charAt(0));
				nameArray = name.split(" ");
				if (nameArray.length >= 2) {
					i2 = angular.uppercase(nameArray[nameArray.length - 1].charAt(0));
				}
			} else {
				i1 = "U";
				i2="";
			}
			var initials = i1+i2;  
			console.log(i1,i2);
			var charCode = initials.charCodeAt(0) + initials.charCodeAt(1);
			charCode = charCode >= 130 && charCode <= 144 ? 1 : charCode >= 145 && charCode <= 158 ? 2 : charCode > 158 && charCode <= 172 ? 3 : charCode >= 173 && charCode <= 186 ? 4 : 5;
			var background = colorCodes[charCode];
			return ({ "Initials": initials, "Background": background });
    } 
    return {
      getAvatar: avatarService
    }
});