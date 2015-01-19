define("view/cart/CartView",
    ["view/cart/ShoppingCartItemCollectionView"],

    function(ShoppingCartItemCollectionView) {

        var CartView = Backbone.View.extend({

            render: function() {
                var shoppingCartItemCollectionView = ShoppingCartItemCollectionView.create({
                    el: this.el
                });
                shoppingCartItemCollectionView.render();
                return this;
            }

        });

        return {
            create: function(options) {
                return new CartView(options);
            }
        }
    });