define("view/GridItemsView", 
["model/ItemCollection"], 

function(ItemCollection) {
	var GridItemsView = Backbone.View.extend({
	
		initialize: function() {
			var itemCollection = ItemCollection.create();
			itemCollection.fetch();
		}
		
	});
	
	return {
		create: function(options) {
			return new GridItemsView(options);
		}
	}
})