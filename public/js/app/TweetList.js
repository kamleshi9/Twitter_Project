/**
 * Created by kamlesh.m on 27-Aug-15.
 */
define([
    'dojo/_base/declare',
    'app/Tweet'
],function(declare,Tweet){
    return declare(null,
    {
        tweets : [],
        lastTweets : [],
        _dom : Util.createElementWithIdAndClass("ul","tweetList","list"),


        getDom : function () {
            return this._dom;
        },

        appendTweets : function (tweetTextArray) {
            this.lastTweets = [];
            tweetTextArray.forEach(function(tweetText){
                var tweet = new Tweet(tweetText);
                this.lastTweets.push(tweet);
                this._dom.appendChild(tweet.getDom());
            }.bind(this));
            this.tweets = this.tweets.concat(this.lastTweets);
        },

        showAllTweets : function () {
            this.tweets.forEach(function(tweet){
                tweet.show();
            });
        }
    });
});