/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function Tweet(textContent){
    this.text = textContent;
    this.atTheRates = this._getSetOfWordsByTag("@");
    this.hashTags = this._getSetOfWordsByTag("#");
    this.domTag = this._getDomTag();
}

Tweet.prototype.show = function(){
    this.domTag.style.display = "block";
};

Tweet.prototype.hide = function(){
    this.domTag.style.display = "none";
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