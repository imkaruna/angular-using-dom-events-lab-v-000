function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function ($scope) {
			this.count = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, element, attr, ctrl ) {
				element.on('click', function () {
					ctrl.count+=1;
 					scope.$apply();
			});

			scope.$on('$destroy', function () {
				 element.off();
			});
    },
	}
}

angular
	.module('app')
	.directive('counter', Counter);
