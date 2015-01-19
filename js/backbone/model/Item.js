define("model/Item", 
       [], 
	   function() {
	   
	   var Item = Backbone.Model.extend({
	   		defaults: {
				price: function() {
					return Math.random();
				}
			}
	   });

	   return {
			create: function(options) {
				return new Item(options);
			},
			
			class: Item
	   }
})