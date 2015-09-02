/**
 * Created by kamlesh.m on 28-Aug-15.
 */

function DomElement(mainDiv){
    this.handleInput=createElementWithId("input","inputHandle");
    this.atTheRateList=createElementWithId("ul","atTheRateList");
    this.tweetList=createElementWithId("ul","tweetList");
    this.hashTagList=createElementWithId("ul","hashTagList");


    var init = function() {
        var inputDiv = createElementWithId("div", "inputDiv");
        mainDiv.appendChild(inputDiv);
        this.handleInput.setAttribute("type", "text");
        inputDiv.appendChild(this.handleInput);
        var displayDiv = createElementWithId("div", "displayDiv");
        mainDiv.appendChild(displayDiv);
        displayDiv.appendChild(createElementWithId("div", "atTheRate").appendChild(this.atTheRateList).parentNode);
        displayDiv.appendChild(createElementWithId("div", "tweets").appendChild(this.tweetList).parentNode);
        displayDiv.appendChild(createElementWithId("div", "hashTag").appendChild(this.hashTagList).parentNode);
    }.bind(this);

    this.addAtTheRate = function (name) {
        this.atTheRateList.appendChild(createElementWithValue("li",name).appendChild(document.createTextNode("@" + name)).parentNode);
    };

    this.addHashTag = function (name) {
        this.hashTagList.appendChild(createElementWithValue("li",name).appendChild(document.createTextNode("#" + name)).parentNode);
    };

    function createElementWithId(tag,id){
        var element = document.createElement(tag);
        element.id = id;
        return element;
    }
    function createElementWithValue(tag,value){
        var element = document.createElement(tag);
        element.value = value;
        return element;
    }

    init();
}

DomElement.prototype.appendTweets = function(tweetsArray){
    tweetsArray.forEach(function (tweet) {
        this.tweetList.appendChild(tweet.domTag);
    }.bind(this));
};
