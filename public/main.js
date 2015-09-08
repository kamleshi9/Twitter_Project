/**
 * Created by kamlesh.m on 11-Aug-15.
 **/
var appController;
var map = new WeakMap();
var _ = function (object) {
    if (!map.has(object))
        map.set(object, {});
    return map.get(object);
};

window.addEventListener("load", function () {
    appController = new AppController(document.getElementById("bodyDiv"));
});
