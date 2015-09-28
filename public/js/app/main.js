/**
 * Created by kamlesh.m on 11-Aug-15.
 **/
var appController;

require([
    "app/AppController",
    "dojo/domReady!"
], function (AppController) {
    appController = new AppController(document.getElementById("bodyDiv"));
});

