/**
 * Created by kamlesh.m on 03-Sep-15.
 */


define(["dojo/_base/Deferred"],function(Deferred){
   return  {
       fetchTweets : function (twitterHandle) {
           var request = "http://localhost:3000/handle?name="+twitterHandle;
           var req = new XMLHttpRequest();
           var deferred = new Deferred();
           req.open("GET", request, true);
           req.addEventListener("load",function(){
               if(req.status == 200)
                   deferred.resolve(JSON.parse(req.responseText));
               else if(req.status == 404)
                   deferred.reject("Handle Doesn't exist");
               else
                   deferred.reject("Cannot fetch tweets");
           });
           req.send(null);
           return deferred;
       },
       secondSetIsSubsetOfFirst : function (set1,set2) {
           var tmp = true;
           set2.forEach(function (element) {
               if(!set1.has(element))
                   tmp = false;
           });
           return tmp;
       }
   };
});
