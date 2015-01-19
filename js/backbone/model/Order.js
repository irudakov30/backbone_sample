define("model/Order",
    [],
    function() {

        var Order = Backbone.Model.extend({

            url: "order",

            initialize: function() {
            }
        });

        return {
            create: function(options) {
                return new Order(options);
            },

            class: Order
        }
    });