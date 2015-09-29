/**
 * Created by kamlesh.m on 31-Aug-15.
 */
define([
        'dojo/_base/declare',
        'dojo/topic',
        'dojo/dom-construct',
        'app/TwitterHandleInputTextbox',
        'app/List',
        'app/TweetList',
        'app/Filter',
        'dojo/domReady!'
    ],
    function (declare,topic,domConstruct,TwitterHandleInputTextbox,List,TweetList,Filter) {
    return declare(null,{

        constructor : function(mainDiv) {
            this.tweetList = new TweetList();
            this._filter = new Filter();
            this._hashTagList = new List("#");
            this._atTheRateList = new List("@");
            this._twitterHandleInputTextbox = new TwitterHandleInputTextbox();
            this._initDomStructure(mainDiv);
            this._initSubscribers();
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


        _initSubscribers : function(){
            topic.subscribe("newEntry",this.handleNewEntry.bind(this));
            topic.subscribe("newFilterRequestOf#",this.handleHashTagEvent.bind(this));
            topic.subscribe("newFilterRequestOf@",this.handleAtTheRateEvent.bind(this));
        },
        _initDomStructure : function(mainDiv){
            var inputDiv = domConstruct.create("div", {id : "inputDiv"},mainDiv);
            inputDiv.appendChild(this._twitterHandleInputTextbox._dom);
            var displayDiv = domConstruct.create("div", {id : "displayDiv"},mainDiv);
            domConstruct.create("div", {id : "atTheRate"},displayDiv).appendChild(this._atTheRateList.getDom());
            domConstruct.create("div", {id : "tweets"},displayDiv).appendChild(this.tweetList.getDom());
            domConstruct.create("div", {id : "hashTag"},displayDiv).appendChild(this._hashTagList.getDom());
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
