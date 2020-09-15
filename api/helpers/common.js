var moment = require('moment'); 

var func = {
   convertToDateOnly: function(date) {
    const format = "YYYY-MM-DD H:i:s";
    return moment(date, format).format('LL');
   },   
   convertTempratureToCelsius: function(value){
      return value-273.15;
   }
};

module.exports = func;