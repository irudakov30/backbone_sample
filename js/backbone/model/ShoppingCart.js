define("model/ShoppingCart",
    ["model/ItemCollection"],
    function(ItemCollection) {

    var ShoppingCart = Backbone.Model.extend({
        defaults: {
            items: ItemCollection.create()
        }
    });

    //Singleton
    return new ShoppingCart();
});