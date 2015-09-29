/**
 * Created by kamlesh.m on 03-Sep-15.
 */


define(["dojo/_base/xhr"],function(xhr){
   return  {
       fetchTweets : function (twitterHandle) {
           return xhr.get({
               url : "http://localhost:3000/handle?name="+twitterHandle,
               handleAs : "json"
           });
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
