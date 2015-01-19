define("view/cart/ShoppingCartItemCollectionView",
    ["model/ShoppingCart",
     "view/cart/ShoppingCartItemView",
     "text!view/cart/ShoppingCartItemCollectionView.html"],

    function(ShoppingCart,
             ShoppingCartItemView,
             ShoppingCartItemCollectionViewHtml) {

        var ShoppingCartItemCollectionView = Backbone.View.extend({
            template: ShoppingCartItemCollectionViewHtml,

            addOne: function(item) {
                var itemView = ShoppingCartItemView.create({
                    model: item,
                    attributes: this.attributes
                });
                this.$el.find("tbody").prepend(itemView.render().el);
            },

            addAll: function(items) {
                var size = items.length;
                for(var i= 0; i < size; i++) {
                    this.addOne(items.at(i));
                }
            },

            render: function() {
                this.$el.html(Mustache.render(this.template));
                this.addAll(ShoppingCart.get("items"));
                return this;
            }
        });

        return {
            create: function(options) {
                return new ShoppingCartItemCollectionView(options);
            }
        }
});