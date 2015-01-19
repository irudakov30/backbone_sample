define("routes/ApplicationRoute", 
       ["view/search/GridItemsView",
		"view/cart/CartView",
		"view/order/OrderView"],
	   
function(GridItemsView,
		 CartView,
		 OrderView) {

	var ApplicationRoute = Backbone.Router.extend({
		routes: {
			"search": "search",
			"item/*id": "viewItem",
			"cart": "cart",
			"order": "order"
		},

		order: function() {
			var orderView = OrderView.create({
				el: $("#OrderView")
			});
			orderView.render();
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