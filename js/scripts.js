//create a namespace = a term for an object that contains all your code. By default you are in a global namespace.
var app = app || {};
//if the "app" namespace exists keep using it, otherwise create a plain object namespace.
//IIFE immediately invoked function expression.
(function () {
app.router = new app.Router();
Backbone.history.start ();
  }())
