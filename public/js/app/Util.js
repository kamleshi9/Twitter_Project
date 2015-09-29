/**
 * Created by kamlesh.m on 03-Sep-15.
 */


define(["dojo/_base/Deferred","dojo/_base/xhr"],function(Deferred,xhr){
   return  {
       fetchTweets : function (twitterHandle) {
           var deferred = new Deferred();
           xhr.get({
               url : "http://localhost:3000/handle?name="+twitterHandle,
               handleAs : "json",

               load : function(data){
                   deferred.resolve(data);
               },
               error : function(data){
                   console.log(data);
                   deferred.reject("Cannot fetch tweets");
               }
           });
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
