define("view/SideBarView",
    ["model/ShoppingCart",
        "text!view/SideBarView.html"],
    function(ShoppingCart, SideBarViewHtml) {

        var SideBarView = Backbone.View.extend({

            template: SideBarViewHtml,

            render: function() {
                var output = Mustache.render(this.template, ShoppingCart.toJSON());
                this.$el.html(output);
                return this;
            }
        });

        return {
            create: function(options) {
                return new SideBarView(options);
            }
        }
    });