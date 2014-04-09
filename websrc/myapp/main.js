require([
    "dojo/parser",
    "myapp/widget/IndexWidget",
    "dojo/topic",
    "dojo/hash",
    "dojo/io-query",
    "dojo/domReady!"
], function (parser, IndexWidget, topic, hash,ioQuery) {
    parser.parse();
    var indexWidget = new IndexWidget();
    indexWidget.placeAt("bodyContent");

    //if there is an hash -> invoke hashchange to open page
    if(hash()) {
        topic.publish("/dojo/hashchange", hash());
    }
});