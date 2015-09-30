/**
 * Created by kamlesh.m on 18-Sep-15.
 */

define([
    'dojo/_base/declare',
    'dojo/topic',
    'dojo/on',
    'dojo/dom-construct',
    'app/widget/CheckboxWidget'
], function (declare,topic,on,domConstruct,CheckboxWidget) {
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
                    var checkbox = new CheckboxWidget( {name: tag, symbol: this._symbol} );
                    this._dom.appendChild(checkbox.getDom());
                }
            }
        });
});
