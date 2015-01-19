define("view/cart/ShoppingCartItemView",
    ["text!view/cart/ShoppingCartItemView.html"],

    function(ShoppingCartItemViewHtml) {

        var ShoppingCartItemView = Backbone.View.extend({
            template: ShoppingCartItemViewHtml,
            tagName: "tr",

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