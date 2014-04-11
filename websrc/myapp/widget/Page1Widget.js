define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Page1Widget.html",
    "dijit/MenuBar",
    "dijit/DropDownMenu",
    "dijit/PopupMenuBarItem",
    "dijit/MenuItem",
    "dijit/layout/ContentPane",
    "dojo/hash",
    "dojo/topic",
    "dojo/io-query",
    "dojo/_base/array",
    "myapp/widget/DetailsWidget"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, MenuBar, DropDownMenu, PopupMenuBarItem, MenuItem, ContentPane, hash, topic, ioQuery, array, DetailsWidget) {
    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            this.baseHash = hash();

        },
        resize: function () {
            this.inherited(arguments);  //Obligatoire si on ne veut pas des effets de bord
            this.containerWidget.resize();      //WORKAROUND
        },

        _onRowClick: function (evt) {
            if (evt.detail == 2) {
                var cell = this.queueGridWidget.cell(evt.rowId, evt.columnId);
                var msg = cell.row.model.byId(cell.row.id).item;
                var hashObj = ioQuery.queryToObject(hash());
                hash("page=" + hashObj.page + "&queue=" + msg.id);
            }
        },

        destroy: function () {
            this.inherited(arguments);
        },


        generateTabContent: function (hashObj) {
            if (hashObj.page != null && hashObj.queue != null) {
                var detailsWidget = new DetailsWidget();
                var tabContent = {
                    "title": "Menu 2",
                    "widget": detailsWidget
                }
                return tabContent;
            }

        }})
});