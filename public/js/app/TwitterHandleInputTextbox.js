/**
 * Created by kamlesh.m on 28-Aug-15.
 */

function TwitterHandleInputTextbox(newEntryEventHandler){
    this._dom=Util.createElementWithIdAndType("input","inputHandle","text");
    this._initEventHandler(newEntryEventHandler);
}

TwitterHandleInputTextbox.prototype._initEventHandler = function(newEntryEventHandler){
    this._dom.addEventListener("keydown",function(event){
        if(event.keyCode === 13) {
            Util.fetchTweets(this._dom.value).then(newEntryEventHandler, function (errorText) {
                console.error(errorText);
            });
        }
    }.bind(this));
};