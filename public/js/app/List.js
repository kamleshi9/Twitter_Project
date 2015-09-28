/**
 * Created by kamlesh.m on 18-Sep-15.
 */

define([
    'dojo/_base/declare',
    'dojo/topic',
    'app/Util'
], function (declare,topic,Util) {
    return declare(null,
        {
            constructor : function(symbol){
                this._set = new Set();
                this.checkedSet = new Set();
                this._dom = Util.createElementWithClass("ul","list");
                this._symbol = symbol;
                this._dom.addEventListener("change", function (event) {
                    topic.publish("newFilterRequestOf"+symbol,event.target);
                });
            },
            getDom : function(){
                return this._dom;
            },
            add : function(tag){
                if(!this._set.has(tag)) {
                    this._set.add(tag);
                    this._dom.appendChild(this._createNewListElement(tag));
                }
            },
            _createNewListElement : function(tag){
                var element = document.createElement("li");
                element.appendChild(Util.createElementWithTypeAndValue("input", "checkbox",tag));
                element.appendChild(document.createTextNode(this._symbol + tag));
                return element;
            }
        });
});
