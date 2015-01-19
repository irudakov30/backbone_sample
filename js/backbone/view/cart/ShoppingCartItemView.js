define("view/cart/ShoppingCartItemView",
    ["model/ShoppingCart",
     "text!view/cart/ShoppingCartItemView.html"],

    function(ShoppingCart,
             ShoppingCartItemViewHtml) {

        var ShoppingCartItemView = Backbone.View.extend({
            template: ShoppingCartItemViewHtml,
            tagName: "tr",

            events: {
                "click .cartRemoveButton": "cartRemove"
            },

            cartRemove: function() {
                ShoppingCart.get("items").remove(this.model);
                this.remove();
            },

            render: function() {
                var output = Mustache.render(this.template, this.model.toJSON());
                this.$el.html(output);
                return this;
            }
        });

        return {
            create: function(options) {
                return new ShoppingCartItemView(options);
            }
        }
    });