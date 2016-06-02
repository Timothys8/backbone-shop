/*this view renders an individual card item in the catalogue view*/

var app = app || {};

(function () {
  //on render, create a brand new card image
  app.carditemview = Backbone.View.extend({
    initialize:function(){
      this.listenTo(this.model,"change",this.render);
    },
    tagName:"img",
    attributes:{
      class:"card-item"
    },
    events:{
      "click":"renderCardPage"
    },
    renderCardPage:function(){
      var cardPage = new app.cardpageview({
        model:this.model
      });
      cardPage.render();
      app.router.navigate("card-page/" + this.model.get("cardId"))
    },
    render:function(){
      this.$el.attr("src",this.model.get("imgLink"));
      return this;
    }
  });

}())
