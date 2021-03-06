var profile = (function () {
    return {
        basePath: "websrc",
        releaseDir: "release",
        releaseName: "release",
        action: "release",
        layerOptimize: "shrinksafe.keeplines", //shrinksafe tout court crée des problèmes
        stripConsole: "warn", //Enlever les console.log...
        cssOptimize: "comments",


        packages: [
            {
                name: "dojo",
                location: "dojo"
            },
            {
                name: "dijit",
                location: "dijit"
            },
            {
                name: "dojox",
                location: "dojox"
            },
            {
                name: "gridx",
                location: "gridx"
            },
            {
                name: "myapp",
                location: "myapp"
            }
        ],


        layers: {
            "layouts/all": {
                include: [
                    "myapp/widget/IndexWidget",
                    "myapp/main",
                    "myapp/widget/Page1Widget",
                    "myapp/widget/Page2Widget",
                    "myapp/widget/DetailsWidget",
                    "myapp/layout/HashAwareTabContainer",
                    "dojo/dojo",
                    "dojo/selector/acme",
                    "dijit/form/nls/fr/validate",
                    "gridx/nls/fr/gridx",
                    "dijit/nls/fr/loading",
                    "dojox/form/nls/Uploader",
                    "dojox/form/nls/fr/Uploader",
                    "dijit/form/nls/fr/ComboBox",
                    "dijit/nls/loading",
                    "dijit/nls/fr/common",
                    "dijit/nls/loading",
                    "dojox/mvc/at",
                    "dojox/mvc/sync",
                    "dojox/mvc/_atBindingExtension",
                    "dojox/mvc/_atBindingMixin",
                    "dojox/mvc/resolve",
                    "dojo/_base/declare",
                    "dojo/parser",
                    "dojo/topic",
                    "dojo/hash",
                    "dojo/io-query",
                    "dojo/domReady",
                    "dijit/_WidgetBase",
                    "dijit/_OnDijitClickMixin",
                    "dijit/_TemplatedMixin",
                    "dijit/_WidgetsInTemplateMixin",
                    "dojo/request",
                    "dojo/_base/array",
                    "dojo/topic",
                    "dijit/MenuBar",
                    "dijit/DropDownMenu",
                    "dijit/PopupMenuBarItem",
                    "dijit/MenuItem",
                    "dijit/PopupMenuItem",
                    "dijit/layout/ContentPane",
                    "dojo/hash",
                    "dojo/dom-style",
                    "dijit/_WidgetBase",
                    "dijit/_OnDijitClickMixin",
                    "dijit/_TemplatedMixin",
                    "dijit/_WidgetsInTemplateMixin",
                    "dojo/request",
                    "dojo/_base/array",
                    "dojo/topic",
                    "dijit/MenuBar",
                    "dijit/DropDownMenu",
                    "dijit/PopupMenuBarItem",
                    "dijit/MenuItem",
                    "dijit/PopupMenuItem",
                    "dijit/layout/ContentPane",
                    "dojo/hash",
                    "dojo/store/Memory",
                    "dijit/_WidgetBase",
                    "dijit/_OnDijitClickMixin",
                    "dijit/_TemplatedMixin",
                    "dijit/_WidgetsInTemplateMixin",
                    "dojo/request",
                    "dijit/Dialog",
                    "dojo/_base/array",
                    "dojo/store/Memory",
                    "dojox/html/entities",
                    "dojo/topic","dojo/dom-style",
                    "dojo/dom-form",
                    "dijit/layout/BorderContainer",
                    "dijit/layout/ContentPane",
                    "dojox/mvc/Output",
                    "dijit/form/Button",
                    "dijit/layout/TabContainer",
                    "dijit/Dialog",
                    "dojox/form/Uploader",
                    "dojox/form/uploader/FileList",
                    "dojox/mvc/Repeat",
                    "dijit/form/FilteringSelect",
                    "dijit/form/ComboBox",
                    "dijit/form/Textarea",
                    "gridx/Grid",
                    "gridx/modules/Filter",
                    "gridx/core/model/extensions/ClientFilter",
                    "gridx/modules/SingleSort",
                    "gridx/core/model/extensions/Sort",
                    "gridx/modules/filter/QuickFilter",
                    "dojox/gesture/tap",
                    "gridx/support/QuickFilter",
                    "gridx/modules/Puller",
                    "gridx/modules/Bar",
                    "dijit/form/ComboButton",
                    "dijit/form/DropDownButton",
                    "dojox/gesture/Base",
                    "gridx/modules/VirtualVScroller",
                    "gridx/modules/IndirectSelect",
                    "gridx/modules/RowHeader",
                    "gridx/modules/extendedSelect/Row",
                    "gridx/modules/extendedSelect/_RowCellBase",
                    "gridx/modules/extendedSelect/_Base",
                    "gridx/core/model/extensions/Mark",
                    "gridx/modules/AutoScroll",
                    "dojo/store/JsonRest",
                    "dojo/data/ObjectStore"
           ],
                customBase: true
            }
        }
    };
})();