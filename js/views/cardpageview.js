var app = app || {};

(function () {
app.cardpageview = Backbone.View.extend({
el:".store-display",
initialize:function() {
  this.listenTo(this.model, "change", this.render);
},
template:_.template($(".card-page-template").html()),
render:function () {
  this.$el.html(this.template(this.model.toJSON()));
}
});

}());
