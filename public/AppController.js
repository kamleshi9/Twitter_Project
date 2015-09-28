/**
 * Created by kamlesh.m on 31-Aug-15.
 */

function AppController(mainDiv){
    this.tweetList= new TweetList();
    this._hashTagList = new TagList("#",this.handleHashTagEvent.bind(this));
    this._atTheRateList = new TagList("@",this.handleAtTheRateEvent.bind(this));
    this._handleInput = new HandleInput(this.handleNewEntry.bind(this));
    this._filter = new Filter();
    this._initDomStructure(mainDiv);
}

AppController.prototype.handleNewEntry = function(tweetsArray){
    this.tweetList.appendTweets(tweetsArray);
    this._appendNewAtTheRates();
    this._appendNewHashTags();
};

AppController.prototype.handleAtTheRateEvent = function (target) {
    this._handleCheckBoxChange(this._atTheRateList.checkedSet,target);
};

AppController.prototype.handleHashTagEvent = function (target) {
    this._handleCheckBoxChange(this._hashTagList.checkedSet,target);
};

// Private Members
AppController.prototype._initDomStructure = function(mainDiv) {
    var inputDiv = Util.createElementWithId("div", "inputDiv");
    mainDiv.appendChild(inputDiv);
    inputDiv.appendChild(this._handleInput._dom);
    var displayDiv = Util.createElementWithId("div", "displayDiv");
    mainDiv.appendChild(displayDiv);
    displayDiv.appendChild(Util.createElementWithId("div", "atTheRate").appendChild(this._atTheRateList.getDom()).parentNode);
    displayDiv.appendChild(Util.createElementWithId("div", "tweets").appendChild(this.tweetList.getDom()).parentNode);
    displayDiv.appendChild(Util.createElementWithId("div", "hashTag").appendChild(this._hashTagList.getDom()).parentNode);
};

AppController.prototype._handleCheckBoxChange=function(tagSet,target){
    if(target.checked == true)
        tagSet.add(target.value);
    else
        tagSet.delete(target.value);
    this._filter.filterTweetList(this.tweetList,this._atTheRateList.checkedSet,this._hashTagList.checkedSet);
};

AppController.prototype._appendNewAtTheRates = function(){
    this._appendSymbolSet("atTheRates",this._atTheRateList);
};

AppController.prototype._appendNewHashTags = function(){
    this._appendSymbolSet("hashTags",this._hashTagList);
};

AppController.prototype._appendSymbolSet = function(symbol,tagList){
    this.tweetList.lastTweets.forEach(function(tweet){
        tweet[symbol].forEach(function(tag){
            tagList.add(tag);
        });
    });
};