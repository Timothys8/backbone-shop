var app = app || {};

(function () {
  app.Router = Backbone.Router.extend({
    routes:{
      "":"home",
      "card-page/:name":"displayCardPage"
    },
    home:function () {
      app.catalogueView = new app.catalogueview();
      app.catalogueView.render ();

      if (app.cards) {
      app.catalogueView.renderSearchedCards(app.cards)
      }
    },
    displayCardPage:function(name){
      var cardModel = new app.cardmodel();
      var cardPageView = new app.cardpageview({
        model:cardModel
      });
      cardPageView.render();

      $.get("https://api.deckbrew.com/mtg/cards/" + name).then(function(cardInfo){
        cardModel.set({
          cardName:cardInfo.name,
          cardId:cardInfo.id,
          imgLink: cardInfo.editions[0].image_url,
          flavorText:cardInfo.editions[0].flavor,
          edition: cardInfo.editions[0].set,
          cardText:cardInfo.text
        });


      },function(err){});
    }
  });
}());
