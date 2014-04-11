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
    "dojo/_base/array",
    "myapp/widget/Page1Widget",
    "myapp/widget/Page2Widget"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, MenuBar, DropDownMenu, PopupMenuBarItem, MenuItem, ContentPane, hash, topic, ioQuery, array, Page1Widget, Page2Widget) {
    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            var pMenuBar = new MenuBar({});
            pMenuBar.placeAt(this.navMenuNode);
            pMenuBar.startup();
            var pSubMenu = new DropDownMenu({});
            pMenuBar.addChild(new PopupMenuBarItem({
                label: "Start",
                popup: pSubMenu
            }));

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
            this.borderContainer.resize();
        },

        generateTabContent: function (hashObj) {
            if (hashObj.page != null) {
                if (hashObj.page == "Menu 1") {
                    var page1Widget = new Page1Widget();
                    var tabContent = {
                        "title": "Menu 1",
                        "widget": page1Widget
                    }
                    return tabContent;
                } else if (hashObj.page == "Menu 2") {
                    var page1Widget = new Page1Widget();
                    var tabContent = {
                        "title": "Menu 2",
                        "widget": page1Widget
                    }
                    return tabContent;
                }
            }
            return null;
        }


    });

});