define("model/ItemCollection", 
		["model/Item"], 

function(Item) {

	var ItemCollection = Backbone.Collection.extend({
		url: 'https://www.googleapis.com/freebase/v1/mqlread?query=[{"id":null,"name": null,"type": "/film/film" }]&key=AIzaSyBanBbNWm65nNJtMCGMFO9UjrpWLJ3MP7Y',
        model: Item.class,
		parse: function(resp, xhr) {			
			return resp.result;
		}
	});
	
	return {
		create: function(options) {
			return new ItemCollection(options);
		}
	}
})

