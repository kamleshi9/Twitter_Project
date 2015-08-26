var express = require('express'),
    app = express();

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'd6URaKHrOEu7TlrK6BJ03zP8u',
    consumer_secret: 'WynETtZ0R1zSkvxN8fPeyVAkvGEpGcz1QoTn7jG2H3KiC8cLmn',
    access_token_key: '960272940-1FFFCU6J8MGKPX0kJCoUrWe6XqAW6DMxVJa7N8rv',
    access_token_secret: 'trRwswAQkvVekF1stTMc2aIyFm5sH9VV0vApvYZl3kUVE'
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/handle',function(req,res){
    client.get('statuses/user_timeline.json',{screen_name:req.query['name']}, function(error, tweets, response){
        //console.log(res);
        if(error){
            console.log(error);
            res.status(500).send('Something broke!');
            return;
        }
        var tweetsArray = [];
        tweets.forEach(function(tweet){tweetsArray.push(tweet.text);});
        res.send(JSON.stringify(tweetsArray));
    });
});


var server = app.listen(3000,function(){
   console.log('Express Server listening on port %s',server.address().port);
});