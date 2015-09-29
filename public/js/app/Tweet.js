/**
 * Created by kamlesh.m on 27-Aug-15.
 */
define([
    'dojo/_base/declare',
    'dojo/dom-construct'
], function (declare,domConstruct) {
    return declare(null,
        {
            constructor : function(textContent){
                this.text = textContent;
                this.atTheRates = this._getSetOfWordsByTag("@");
                this.hashTags = this._getSetOfWordsByTag("#");
                this._dom = this._getDomTag();
            },
            getDom : function(){
                return this._dom;
            },

            show : function(){
                this._dom.style.display = "block";
            },

            hide : function(){
                this._dom.style.display = "none";
            },
            _getSetOfWordsByTag : function (tag){
                var regularExpression = new RegExp("\\"+tag +"(\\w+)","g");
                var words = new Set(),
                    word;
                while(word = regularExpression.exec(this.text)){
                    words.add(word[1]);
                }
                return words;
            },
            _getDomTag : function(){
                return domConstruct.create("li",{innerHTML : this.text});
            }
        });
});