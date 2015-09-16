/**
 * Created by kamlesh.m on 03-Sep-15.
 */
var Util = {
    createElementWithId : function(tag,id){
        var element = document.createElement(tag);
        element.id = id;
        return element;
    },
    createElementWithValue : function(tag,value){
        var element = document.createElement(tag);
        element.setAttribute("value",value);
        return element;
    },
    createElementWithTypeAndValue : function(tag,type,value){
        var inputElement = this.createElementWithValue("input",value);
        inputElement.type=type;
        return inputElement;
    },
    createElementWithIdAndClass : function(tag,id,className){
        var element = this.createElementWithId(tag,id);
        element.setAttribute("class",className);
        return element;
    },
    httpGetRequest : function (request) {
        var req = new XMLHttpRequest();
        var deffered = jQuery.Deferred();
        req.open("GET", request, true);
        req.addEventListener("load",function(){
            if(req.status == 200)
                deffered.resolve(JSON.parse(req.responseText));
            else if(req.status == 404)
                deffered.reject("Handle Doesn't exist");
            else
                deffered.reject("Cannot fetch tweets");
        });
        req.send(null);
        return deffered.promise();
    },
    fetchTweets : function (twitterHandle, success) {
        var getRequestPromise = Util.httpGetRequest("http://localhost:3000/handle?name="+twitterHandle);
        getRequestPromise.then(success, function (errorText) {
            console.error(errorText);
        });
    },
    twoSetHasIntersection : function (set1,set2) {
        var tmp = false;
        set1.forEach(function (element) {
            if(set2.has(element))
                tmp = true;
        });
        return tmp;
    }
};
