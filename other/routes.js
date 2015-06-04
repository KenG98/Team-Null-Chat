Router.route('/chat', function () {
  this.render('chat');
});

Router.route('/links', function () {
  this.render('links');
})

Router.route('/secure', function () {
  this.render('secure');
})

Router.route('/paramtesting', function () {
  var param = this.params.query.parameter;
  this.render('paramtesting',{data:{
    parameter: param}
  });
});

Router.route('/', function () {
  this.render('home');
})

Router.route('/home', function () {
  this.render('home');
})