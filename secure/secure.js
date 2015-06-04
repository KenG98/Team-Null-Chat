if (Meteor.isClient) {
  Session.set("secureAccess", false);

  Template.secure.helpers({
    secureAccess: function () {
      return Session.get("secureAccess");
    }
  });

  Template.secure.events({
    'submit .enter-password': function (event) {
      var entered = event.target.enteredPass.value;
      if(entered == "teamnull"){
        Session.set("secureAccess", true);
      }
      event.target.enteredPass.value = "";
      return false;
    }
  });
}