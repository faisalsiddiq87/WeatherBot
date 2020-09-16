var moment = require('moment'); 

var func = {
   convertToDateOnly: function(date) {
    const format = "YYYY-MM-DD H:i:s";
    return moment(date, format).format('LL');
   },   
   convertTempratureToCelsius: function(value){
      var value = value-273.15;
      return value.toFixed(2);
   }
};

module.exports = func;