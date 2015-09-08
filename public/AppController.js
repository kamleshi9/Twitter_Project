/**
 * Created by kamlesh.m on 31-Aug-15.
 */

function AppController(mainDiv){
    this.tweetlist= new TweetList();
    this.hashTagSet = new Set();
    this.atTheRateSet = new Set();
    this.domElement = new DomElement(mainDiv,this.handleNewEntry,this.handleAtTheRateEvent,this.handleHashTagEvent);
    this.filter = new Filter();
}

AppController.prototype.handleNewEntry = function(tweetsArray){
    this.tweetlist.appendTweets(tweetsArray);
    this.domElement.appendTweets(this.tweetlist.lastTweets);
    this._appendNewAtTheRates();
    this._appendNewHashTags();
};

AppController.prototype.handleAtTheRateEvent = function (target) {
    this._handleCheckBoxChange(this.filter.atTheRate,target);
};

AppController.prototype.handleHashTagEvent = function (target) {
    this._handleCheckBoxChange(this.filter.hashTag,target);
};


// Private Members

AppController.prototype._handleCheckBoxChange=function(tagSet,target){
    if(target.checked == true)
        tagSet.add(target.value);
    else
        tagSet.delete(target.value);
    this.filter.filterTweetList(this.tweetlist);
};

AppController.prototype._appendNewAtTheRates = function(){
    this._appendSymbolSet("atTheRates",this.atTheRateSet,this.domElement.addAtTheRate);
};

AppController.prototype._appendNewHashTags = function(){
    this._appendSymbolSet("hashTags",this.hashTagSet,this.domElement.addHashTag);
};

AppController.prototype._appendSymbolSet = function(symbol,tagSet,TagAddToDom){
    this.tweetlist.lastTweets.forEach(function(tweet){
        tweet[symbol].forEach(function(tag){
            if(!tagSet.has(tag)){
                tagSet.add(tag);
                TagAddToDom.bind(this.domElement)(tag);
            }
        }.bind(this));
    }.bind(this));
};