define("Application",
       ["routes/ApplicationRoute"],

function(ApplicationRoute) {

    var Application = Backbone.View.extend({        
        initialize: function() {
			ApplicationRoute.create();
			Backbone.history.start();						
        }
    });


    return {create: function() {
        return new Application();
    }};
});