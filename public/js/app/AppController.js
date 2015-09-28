/**
 * Created by kamlesh.m on 31-Aug-15.
 */
define([
        'dojo/_base/declare',
        'app/TwitterHandleInputTextbox',
        'app/TweetList'
    ],
    function (declare,TwitterHandleInputTextbox,TweetList) {
    return declare(null,{
        tweetList : new TweetList(),
        _filter : new Filter(),

        constructor : function(mainDiv) {
            this._hashTagList = new List("#",this.handleHashTagEvent.bind(this));
            this._atTheRateList = new List("@",this.handleAtTheRateEvent.bind(this));
            this._twitterHandleInputTextbox = new TwitterHandleInputTextbox(this.handleNewEntry.bind(this));
            var inputDiv = Util.createElementWithId("div", "inputDiv");
            mainDiv.appendChild(inputDiv);
            inputDiv.appendChild(this._twitterHandleInputTextbox._dom);
            var displayDiv = Util.createElementWithId("div", "displayDiv");
            mainDiv.appendChild(displayDiv);
            displayDiv.appendChild(Util.createElementWithId("div", "atTheRate").appendChild(this._atTheRateList.getDom()).parentNode);
            displayDiv.appendChild(Util.createElementWithId("div", "tweets").appendChild(this.tweetList.getDom()).parentNode);
            displayDiv.appendChild(Util.createElementWithId("div", "hashTag").appendChild(this._hashTagList.getDom()).parentNode);
        },
        handleNewEntry : function(tweetsArray){
            this.tweetList.appendTweets(tweetsArray);
            this._appendNewAtTheRates();
            this._appendNewHashTags();
        },
        handleAtTheRateEvent : function (target) {
            this._handleCheckBoxChange(this._atTheRateList.checkedSet,target);
        },
        handleHashTagEvent : function (target) {
            this._handleCheckBoxChange(this._hashTagList.checkedSet,target);
        },
        _handleCheckBoxChange : function(tagSet,target){
            if(target.checked == true)
                tagSet.add(target.value);
            else
                tagSet.delete(target.value);
            this._filter.filterTweetList(this.tweetList,this._atTheRateList.checkedSet,this._hashTagList.checkedSet);
        },
        _appendNewAtTheRates : function(){
            this._appendSymbolSet("atTheRates",this._atTheRateList);
        },

        _appendNewHashTags : function(){
            this._appendSymbolSet("hashTags",this._hashTagList);
        },

        _appendSymbolSet : function(symbol,tagList){
            this.tweetList.lastTweets.forEach(function(tweet){
                tweet[symbol].forEach(function(tag){
                    tagList.add(tag);
                });
            });
        }
    });
});

