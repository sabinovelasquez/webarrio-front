export default ngModule => {
  require('./philosophy.scss');

  ngModule.directive('phil', function phil() {
    return {
      template: require('./philosophy.jade'),
      scope: {},
      controllerAs: 'phil',
      controller: function philCtrl() {
        this.devicesBg = '../core/img/devices.png';
        this.gp = '../core/img/google-play-badge.png';
        this.as = '../core/img/appstore.png';
      },
    };
  });
};
