define("model/Item", 
       [], 
	   function() {
	   
	   var Item = Backbone.Model.extend({
	   
	   
	   });

	   return {
			create: function(options) {
				return new Item(options);
			},
			
			class: Item
	   }
})