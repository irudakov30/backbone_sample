define("view/cart/TotalPriceView",
    ["model/ShoppingCart",
     "text!view/cart/TotalPriceView.html"],

    function(ShoppingCart,
             TotalPriceViewHtml) {

        var TotalPriceView = Backbone.View.extend({

            template: TotalPriceViewHtml,

            render: function() {
                var output = Mustache.render(this.template, ShoppingCart.toJSON());
                this.$el.html(output);
                return this;
            }
        });

        return {
            create: function(options) {
                return new TotalPriceView(options);
            }
        }
    });