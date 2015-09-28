/**
 * Created by kamlesh.m on 28-Aug-15.
 */
define([ 'dojo/_base/declare','dojo/topic','dojo/on','app/Util'], function (declare,topic,on,Util) {
    return declare(null,{
        _dom : Util.createElementWithIdAndType("input","inputHandle","text"),
        constructor : function() {
            on(this._dom,"keydown", function (event) {
                if (event.keyCode === 13) {
                    Util.fetchTweets(this._dom.value).then(function(tweetArray){
                        topic.publish("newEntry",tweetArray);
                    }, function (errorText) {
                        console.error(errorText);
                    });
                }
            }.bind(this));
        }
    });
});
