if (Meteor.isClient) {
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
}