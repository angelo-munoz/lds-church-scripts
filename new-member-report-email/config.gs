//get config 
function loadConfig(id) {
  
  var _configSheet = id ? SpreadsheetApp.openById(id).getSheetByName("CONFIG") : SpreadsheetApp.getActive().getSheetByName("CONFIG");
  
  if (_configSheet) {
     var _data = _configSheet.getDataRange().getValues();
     for (var i = 1; i < _data.length; i++) {
       if (_data[i][0] && _data[i][1]) {
         if (_data[i][2] && _data[i][2] == "Array") {
           if (!_data[i][1] || _data[i][1] == "") {
             config[_data[i][0]] = false;
           } else {
             config[_data[i][0]] = _data[i][1].split(";");
           }
           
         } else if (_data[i][2] && _data[i][2] == "Boolean") {
           config[_data[i][0]] = (_data[i][1] === true || (_data[i][1] && _data[i][1].toLowerCase() == "true"));
         } else {
           config[_data[i][0]] = _data[i][1];
         }
       }
     }
  }
   
}