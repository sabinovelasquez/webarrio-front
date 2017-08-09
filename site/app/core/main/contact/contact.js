export default ngModule => {
  require('./contact.scss');

  ngModule.directive('contact', function contact() {
    return {
      template: require('./contact.jade'),
      scope: {},
      controllerAs: 'contact',
      controller: function contactCtrl() {
        this.bgStyle = 'background-image:url("../img/bg-contact.png")';
        this.gp = '../img/google-play-badge.png';
        this.as = '../img/appstore.png';
      },
    };
  });
};
