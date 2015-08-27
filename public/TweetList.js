/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function TweetList(handle,tweetTextArray){
    this.handle= handle;
    this.tweets = getArrayOfTweetObject();

    function getArrayOfTweetObject() {
        var tweets = []
        tweetTextArray.forEach(function(tweetText){
            tweets.push(new Tweet(tweetText));
        });
        return tweets;
    }
}