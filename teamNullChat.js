Messages = new Mongo.Collection("messages");
Links = new Mongo.Collection("links");

Router.route('/chat', function () {
  this.render('chat');
});

Router.route('/links', function () {
  this.render('links');
})

Router.route('/secure', function () {
  this.render('secure');
})

Router.route('/', function () {
  this.render('home');
})

Router.route('home', function () {
  this.render('home');
})


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

  Template.chat.helpers({
    messages: function(){
      return Messages.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.chat.events({
    'submit .new-message': function (event) {
      var text = event.target.messageContent.value;
      Messages.insert({
        messageText: text,
        createdAt: new Date()
      });
      event.target.messageContent.value = "";
      return false;
    }
  });

  Template.links.helpers({
    links: function () {
      return Links.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.links.events({
    'submit .new-link': function (event) {
      var url = event.target.linkURL.value;
      var desc = event.target.linkDescription.value;
      Links.insert({
        linkURL: url,
        linkDescription: desc,
        createdAt: new Date()
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    // removes everything when the server starts.
    // Get rid of this later.
    // Messages.remove({});
    // Links.remove({});
  });
}
