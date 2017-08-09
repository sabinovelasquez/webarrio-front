export default ngModule => {
  require('./philosophy.scss');

  ngModule.directive('phil', function phil() {
    return {
      template: require('./philosophy.jade'),
      scope: {},
      controllerAs: 'phil',
      controller: function philCtrl() {
        this.devicesBg = './img/devices.png';
        this.gp = './img/google-play-badge.png';
        this.as = './img/appstore.png';
      },
    };
  });
};
