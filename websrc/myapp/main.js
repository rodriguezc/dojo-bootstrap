require([
    "dojo/parser",
    "myapp/widget/IndexWidget",
    "dojo/topic",
    "dojo/hash",
    "dojo/io-query",
    "dojo/domReady!"
], function (parser, IndexWidget, topic, hash,ioQuery) {
    parser.parse();
    var startingHash = hash();

    if(startingHash) {
        hash(""); //very important: before creating IndexWidget else IndexWidget is not initialized with the good hash
    }

    var indexWidget = new IndexWidget();
    indexWidget.placeAt("bodyContent");

    //if there is an hash -> invoke hashchange to open page
    if(startingHash) {
        for (var i = 0; i <  startingHash.length; i++) {
            var currentChar = startingHash[i];
            if(currentChar == "&") {
                hash(startingHash.substring(0, i));
                topic.publish("/dojo/hashchange", startingHash.substring(0, i));
            }
            else if(startingHash.length-1 == i) {
                hash(startingHash);
                topic.publish(startingHash);
            }
        }
    }
});