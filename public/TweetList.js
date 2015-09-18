/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function TweetList(){
    this.tweets = [];
    this.lastTweets = [];
    this._dom = Util.createElementWithIdAndClass("ul","tweetList","list");
}

TweetList.prototype.getDom = function () {
    return this._dom;
};

TweetList.prototype.appendTweets = function (tweetTextArray) {
    this.lastTweets = [];
    tweetTextArray.forEach(function(tweetText){
        var tweet = new Tweet(tweetText);
        this.lastTweets.push(tweet);
        this._dom.appendChild(tweet.getDom());
    }.bind(this));
    this.tweets = this.tweets.concat(this.lastTweets);
};

TweetList.prototype.showAllTweets = function () {
    this.tweets.forEach(function(tweet){
        tweet.show();
    });
};