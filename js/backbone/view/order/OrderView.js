define("view/order/OrderView",
    ["text!view/order/OrderView.html"],

    function(OrderViewHtml) {

        var OrderView = Backbone.View.extend({

            template: OrderViewHtml,

            render: function() {
                this.$el.html(this.template);
                this.$el.find('.modal').modal();
                return this;
            }

        });

        return {
            create: function(options) {
                return new OrderView(options);
            }
        }
    });