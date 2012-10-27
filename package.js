Package.describe({
  summary: "Provide an overall hook object for Meteor."
});

Package.on_use(function (api) {
  api.add_files('hooks.js', ['client', 'server']);
});

Package.on_test(function (api) {

});
