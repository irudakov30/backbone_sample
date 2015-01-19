define("model/ShoppingCart",
    ["model/ItemCollection"],
    function(ItemCollection) {

    var ShoppingCart = Backbone.Model.extend({
        defaults: {
            items: ItemCollection.create(),

            totalPrice: function() {
                var totalPrice = 0;
                var items = this.items;
                var length = items.length;

                for(var i = 0; i < length; i++) {
                    totalPrice += items.at(i).get("price");
                }

                return totalPrice;
            }
        }
    });

    //Singleton
    return new ShoppingCart();
});