var db = require("../models");
module.exports = function(app) {
  // Index route, renders index.handlebars
  app.get("/", function(req, res) {
    res.render("index", {});
  });
  // GET route for retrieving all cats
  app.get("/api/cats", function(req, res) {
    db.Cat.findAll({}).then(function(dbCat) {
      res.json(dbCat);
    });
  });
  // GET route for retrieving single cat
  app.get("/api/cats/:cat_name", function(req, res) {
    db.Cat.findOne({
      where: {
        cat_name: req.params.cat_name
      }
    }).then(function(dbCat) {
      res.json(dbCat);
    });
  });

  app.get("/api/cats/id/:id", function(req, res) {
    db.Cat.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbCat){
      res.json(dbCat);
    });
  });
  // POST route for saving new cat
  app.post("/api/cats", function(req, res) {
    console.log(req.body);
    db.Cat.create({
      cat_name: req.body.cat_name,
      hp: req.body.hp,
      atk: req.body.atk,
            def: req.body.def,
            model: req.body.model
    }).then(function(dbCat) {
      res.json(dbCat);
    });
  });
  // DELETE route for deleting cats
  app.delete("/api/cats/:cat_name", function(req, res) {
    db.Cat.destroy({
      where: {
        cat_name: req.params.cat_name
      }
    }).then(function(dbCat) {
      res.json(dbCat);
    });
  });
  // PUT route for updating cats
  app.put("/api/cats", function(req, res) {
      console.log(req.body);
    db.Cat.update(req.body, {
      where: {
        cat_name: req.body.cat_name
      }
    }).then(function(dbCat) {
      res.json(dbCat);
    });
  });
};
