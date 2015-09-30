/**
 * Created by kamlesh.m on 30-Sep-15.
 */
/**
 * Created by kamlesh.m on 30-Sep-15.
 */
define([
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/checkboxWidget.html",
        "dojo/dom-style"
    ],
    function(declare, WidgetBase, TemplatedMixin,template,domStyle){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            baseClass: "checkboxWidget",
            postCreate : function(){
                this.inherited(arguments);
            },
            getDom : function(){
                return this.domNode;
            }
        });
    });