/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function TweetList(){
    this.tweets = [];
    this.lastTweets = [];
}

TweetList.prototype.appendTweets = function (tweetTextArray) {
    this.lastTweets = [];
    tweetTextArray.forEach(function(tweetText){
        this.lastTweets.push(new Tweet(tweetText));
    }.bind(this));
    this.tweets.concat(this.lastTweets);
};