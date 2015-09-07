/**
 * Created by kamlesh.m on 31-Aug-15.
 */

function AppController(mainDiv){
    this.tweetlist= new TweetList();
    this.hashTagSet = new Set();
    this.atTheRateSet = new Set();
    this.domElement = new DomElement(mainDiv);
    initEventListener.bind(this)();

    //Private Functions
    function initEventListener(){
        this.domElement.handleInput.addEventListener("keydown",function(event){
            if(event.keyCode === 13) {
                var req = Util.HttpGetRequest("http://localhost:3000/handle?name="+this.domElement.handleInput.value);
                if(req.status < 400)
                    handleNewEntry(JSON.parse(req.responseText));
                else
                    console.log('Cannot fetch tweets');
            }
        }.bind(this));

        this.domElement.atTheRateList.addEventListener("change", function (event) {
            console.log(event.target.value);
            console.log(event.target.checked);
        });
        this.domElement.hashTagList.addEventListener("change", function (event) {
            console.log(event.target.value);
            console.log(event.target.checked);
        });
    }

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

    var handleNewEntry = function(tweetsArray){
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
