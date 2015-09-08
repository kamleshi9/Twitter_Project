/**
 * Created by kamlesh.m on 31-Aug-15.
 */

function AppController(mainDiv){
    this.tweetlist= new TweetList();
    this.hashTagSet = new Set();
    this.atTheRateSet = new Set();
    this.domElement = new DomElement(mainDiv);
    this.filter = new Filter();


    //Private Functions
    this._initEventListener = function(){
        this.domElement.handleInput.addEventListener("keydown",function(event){
            if(event.keyCode === 13) {
                Util.HttpGetRequest("http://localhost:3000/handle?name="+this.domElement.handleInput.value,this.handleNewEntry);
            }
        }.bind(this));

        this.domElement.atTheRateList.addEventListener("change", function (event) {
            //console.log(event.target.value);
            //console.log(event.target.checked);
            handleCheckBoxChange(this.filter.atTheRate,event.target);
        }.bind(this));
        this.domElement.hashTagList.addEventListener("change", function (event) {
            //console.log(event.target.value);
            //console.log(event.target.checked);
            handleCheckBoxChange(this.filter.hashTag,event.target);
        }.bind(this));
    };
    this._initEventListener();

    var handleCheckBoxChange=function(tagSet,target){
        if(target.checked == true)
            tagSet.add(target.value);
        else
            tagSet.delete(target.value);
        this.filter.filterTweetList(this.tweetlist);
    }.bind(this);

    var appendSymbolSet = function(symbol,tagSet,TagAddToDom){
        this.tweetlist.lastTweets.forEach(function(tweet){
            tweet[symbol].forEach(function(tag){
                if(!tagSet.has(tag)){
                    tagSet.add(tag);
                    TagAddToDom.bind(this.domElement)(tag);
                }
            }.bind(this));
        }.bind(this));
    }.bind(this);

    this.handleNewEntry = function(tweetsArray){
        this.tweetlist.appendTweets(tweetsArray);
        this.domElement.appendTweets(this.tweetlist.lastTweets);
        updateAtTheRate();
        updateHashTag();
    }.bind(this);

    var updateAtTheRate = function(){
        appendSymbolSet("atTheRates",this.atTheRateSet,this.domElement.addAtTheRate);
    }.bind(this);

    var updateHashTag = function(){
        appendSymbolSet("hashTags",this.hashTagSet,this.domElement.addHashTag);
    }.bind(this);
}
