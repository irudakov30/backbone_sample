define("view/cart/CartView",
    ["view/cart/ShoppingCartItemCollectionView",
     "view/cart/TotalPriceView",
     "text!view/cart/CartView.html"],

    function(ShoppingCartItemCollectionView,
             TotalPriceView,
             CartViewHtml) {

        var CartView = Backbone.View.extend({

            template: CartViewHtml,

            render: function() {
                this.$el.html(this.template);

                var shoppingCartItemCollectionView = ShoppingCartItemCollectionView.create({
                    el: this.$el.find(".ShoppingCartItemCollectionView")
                });
                shoppingCartItemCollectionView.render();

                var totalPriceView = TotalPriceView.create({
                    el: this.$el.find(".TotalPriceView")
                });
                totalPriceView.render();

                return this;
            }

        });

        return {
            create: function(options) {
                return new CartView(options);
            }
        }
    });