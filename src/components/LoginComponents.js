var loginComponent = function() {
  this.userName = element(by.model("vm.username"));
  this.password = element(by.model("vm.password"));
  this.submitbtn = element(by.name("submitButton"));

  this.userNameCP = element(by.css("[placeholder='YOUR USERNAME']"));
  this.passwordCP = element(by.css("[placeholder='YOUR PASSWORD']"));
  this.loginCP = element(by.css(".btn-primary"));
};
module.exports = new loginComponent();
