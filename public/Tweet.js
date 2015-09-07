/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function Tweet(textContent){
    this.text = textContent;
    this.atTheRates = getSetOfWordsByTag("@");
    this.hashTags = getSetOfWordsByTag("#");
    this.domTag = getDomTag();

    //Private Functions
    function getSetOfWordsByTag(tag){
        var regularExpression = new RegExp("\\"+tag +"(\\w+)","g");
        var words = new Set(),
            word;
        while(word = regularExpression.exec(textContent)){
            words.add(word[1]);
        }
        return words;
    }

    function getDomTag(){
        return document.createElement("li").appendChild(document.createTextNode(textContent)).parentNode;
    }
}

Tweet.prototype.show = function(){
    this.domTag.style.display = "block";
};

Tweet.prototype.hide = function(){
    this.domTag.style.display = "none";
};

