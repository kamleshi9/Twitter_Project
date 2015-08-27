/**
 * Created by kamlesh.m on 11-Aug-15.
 **/
//function displayTest(string){
//    document.body.appendChild(document.createElement('p').appendChild(document.createTextNode(string)).parentNode);
//}

var tweetList;

var inputElement = document.getElementById("handleInput");
inputElement.addEventListener("keydown",function(event){
    if(event.keyCode === 13) {
        var req = new XMLHttpRequest();
        req.open("GET", "http://localhost:3000/handle?name="+inputElement.value, false);
        req.send(null);
        if(req.status < 400) {
            tweetList = new TweetList(inputElement.value,JSON.parse(req.responseText));
            tweetList.display();
        }
        else
            console.log('Cannot fetch tweets');
    }
});
