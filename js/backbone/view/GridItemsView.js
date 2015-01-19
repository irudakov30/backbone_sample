define("view/GridItemsView", 
		["model/ItemCollection",
			"view/ItemCollectionView"],

function(ItemCollection, ItemCollectionView) {
	var GridItemsView = Backbone.View.extend({
	
		render: function() {
			var itemCollection = ItemCollection.create();

			var itemCollectionView = ItemCollectionView.create({
				el: this.el,
				collection: itemCollection
			});

			itemCollectionView.render();

			itemCollection.fetch();
			return this;
		}

	});
	
	return {
		create: function(options) {
			return new GridItemsView(options);
		}
	}
});