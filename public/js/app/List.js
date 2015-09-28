/**
 * Created by kamlesh.m on 18-Sep-15.
 */
function List(symbol,eventHandler){
    this._set = new Set();
    this.checkedSet = new Set();
    this._symbol = symbol;
    this._dom = Util.createElementWithIdAndClass("ul","_atTheRateList","list");
    this._initEventHandler(eventHandler);
}

List.prototype.getDom = function(){
    return this._dom;
};

List.prototype.add = function(tag){
    if(!this._set.has(tag)) {
        this._set.add(tag);
        this._dom.appendChild(this._createNewListElement(tag));
    }
};

List.prototype._createNewListElement = function(tag){
    var element = document.createElement("li");
    element.appendChild(Util.createElementWithTypeAndValue("input", "checkbox",tag));
    element.appendChild(document.createTextNode(this._symbol + tag));
    return element;
};

List.prototype._initEventHandler = function(eventHandler){
    this._dom.addEventListener("change", function (event) {
        eventHandler(event.target);
    });
};