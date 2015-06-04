if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    // removes everything when the server starts.
    // Get rid of this later.
    // Messages.remove({});
    // Links.remove({});
  });
}
