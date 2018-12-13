'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');
  // todoList Routes
  app.route('/hent')
    .get(controller.hent_data)
    .post(controller.opret_kunde);

    app.route('/hentdata').post(controller.hent_data_for_en);

};
