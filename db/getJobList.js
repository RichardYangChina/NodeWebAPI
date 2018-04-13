var sqlite3 = require('sqlite3').verbose();

exports.getJobData = function () {
   var db = new sqlite3.Database('DBFile/JobHunting.db');
   const uuidv1 = require('uuid/v1');
   db.serialize(function () {
       db.all('select * from T_Job', function (err, rows) {
           console.log(rows);
           rows.forEach(function (row) {
               console.log(row.UserName);
           });
       });
   });

   db.close();
}