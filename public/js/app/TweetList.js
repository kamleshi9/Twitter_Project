/**
 * Created by kamlesh.m on 27-Aug-15.
 */
define([
    'dojo/_base/declare',
    'dojo/dom-construct',
    'app/widget/TweetWidget'
],function(declare,domConstruct,TweetWidget){
    return declare(null,
    {
        tweets : [],
        lastTweets : [],
        _dom : domConstruct.create("ul",{id : "tweetList", className : "list"}),


        getDom : function () {
            return this._dom;
        },

        appendTweets : function (tweetTextArray) {
            this.lastTweets = [];
            tweetTextArray.forEach(function(tweetText){
                var tweet = new TweetWidget({text : tweetText}).placeAt(this._dom);
                this.lastTweets.push(tweet);
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