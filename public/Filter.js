/**
 * Created by kamlesh.m on 07-Sep-15.
 */
function Filter(){

}

Filter.prototype.filterTweetList = function (tweetList,atTheRate,hashTag) {
    if(atTheRate.size == 0 && hashTag.size == 0)
        tweetList.showAllTweets();
    else{
        tweetList.tweets.forEach(function (tweet) {
            if(Util.secondSetIsSubsetOfFirst(tweet.atTheRates,atTheRate) && Util.secondSetIsSubsetOfFirst(tweet.hashTags,hashTag)){
                tweet.show();
            }
            else
                tweet.hide();
        }.bind(this));
    }
};