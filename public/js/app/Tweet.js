/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function Tweet(textContent){
    this.text = textContent;
    this.atTheRates = this._getSetOfWordsByTag("@");
    this.hashTags = this._getSetOfWordsByTag("#");
    this._dom = this._getDomTag();
}

Tweet.prototype.getDom = function(){
    return this._dom;
};

Tweet.prototype.show = function(){
    this._dom.style.display = "block";
};

Tweet.prototype.hide = function(){
    this._dom.style.display = "none";
};

Tweet.prototype._getSetOfWordsByTag = function (tag){
    var regularExpression = new RegExp("\\"+tag +"(\\w+)","g");
    var words = new Set(),
        word;
    while(word = regularExpression.exec(this.text)){
        words.add(word[1]);
    }
    return words;
};

Tweet.prototype._getDomTag = function(){
    return document.createElement("li").appendChild(document.createTextNode(this.text)).parentNode;
};