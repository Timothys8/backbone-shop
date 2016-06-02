var app = app || {};

(function () {
app.cardmodel = Backbone.Model.extend({
  defaults:{
    imgLink:"images/Challenge_Cardback.jpg",
    cardName:"",
    cardText:"",
    flavorText:"",
    edition:""
  }
});

}())
