/**
 * Created by kamlesh.m on 28-Aug-15.
 */

var Display={
    updateList : function(listName,list){
        DomElement[listName].innerHTML="";
        var tweetUnorderedList = document.createElement('ul');
        list.forEach(function(entity){
            tweetUnorderedList.appendChild(document.createElement('li').appendChild(document.createTextNode(Display.getText(listName,entity))).parentNode);
        });
        DomElement[listName].appendChild(tweetUnorderedList);
    },
    currentTweetList: function () {
        Display.updateList("atTheRates",tweetList.atTheRates);
        Display.updateList("tweets",tweetList.tweets);
        Display.updateList("hashTags",tweetList.hashTags);
    },
    symbol: {
        atTheRates: "@",
        hashTags: "#"
    },
    getText : function(listName,entity) {
        if ((typeof entity) === "string") return Display.symbol[listName] + entity;
        else if(entity instanceof Tweet) return entity.text;
        else return "";
    }
};