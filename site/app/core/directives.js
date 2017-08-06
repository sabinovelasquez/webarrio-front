export default ngModule => {
  require('./directives/fade')(ngModule);
  require('./main/nav/nav')(ngModule);
  require('./main/header/header')(ngModule);
  require('./main/philosophy/philosophy')(ngModule);
  require('./main/how/how')(ngModule);
  require('./main/events/events')(ngModule);
  require('./main/contact/contact')(ngModule);
  require('./main/footer/footer')(ngModule);
};
