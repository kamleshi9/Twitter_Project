/**
 * Created by kamlesh.m on 11-Aug-15.
 **/

function removePreviousTweets() {
    var previousTweetsList = document.getElementById("tweetsList");
    if (previousTweetsList !== null)
        previousTweetsList.parentNode.removeChild(previousTweetsList);
}

function displayTest(string){
    document.body.appendChild(document.createElement('p').appendChild(document.createTextNode(string)).parentNode);
}

function displayTweets(tweetsArray) {
    var tweetUnorderedList = document.createElement('ul');
    tweetUnorderedList.setAttribute("id", "tweetsList");
    tweetsArray.forEach(function(tweet){
        tweetUnorderedList.appendChild(document.createElement('li').appendChild(document.createTextNode(tweet)).parentNode);
    });
    document.body.appendChild(tweetUnorderedList);
}

var inputElement = document.getElementById("handleInput");
inputElement.addEventListener("keydown",function(event){
    if(event.keyCode === 13) {
        var req = new XMLHttpRequest();
        req.open("GET", "http://localhost:3000/handle?name="+inputElement.value, false);
        req.send(null);
        removePreviousTweets();
        if(req.status < 400)
            displayTweets(JSON.parse(req.responseText));
        else
            console.log('Something broke!');
    }
});
