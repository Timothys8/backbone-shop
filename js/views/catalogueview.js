var app = app || {};

(function () {
  app.catalogueview = Backbone.View.extend({
    el:".store-display",
    template:_.template('<h1>Store</h1> <input type="text" placeholder="look for cards..." class="card-search"> <div class="product-display"></div>'),
    events:{
      "keydown .card-search":"cardSearch"
    },
    cardSearch:function (event) {
      if(event.keyCode === 13){
        $.ajax({
          method:"GET",
          url: "https://api.deckbrew.com/mtg/cards/typeahead?q=" + $(".card-search").val()
        }).then(function(serverData){
          console.log(serverData);
          //successfully queried server
          var cardContainer = $("<div>");
          app.cards = new app.Cards();

          for (var i = 0; i < serverData.length; i++) {
            var cardModel = new app.cardmodel({
              cardId:serverData[i].id,
              imgLink:serverData[i].editions[0].image_url,
              cardText:serverData[i].text,
              flavorText:serverData[i].editions[0].flavor,
              edition:serverData[i].editions[0]
            });
            app.cards.add(cardModel);
            var cardItemView = new app.carditemview({
              model:cardModel
            });
            cardContainer.append(cardItemView.render().$el);
          }

          $(".product-display").html(cardContainer);
        },function(error){
          //unsuccessful server query
        });
      }
    },
    renderSearchedCards:function(cards) {
      var $cardContainer = $("<div>");
      cards.each(function(card) {
        var cardItemView = new app.carditemview({
          model:card
        });
        $cardContainer.append(cardItemView.render().$el)
      });
      this.$(".product-display").html($cardContainer);
    },
    render:function(){
      this.$el.html(this.template());
    }
  });
}())
