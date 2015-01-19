define("model/Item", 
       [], 
	   function() {
	   
	   var Item = Backbone.Model.extend({
	   		defaults: {
				price: 0
			},

		   initialize: function() {
			   this.set("price", Math.round(Math.random()  * (50 - 1) + 1));
		   }
	   });

	   return {
			create: function(options) {
				return new Item(options);
			},
			
			class: Item
	   }
});