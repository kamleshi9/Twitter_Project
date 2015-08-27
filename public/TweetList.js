/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function TweetList(handle,tweetTextArray){
    var tweets = [];
    this.handle= handle;
    this.tweets = getArrayOfTweetObjects();
    this.atTheRates = getTagSet("atTheRates");
    this.hashTags = getTagSet("hashTags");

    this.display = function(){
        removeTweetListFromDOM();
        var tweetUnorderedList = document.createElement('ul');
        tweetUnorderedList.setAttribute("id", "tweetsList");
        this.tweets.forEach(function(tweet){
            tweetUnorderedList.appendChild(document.createElement('li').appendChild(document.createTextNode(tweet.text)).parentNode);
        });
        document.body.appendChild(tweetUnorderedList);
    };

    function removeTweetListFromDOM() {
        var previousTweetsList = document.getElementById("tweetsList");
        if (previousTweetsList !== null)
            previousTweetsList.parentNode.removeChild(previousTweetsList);
    }
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
    }
}