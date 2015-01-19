define("view/order/OrderView",
    ["view/order/OrderFormView",
     "text!view/order/OrderView.html"],

    function(OrderFormView,
             OrderViewHtml) {

        var OrderView = Backbone.View.extend({

            template: OrderViewHtml,

            render: function() {
                this.$el.html(this.template);
                var orderFormView = OrderFormView.create({
                    el: this.$el.find(".OrderFormView")
                });

                orderFormView.render();
                return this;
            }

        });

        return {
            create: function(options) {
                return new OrderView(options);
            }
        }
    });