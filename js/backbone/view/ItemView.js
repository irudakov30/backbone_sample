define("view/ItemView",
    ["text!view/ItemView.html"],
    function(ItemViewHtml) {

        var ItemView = Backbone.View.extend({

            template: ItemViewHtml,
            tagName: "tr",

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