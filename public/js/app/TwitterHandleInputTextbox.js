/**
 * Created by kamlesh.m on 28-Aug-15.
 */
define([ 'dojo/_base/declare'], function (declare) {
    return declare(null,{
        _dom : Util.createElementWithIdAndType("input","inputHandle","text"),
        constructor : function(newEntryEventHandler) {
            this._dom.addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    Util.fetchTweets(this._dom.value).then(newEntryEventHandler, function (errorText) {
                        console.error(errorText);
                    });
                }
            }.bind(this));
        }
    });
});
