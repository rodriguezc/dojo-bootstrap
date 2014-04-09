define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/IndexWidget.html",
    "dijit/MenuBar",
    "dijit/DropDownMenu",
    "dijit/PopupMenuBarItem",
    "dijit/MenuItem",
    "dijit/layout/ContentPane",
    "dojo/hash",
    "dojo/topic",
    "dojo/io-query",
    "dojo/_base/array"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin,
             template, MenuBar, DropDownMenu, PopupMenuBarItem, MenuItem, ContentPane, hash, topic, ioQuery, array) {
    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            var indexWidget = this;
            topic.subscribe("/dojo/hashchange", function(changedHash){
                if(changedHash != undefined && changedHash != "") {
                    var hashObj = ioQuery.queryToObject(changedHash);
                    var page = hashObj.page;
                    var found = false;
                    array.forEach(indexWidget.centerTabContainer.getChildren(), function(item, index) {
                        //C'est la même ligne
                        if(item.title == page) {
                            found = true;
                            indexWidget.centerTabContainer.selectChild(item);  //Sélection du tab déjà ouvert
                        }
                    });
                    if(!found) {
                        var cp1 = new ContentPane({
                            title: page,
                            closable: true,
                            onClose: function(){
                                if(indexWidget.centerTabContainer.getChildren().length == 1) {
                                    hash("");
                                }
                                return true;
                            }
                        });
                        indexWidget.centerTabContainer.addChild(cp1);
                    }
                    indexWidget.centerTabContainer.selectChild(cp1);  //Sélection du tab déjà ouvert
                }
            });
            var pMenuBar = new MenuBar({});
            pMenuBar.placeAt(this.navMenuNode);
            pMenuBar.startup();
            var pSubMenu = new DropDownMenu({});
            pMenuBar.addChild(new PopupMenuBarItem({
                label: "Start",
                popup: pSubMenu
            }));

            this.centerTabContainer.watch("selectedChildWidget", function(name, oval, nval){
                hash("page="+nval.title);
            });


            pSubMenu.addChild(new MenuItem({
                label: "Menu 1",
                onClick: function () {
                    hash("page=Menu 1");
                }
            }));

            pSubMenu.addChild(new MenuItem({
                label: "Menu 2",
                onClick: function () {
                    hash("page=Menu 2");
                }
            }));
        },
        resize: function () {
            this.inherited(arguments);
        }
    });

});