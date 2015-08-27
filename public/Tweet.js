/**
 * Created by kamlesh.m on 27-Aug-15.
 */

function Tweet(textContent){
    this.text = textContent;
    this.atTheRates = getSetOfWordsByTag("@");
    this.hashTags = getSetOfWordsByTag("#");

    function getSetOfWordsByTag(symbol){
        var regularExpression = new RegExp("\\"+symbol +"(\\w+)","g");
        var words = new Set(),
            word;
        while(word = regularExpression.exec(textContent)){
            words.add(word[1]);
        }
        return words;
    }
}

//var tmp = new Tweet("@kamlesh #jasa. #jasdb_ajsb @direct_i. asks");
//
//console.log(tmp.text);
//console.log(tmp.atTheRates);
//console.log(tmp.hashTags);
