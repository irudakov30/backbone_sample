define("view/ItemCollectionView",
    ["view/ItemView",
        "text!view/ItemCollectionView.html"],

    function(ItemView, ItemCollectionViewHtml) {
        var ItemCollectionView = Backbone.View.extend({

            template: ItemCollectionViewHtml,

            initialize: function() {
                this.collection.bind("add", this.addOne, this);
                this.collection.bind("reset", this.addAll, this);
            },

            addOne: function(item) {
                var itemView = ItemView.create({
                    model: item,
                    attributes: this.attributes
                });
                this.$el.find("tbody").prepend(itemView.render().el);
            },

            addAll: function(items) {
                this.$el.empty();

                var size = items.length;
                for(var i= 0; i < size; i++) {
                    this.addOne(items.at(i));
                }
            },

            render: function() {
                this.$el.html(Mustache.render(this.template));
                return this;
            }

        });

        return {
            create: function(options) {
                return new ItemCollectionView(options);
            }
        }
    });