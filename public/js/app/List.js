/**
 * Created by kamlesh.m on 18-Sep-15.
 */

define([
    'dojo/_base/declare',
    'dojo/topic',
    'dojo/on',
    'dojo/dom-construct'
], function (declare,topic,on,domConstruct) {
    return declare(null,
        {
            constructor : function(symbol){
                this._set = new Set();
                this.checkedSet = new Set();
                this._dom = domConstruct.create("ul",{className : "list"});
                this._symbol = symbol;
                on(this._dom,"change", function (event) {
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
                var element = domConstruct.create("li");
                element.appendChild(domConstruct.create("input", {type : "checkbox", value : tag}));
                element.innerHTML += this._symbol + tag;
                return element;
            }
        });
});
