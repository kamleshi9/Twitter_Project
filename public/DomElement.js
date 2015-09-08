/**
 * Created by kamlesh.m on 28-Aug-15.
 */

function DomElement(mainDiv){
    this.handleInput=Util.createElementWithId("input","inputHandle");
    this.atTheRateList=Util.createElementWithIdAndClass("ul","atTheRateList","list");
    this.tweetList=Util.createElementWithIdAndClass("ul","tweetList","list");
    this.hashTagList=Util.createElementWithIdAndClass("ul","hashTagList","list");
    this._init(mainDiv);
}

DomElement.prototype.addAtTheRate = function (name) {
    this.atTheRateList.appendChild(this._createNewListElement(name,"@"));
};

DomElement.prototype.addHashTag = function (name) {
    this.hashTagList.appendChild(this._createNewListElement(name,"#"));
};

DomElement.prototype.appendTweets = function (tweetsArray) {
    tweetsArray.forEach(function (tweet) {
        this.tweetList.appendChild(tweet.domTag);
    }.bind(this));
};

DomElement.prototype._init = function(mainDiv) {
    var inputDiv = Util.createElementWithId("div", "inputDiv");
    mainDiv.appendChild(inputDiv);
    this.handleInput.setAttribute("type", "text");
    inputDiv.appendChild(this.handleInput);
    var displayDiv = Util.createElementWithId("div", "displayDiv");
    mainDiv.appendChild(displayDiv);
    displayDiv.appendChild(Util.createElementWithId("div", "atTheRate").appendChild(this.atTheRateList).parentNode);
    displayDiv.appendChild(Util.createElementWithId("div", "tweets").appendChild(this.tweetList).parentNode);
    displayDiv.appendChild(Util.createElementWithId("div", "hashTag").appendChild(this.hashTagList).parentNode);
};

DomElement.prototype._createNewListElement = function(name, symbol) {
    var element = document.createElement("li");
    element.appendChild(Util.createElementWithTypeAndValue("input", "checkbox",name));
    element.appendChild(document.createTextNode(symbol + name));
    return element;
};
