export default ngModule => {
  require('./how.scss');

  ngModule.directive('how', function how() {
    return {
      template: require('./how.jade'),
      scope: {},
      controllerAs: 'how',
      controller: function howCtrl() {
        this.asam = './img/icon-asam.png';
        this.admin = './img/icon-admin.png';
        this.alert = './img/icon-alert.png';
        this.com = './img/icon-com.png';
      },
    };
  });
};
