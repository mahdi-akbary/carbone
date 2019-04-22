const fs = require('fs');
const carbone = require('./lib/index');
var data = [
    { "type" : "car"   , "brand" : "Tesla", "cost" : 1000   },
    { "type" : "plane" , "brand" : "Airbus", "cost" : 2000  },
    { "type" : "plane" , "brand" : "Boeing", "cost" : 3000  },
    { "type" : "car"   , "brand" : "Toyota", "cost" : 4500  }
];
// var data = {
//   firstname : 'Niki',
//   lastname : 'Pangul'
// };
// var options = {
//   convertTo : 'pdf' //can be docx, txt, ...
// };

// carbone.render('./templates/xls/flat_table.ods', data, options, function(err, result){
//   if (err) return console.log(err);
//   fs.writeFileSync('report.pdf', result);
//   process.exit(); // to kill automatically LibreOffice workers
// });

carbone.render('./templates/xls/chart.ods', data, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('./output/report.ods', result);
});

