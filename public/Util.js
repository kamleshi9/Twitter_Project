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
    HttpGetRequest : function (request) {
        var req = new XMLHttpRequest();
        req.open("GET", request, false);
        req.send(null);
        return req;
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
