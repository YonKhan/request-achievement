var app = angular.module('achievement',[]);	var data = {};	$.getJSON('https://eu.api.battle.net/wow/data/character/achievements?locale=fr_FR&apikey=xyzcvd8sfjx5sketq27e8ttsvdbnttgm', function(dataJSON) {			data = dataJSON;			$("#loader").hide();	});app.controller('achievementController',function($scope){	$scope.seekAchievement = function(){		if (_.isUndefined(data) ||_.isUndefined($scope.someVal)) {			return;		}		var valueSearch = $scope.someVal.toLowerCase();		$scope.resultsAchievements = [];		_.each(data.achievements, function(results) {				checkIsAchievement(results);			_.each(results.categories, function(results) {					checkIsAchievement(results);	  	});			function checkIsAchievement(results) {				_.each(results.achievements, function(results) {					var title 		  = results.title.toLowerCase();					var description = results.description.toLowerCase();					if(_.isUndefined(results) && _.isUndefined(title)) {						return;			    }					if (title.indexOf(valueSearch) >= 0 || description.indexOf(valueSearch) >= 0) {			    		$scope.resultsAchievements.push(results);			    }				});			}		});	}});