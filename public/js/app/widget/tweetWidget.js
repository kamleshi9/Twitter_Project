/**
 * Created by kamlesh.m on 30-Sep-15.
 */
define([
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/tweetWidget.html",
        "dojo/dom-style"
    ],
    function(declare, WidgetBase, TemplatedMixin,template,domStyle){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            baseClass: "tweetWidget",
            postCreate : function(){
                this.inherited(arguments);
                this.atTheRates = this._getSetOfWordsByTag("@");
                this.hashTags = this._getSetOfWordsByTag("#");
            },
            getDom : function(){
                return this.domNode;
            },
            show : function(){
                domStyle.set(this.domNode,"display","block");
            },
            hide : function(){
                domStyle.set(this.domNode,"display","none");
            },
            _getSetOfWordsByTag : function (tag){
                var regularExpression = new RegExp("\\"+tag +"(\\w+)","g");
                var words = new Set(),
                    word;
                while(word = regularExpression.exec(this.text)){
                    words.add(word[1]);
                }
                return words;
            }
        });
    });