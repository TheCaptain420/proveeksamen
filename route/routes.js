'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');

  // todoList Routes
  app.route('/hent')
    .get(controller.hent_data)
    //.post(controller.create_a_task);



};