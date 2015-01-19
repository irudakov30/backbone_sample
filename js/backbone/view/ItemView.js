define("view/ItemView",
        ["model/ShoppingCart",
            "text!view/ItemView.html"],
    function(ShoppingCart, ItemViewHtml) {

        var ItemView = Backbone.View.extend({

            template: ItemViewHtml,
            tagName: "tr",

            events: {
                "click .cartAddButton": "cartAdd"
            },

            cartAdd: function() {
                ShoppingCart.get("items").add(this.model);
            },

            render: function() {
                var output = Mustache.render(this.template, this.model.toJSON());
                this.$el.html(output);
                return this;
            }
        });

        return {
            create: function(options) {
                return new ItemView(options);
            }
        }
});