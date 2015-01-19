define("Application",
       ["routes/ApplicationRoute",
           "view/SideBarView"],

function(ApplicationRoute,
         SideBarView) {

    var Application = Backbone.View.extend({        
        initialize: function() {
            var sideBarView = SideBarView.create({
                el: $("#SideBarView")
            });

            sideBarView.render();

			ApplicationRoute.create();
			Backbone.history.start();						
        }
    });


    return {create: function() {
        return new Application();
    }};
});