//js/todoList.js
'use strict';

/****Déclaration de l'appli demoApp ***/

var demoApp = angular.module('demoApp', [
	//Dépendance du "module"
	'todoList']);

var todoList = angular.module('todoList', []);

/* Controller de l'appli */
todoList.controller('todoCtrl', ['$scope',
	function($scope){
		//Pour manipuler les todos au sein du controller, on initialise les todos avec un tableau vide
		var todos = $scope.todos = [];


		//Ajouter un todo

		$scope.addTodo = function() {
			var newTodo = $scope.newTodo.trim();

		//.trim réduit les espaces inutiles au début et à la fin d'une chaine de caractères

			if(!newTodo.length){
				return;
			}
			todos.push({
				title: newTodo,
				completed: false
			});

				$scope.newTodo = '';
			};

		//Supprimer un todo
		$scope.removeTodo = function(todo){
			todos.splice(todos.indexOf(todo), 1);
		};
		//Cocher Décocher
		$scope.markAll = function(completed){
			todos.forEach(function(todo){
				todo.completed = !completed;
			});
		};

		//Enlever les cases cochées
		$scope.clearCompletedTodos = function(){
			$scope.todos = todos = todos.filter(function(todo){
				return !todo.completed;
			});
		};
	}
]);