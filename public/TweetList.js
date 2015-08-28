/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function TweetList(handle,tweetTextArray){
    var tweets = [];
    this.handle= handle;
    this.tweets = getArrayOfTweetObjects();
    this.atTheRates = getTagSet("atTheRates");
    this.hashTags = getTagSet("hashTags");

    function getArrayOfTweetObjects() {
        tweetTextArray.forEach(function(tweetText){
            tweets.push(new Tweet(tweetText));
        });
        return tweets;
    }
    function getTagSet(symbol){
        var tagSet = new Set();
        tweets.forEach(function(tweet){
           tweet[symbol].forEach(function(tag){
               tagSet.add(tag);
           });
        });
        return tagSet;
    }
}