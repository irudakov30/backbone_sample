define("routes/ApplicationRoute", 
       ["view/GridItemsView",
		"view/cart/CartView"],
	   
function(GridItemsView,
		 CartView) {

	var ApplicationRoute = Backbone.Router.extend({
		routes: {
			"search": "search",
			"item/*id": "viewItem",
			"cart": "cart"
		},

		cart: function() {
			var cartView = CartView.create({
				el: $("#RightSide")
			});
			cartView.render();
		},
		
		search: function() {
			var gridItemsView = GridItemsView.create({
				el: $("#RightSide")
			});
			gridItemsView.render();
		},
		
		viewItem: function(itemId) {
			alert(itemId);
		}
	});
	
	return {
		create: function(options) {
			return new ApplicationRoute(options);
		}
	}
})