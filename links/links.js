if (Meteor.isClient) {
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