/**
 * Created by kamlesh.m on 07-Sep-15.
 */
function Filter(){
    this.atTheRate = new Set();
    this.hashTag = new Set();
}

Filter.prototype.filterTweetList = function (tweetList) {
    if(this.atTheRate.size == 0 && this.hashTag.size == 0)
        tweetList.showAllTweets();
    else{
        tweetList.tweets.forEach(function (tweet) {
            if(Util.twoSetHasIntersection(tweet.atTheRates,this.atTheRate) || Util.twoSetHasIntersection(tweet.hashTags,this.hashTag)){
                tweet.show();
            }
            else
                tweet.hide();
        }.bind(this));
    }
};