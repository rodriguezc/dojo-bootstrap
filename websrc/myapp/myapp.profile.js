var profile = (function(){
    var testResourceRe = /^dijit\/tests\//,

        copyOnly = function(filename, mid){
            var list = {
                "myapp/myapp.profile":1,
                "myapp/package.json":1
            };
            return (mid in list) || /(css|png|jpg|jpeg|gif|tiff)$/.test(filename);
        };

    return {
        resourceTags:{
            copyOnly: function(filename, mid){
                return copyOnly(filename, mid);
            },

            amd: function(filename, mid){
                return !copyOnly(filename, mid) && /\.js$/.test(filename);
            }
        }
    };
})();


