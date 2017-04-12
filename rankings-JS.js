function getRankings() {
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "CorrRankings.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    
    //Printing the ranking of values
    // Outputting as [Attribute Name, Value]
    var entries = JSON.stringify(json[0]);
    //for (var i in entries) {
      //if (json.hasOwnProperty(i)) {
        
    // Note: This version just turns the JSON into a string and outputs the string.
        // We need to figure out how to properly turn the values into objects in order to smoothly
        // output them (The ModelValues.json file creates a 2D array, this is just one 
        // array entry of a bunch of key-value pairs and as far as I can tell so far the 
        // only way to call each key-value pair is to hardcode in every item)
        document.getElementById("insertRankings").innerHTML += "<br>" + entries;
      //}
    //}
}