export default ngModule => {
  require('./how.scss');

  ngModule.directive('how', function how() {
    return {
      template: require('./how.jade'),
      scope: {},
      controllerAs: 'how',
      controller: function howCtrl() {
        this.asam = '../core/img/icon-asam.png';
        this.admin = '../core/img/icon-admin.png';
        this.alert = '../core/img/icon-alert.png';
        this.com = '../core/img/icon-com.png';
      },
    };
  });
};
