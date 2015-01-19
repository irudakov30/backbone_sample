define("routes/ApplicationRoute", 
       ["view/GridItemsView"],
	   
function(GridItemsView) {
	var ApplicationRoute = Backbone.Router.extend({
		routes: {
			"search": "search",
			"item/*id": "viewItem"
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