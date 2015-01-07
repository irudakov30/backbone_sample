define("routes/ApplicationRoute", 
       ["view/GridItemsView"], 
	   
function(GridItemsView) {
	var ApplicationRoute = Backbone.Router.extend({
		routes: {
			"search": "search",
			"item/:id": "viewItem"
		},
		
		search: function() {
			GridItemsView.create();
		},
		
		viewItem: function() {
			alert("viewItem");
		}
	});
	
	return {
		create: function(options) {
			return new ApplicationRoute(options);
		}
	}
})