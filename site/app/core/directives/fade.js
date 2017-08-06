export default ngModule => {
  ngModule.directive('fadeIn', () => {
    return {
      restrict: 'A',
      link: ($scope, $element) => {
        $element.addClass('ng-hide-remove');
        $element.on('load', () => {
          $element.addClass('ng-hide-add');
        });
      },
    };
  });
};
