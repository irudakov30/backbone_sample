define("view/order/OrderFormView",
    ["model/Order",
        "model/ShoppingCart",
        "text!view/order/OrderFormView.html"],

    function(Order,
             ShoppingCart,
             OrderFormViewHtml) {

        var OrderView = Backbone.View.extend({

            template: OrderFormViewHtml,

            events: {
                "click .submitButton": "order"
            },

            initialize: function() {
                this.model = Order.create();
                this.modelBinder = new Backbone.ModelBinder();
            },

            order: function(e) {
                e.preventDefault();

                this.model.set("items", ShoppingCart.get("items"));
                //this.model.save();
                this.model.clear();
                ShoppingCart.get("items").reset();

                return false;
            },

            render: function() {
                this.$el.html(this.template);
                this.modelBinder.bind(this.model, this.el);
                return this;
            }

        });

        return {
            create: function(options) {
                return new OrderView(options);
            }
        }
    });