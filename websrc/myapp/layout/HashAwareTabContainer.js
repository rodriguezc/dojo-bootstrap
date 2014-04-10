define(["dojo/_base/declare", "dijit/layout/TabContainer","dojo/hash", "dojo/topic", "dojo/io-query",
        "dijit/layout/ContentPane","dojo/_base/array"
    ],
    function(declare, TabContainer, hash, topic, ioQuery, ContentPane, array){
    return declare(TabContainer, {
        postCreate: function(){
            this.inherited(arguments);



            //Store value of the hash when this tabContainer was created
            this.baseHash= hash();
            var widget = this;


            //Update hash when selected tab change
            this.watch("selectedChildWidget", function(name, oval, nval){
                var hashObj = ioQuery.queryToObject(widget.baseHash);
                if(Object.keys(hashObj).length == 0) {
                    hash(this.hashParamName+"="+nval.title);
                }  else {
                    hash(this.baseHash+"&"+this.hashParamName+"="+nval.title);
                }
             });

            //Watch hash change
            this.hashChangeHandle =  topic.subscribe("/dojo/hashchange", function (changedHash) {
                //is part of the new hash same as when this widget was created
                var sameBaseHash =changedHash.indexOf(widget.baseHash) != -1;



                var hashObj = ioQuery.queryToObject(changedHash);
                var paramValue = hashObj[widget.hashParamName];

                if (sameBaseHash && paramValue != undefined && paramValue != null) {
                    var found = false;
                    array.forEach(widget.getChildren(), function (item, index) {
                        //C'est la même ligne
                        if (item.title == paramValue) {
                            found = true;
                            //!already selected?
                            if(item != widget.selectedChildWidget) {
                                widget.selectChild(item);  //Sélection du tab déjà ouvert
                            }
                        }
                    });


                    if (!found) {
                        var cp1 = new ContentPane({
                            title: paramValue,
                            closable: true,
                            onClose: function () {
                                //Closing the last widget
                                if (widget.getChildren().length == 1) {
                                    hash(widget.baseHash);
                                }
                                return true;
                            }
                        });
                        //TODO: Cause error on IE8
                        widget.addChild(cp1);

                        var content = widget.generateTabWidgetContent(paramValue);
                        content.placeAt(cp1);
                        widget.selectChild(cp1);  //Sélection du tab déjà ouvert
                    }

                }

            });

        },
        destroy: function() {
            this.inherited(arguments);
            this.hashChangeHandle.remove();
        }
    });
});